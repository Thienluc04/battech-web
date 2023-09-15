import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  useDeleteListTagMutation,
  useDeleteTagMutation,
  useLazyGetListTagQuery,
} from '@/api/tagApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { CardIcon, NotePencilIcon, TrashIcon } from '@/components/icons';
import { selectListTag, selectParamsTag, tagActions } from '@/features/tag/tagSlice';
import { BottomAdminTable } from '@/modules';

const AUTHOR_PER_PAGE = 5;

export function TableTag() {
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [listChecked, setListChecked] = useState<string[]>([]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const listTag = useAppSelector(selectListTag);
  const currentParams = useAppSelector(selectParamsTag);

  const dispatch = useAppDispatch();

  const [getListTag, { data: tagResponse, isLoading }] = useLazyGetListTagQuery();
  const [deleteTag] = useDeleteTagMutation();
  const [deleteListTag] = useDeleteListTagMutation();

  useEffect(() => {
    getListTag(currentParams);
  }, [currentParams]);

  useEffect(() => {
    if (tagResponse) {
      dispatch(tagActions.setListTag(tagResponse.data));
    }
  }, [tagResponse]);

  useEffect(() => {
    if (tagResponse?.pagination) {
      setTotalPage(Math.ceil(tagResponse.pagination.totalRows / AUTHOR_PER_PAGE));
    }
  }, [tagResponse?.pagination]);

  useEffect(() => {
    if (currentPage > 0) {
      dispatch(tagActions.setParams({ ...currentParams, page: currentPage }));
    }
  }, [currentPage]);

  const handleDeleteListTag = async () => {
    if (listChecked.length > 0) {
      Swal.fire({
        title: 'Bạn chắc chứ?',
        text: 'Sau khi đồng ý, các tag đã chọn sẽ bị xóa khỏi danh sách',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteListTag(listChecked);
          Swal.fire('Xóa thành công!', 'Đã xóa các tag đã chọn khỏi danh sách', 'success');
          getListTag(currentParams);
          setListChecked([]);
        }
      });
    }
  };

  const handleDeleteTag = (id: string) => {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: 'Sau khi đồng ý, tag này sẽ xóa khỏi danh sách',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTag(id);
        Swal.fire('Xóa thành công!', 'Đã xóa tag khỏi danh sách', 'success');
        getListTag(currentParams);
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
      listTag.forEach((item) => {
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
      <table className="w-full rounded-md admin-table">
        <thead className="text-white bg-primaryAdmin">
          <tr>
            <th className="w-[45px] rounded-tl-md">
              <input type="checkbox" onChange={(e) => handleCheckAll(e.target.checked)} />
            </th>
            <th>Tag</th>
            <th className="rounded-tr-md w-[126px]">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {listTag.map((item, index) => (
            <tr key={item._id}>
              <td className="w-[45px] text-center">
                <input
                  type="checkbox"
                  onChange={(e) => handleChangeInput(e.target.checked, item._id)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              </td>
              <td>{item.name}</td>
              <td>
                <div className="flex items-center justify-center gap-p10">
                  <CardIcon></CardIcon>
                  <Link to={`/manage/tags/${item._id}`}>
                    <NotePencilIcon></NotePencilIcon>
                  </Link>
                  <TrashIcon
                    className="cursor-pointer"
                    onClick={() => handleDeleteTag(item._id as string)}
                  ></TrashIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && listTag.length <= 0 && (
        <div>
          {new Array(5).fill(0).map((_, index) => (
            <Skeleton key={index} className="w-full h-[45px]"></Skeleton>
          ))}
        </div>
      )}
      <BottomAdminTable
        currentPage={currentPage}
        handleDeleteList={handleDeleteListTag}
        isLoading={isLoading}
        list={listTag}
        listChecked={listChecked}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      ></BottomAdminTable>
    </>
  );
}
