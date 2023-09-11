import { useEffect, useState } from 'react';

import { useGetListPostQuery } from '@/api/postApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { ArrowDownIcon, CardIcon, NotePencilIcon, TrashIcon } from '@/components/icons';
import { postActions, selectListPost, selectParamsPost } from '@/features/post/postSlice';

import { Pagination } from '..';

const POST_PER_PAGE = 5;

export interface TableAdminProps {}

export function TablePost(props: TableAdminProps) {
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentParams = useAppSelector(selectParamsPost);
  const listPost = useAppSelector(selectListPost);

  const dispatch = useAppDispatch();

  const { data: postResponse, isLoading } = useGetListPostQuery(currentParams);

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

  return (
    <>
      <table className="w-full rounded-md admin-table" {...props}>
        <thead className="text-white bg-primaryAdmin">
          <tr>
            <th className="w-20 rounded-tl-md">ID</th>
            <th className="w-2/5">Tên bài viết</th>
            <th className="w-[15%]">Mô tả</th>
            <th>Tác giả</th>
            <th>Chủ đề</th>
            <th>Ngày đăng bài</th>
            <th className="rounded-tr-md w-[126px]">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {listPost.map((item, index) => (
            <tr key={index}>
              <td title={item._id}>{item._id.slice(0, 8) + '...'}</td>
              <td>{item.title}</td>
              <td className="titleShort">{item.description}</td>
              <td>{item.author}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
              <td>
                <div className="flex items-center justify-center gap-p10">
                  <CardIcon></CardIcon>
                  <NotePencilIcon></NotePencilIcon>
                  <TrashIcon></TrashIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-p10 px-3 flex justify-between items-center bg-[#E3E5E8] rounded-b-md">
        {listPost.length > 0 && (
          <>
            <div className="flex items-center gap-1 rounded bg-white border border-[#D5D8DD] py-1 px-2 text-textAdmin">
              50
              <ArrowDownIcon></ArrowDownIcon>
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPage={totalPage}
              type="admin"
            ></Pagination>
          </>
        )}
        {listPost.length <= 0 && !isLoading && (
          <p className="block w-full text-center">Không tìm thấy bài viết nào phù hợp </p>
        )}
      </div>
    </>
  );
}
