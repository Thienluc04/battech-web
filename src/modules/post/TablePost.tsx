import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  useDeleteListPostMutation,
  useDeletePostMutation,
  useGetListPostQuery,
} from '@/api/postApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { CardIcon, NotePencilIcon, TrashIcon } from '@/components/icons';
import { postActions, selectListPost, selectParamsPost } from '@/features/post/postSlice';
import { BottomAdminTable } from '@/modules';

const POST_PER_PAGE = 5;

export interface TableAdminProps {}

export function TablePost(props: TableAdminProps) {
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [listChecked, setListChecked] = useState<string[]>([]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const currentParams = useAppSelector(selectParamsPost);
  const listPost = useAppSelector(selectListPost);

  const dispatch = useAppDispatch();

  const { data: postResponse, isLoading, refetch } = useGetListPostQuery(currentParams);
  const [deletePost] = useDeletePostMutation();
  const [deleteListPost] = useDeleteListPostMutation();

  useEffect(() => {
    if (postResponse) {
      dispatch(postActions.setListPost(postResponse.data));
    }
  }, [postResponse]);

  useEffect(() => {
    if (postResponse?.pagination) {
      setTotalPage(Math.ceil(postResponse.pagination.totalRows / POST_PER_PAGE));
    }
  }, [postResponse?.pagination]);

  useEffect(() => {
    dispatch(postActions.setParams({ ...currentParams, page: currentPage }));
  }, [currentPage]);

  const handleDeleteListPost = async () => {
    if (listChecked.length > 0) {
      Swal.fire({
        title: 'Bạn chắc chứ?',
        text: 'Sau khi đồng ý, các bài viết đã chọn sẽ bị xóa khỏi danh sách',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteListPost(listChecked);
          Swal.fire('Xóa thành công!', 'Đã xóa các bài viết đã chọn khỏi danh sách', 'success');
          refetch();
          setListChecked([]);
        }
      });
    }
  };

  const handleDeletePost = async (id: string) => {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: 'Sau khi đồng ý, bài viết này sẽ xóa khỏi danh sách',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deletePost(id);
        Swal.fire('Xóa thành công!', 'Đã xóa bài viết khỏi danh sách', 'success');
        refetch();
      }
    });
  };

  const handleCheckAll = (checked: boolean) => {
    if (checked) {
      const listInput = inputRefs.current;
      if (listInput) {
        listInput.forEach((item) => {
          item!.checked = true;
        });
      }
      setListChecked([]);
      listPost.forEach((item) => {
        setListChecked((prev) => [...prev, item._id]);
      });
    } else {
      const listInput = inputRefs.current;
      if (listInput) {
        listInput.forEach((item) => {
          item!.checked = false;
        });
      }
      setListChecked([]);
    }
  };

  const handleChangeInput = (checked: boolean, id: string) => {
    if (checked) {
      const item = listChecked.find((item) => item === id);
      if (!item) {
        setListChecked((prev) => [...prev, id]);
      }
    } else {
      const list = listChecked.filter((item) => item !== id);
      setListChecked(list);
    }
  };

  return (
    <>
      <table className="w-full rounded-md admin-table" {...props}>
        <thead className="text-white bg-primaryAdmin">
          <tr>
            <th className="w-[45px] rounded-tl-md">
              <input type="checkbox" onChange={(e) => handleCheckAll(e.target.checked)} />
            </th>
            <th className="w-20">ID</th>
            <th className="w-1/6 xl:w-2/5">Tên bài viết</th>
            <th className="w-[15%]">Mô tả</th>
            <th>Tác giả</th>
            <th>Chủ đề</th>
            <th>Ngày đăng bài</th>
            <th className="rounded-tr-md w-[126px]">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {listPost.map((item, index) => (
            <tr key={item._id}>
              <td className="w-[45px] text-center">
                <input
                  type="checkbox"
                  onChange={(e) => handleChangeInput(e.target.checked, item._id)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              </td>
              <td title={item._id}>{item._id.slice(0, 8) + '...'}</td>
              <td>{item.title}</td>
              <td className="titleShort">{item.description}</td>
              <td>{item.author}</td>
              <td>{item.topic}</td>
              <td>{item.date}</td>
              <td>
                <div className="flex items-center justify-center gap-p10">
                  <CardIcon></CardIcon>
                  <Link to={`/manage/posts/${item.slug}`}>
                    <NotePencilIcon></NotePencilIcon>
                  </Link>
                  <TrashIcon
                    className="cursor-pointer"
                    onClick={() => handleDeletePost(item._id)}
                  ></TrashIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && listPost.length <= 0 && (
        <div>
          {new Array(5).fill(0).map((_, index) => (
            <Skeleton key={index} className="w-full h-[45px]"></Skeleton>
          ))}
        </div>
      )}
      <BottomAdminTable
        currentPage={currentPage}
        handleDeleteList={handleDeleteListPost}
        isLoading={isLoading}
        list={listPost}
        listChecked={listChecked}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      ></BottomAdminTable>
    </>
  );
}
