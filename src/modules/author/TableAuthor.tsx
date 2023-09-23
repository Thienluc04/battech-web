import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  useDeleteAuthorMutation,
  useDeleteListAuthorMutation,
  useGetListAuthorQuery,
} from '@/api/authorApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { CardIcon, NotePencilIcon, TrashIcon } from '@/components/icons';
import { authorActions, selectListAuthor, selectParamsAuthor } from '@/features/author/authorSlice';
import { BottomAdminTable } from '@/modules';

const AUTHOR_PER_PAGE = 5;

export function TableAuthor() {
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const listAuthor = useAppSelector(selectListAuthor);
  const currentParams = useAppSelector(selectParamsAuthor);
  const [listChecked, setListChecked] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const dispatch = useAppDispatch();

  const { data: authorResponse, isLoading, refetch } = useGetListAuthorQuery(currentParams);
  const [deleteAuthor] = useDeleteAuthorMutation();
  const [deleteListAuthor] = useDeleteListAuthorMutation();

  useEffect(() => {
    if (authorResponse) {
      dispatch(authorActions.setListAuthor(authorResponse.data));
    }
  }, [authorResponse]);

  useEffect(() => {
    if (currentParams) {
      setCurrentPage(currentParams?.page as number);
    }
  }, [currentParams]);

  useEffect(() => {
    if (authorResponse?.pagination) {
      setTotalPage(Math.ceil(authorResponse.pagination.totalRows / AUTHOR_PER_PAGE));
    }
  }, [authorResponse?.pagination]);

  useEffect(() => {
    if (currentPage > 0) {
      dispatch(authorActions.setParams({ ...currentParams, page: currentPage }));
      setCheckAll(false);
    }
  }, [currentPage]);

  useEffect(() => {
    if (checkAll) {
      const listInput = inputRefs.current;
      if (listInput) {
        listInput.forEach((item) => {
          if (item) item.checked = true;
        });
      }
      setListChecked([]);
      listAuthor.forEach((item) => {
        setListChecked((prev) => [...prev, item._id as string]);
      });
    } else {
      const listInput = inputRefs.current;
      if (listInput) {
        listInput.forEach((item) => {
          if (item) item.checked = false;
        });
      }
      setListChecked([]);
    }
  }, [checkAll]);

  const handleDeleteListAuthor = async () => {
    if (listChecked.length > 0) {
      Swal.fire({
        title: 'Bạn chắc chứ?',
        text: 'Sau khi đồng ý, các tác giả đã chọn sẽ bị xóa khỏi danh sách',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteListAuthor(listChecked);
          Swal.fire('Xóa thành công!', 'Đã xóa các tác giả đã chọn khỏi danh sách', 'success');
          refetch();
          setListChecked([]);
          setCheckAll(false);
          setCurrentPage(1);
        }
      });
    }
  };

  const handleDeleteAuthor = (id: string) => {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: 'Sau khi đồng ý, tác giả này sẽ xóa khỏi danh sách',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteAuthor(id);
        Swal.fire('Xóa thành công!', 'Đã xóa tác giả khỏi danh sách', 'success');
        refetch();
      }
    });
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
              <input type="checkbox" checked={checkAll} onChange={() => setCheckAll(!checkAll)} />
            </th>
            <th>Tên tác giả</th>
            <th className="rounded-tr-md w-[126px]">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {listAuthor.map((item, index) => (
            <tr key={item._id}>
              <td className="w-[45px] text-center">
                <input
                  type="checkbox"
                  onChange={(e) => handleChangeInput(e.target.checked, item._id as string)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              </td>
              <td>{item.name}</td>
              <td>
                <div className="flex items-center justify-center gap-p10">
                  <CardIcon></CardIcon>
                  <Link to={`/manage/authors/${item._id}`}>
                    <NotePencilIcon></NotePencilIcon>
                  </Link>
                  <TrashIcon
                    className="cursor-pointer"
                    onClick={() => handleDeleteAuthor(item._id as string)}
                  ></TrashIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && listAuthor.length <= 0 && (
        <div>
          {new Array(5).fill(0).map((_, index) => (
            <Skeleton key={index} className="w-full h-[45px]"></Skeleton>
          ))}
        </div>
      )}
      <BottomAdminTable
        currentPage={currentPage}
        isLoading={isLoading}
        list={listAuthor}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        handleDeleteList={handleDeleteListAuthor}
        listChecked={listChecked}
      ></BottomAdminTable>
    </>
  );
}
