import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDeleteTopicMutation, useGetListTopicQuery } from '@/api/topicApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { ArrowDownIcon, CardIcon, NotePencilIcon, TrashIcon } from '@/components/icons';
import { selectListTopic, selectParamsTopic, topicActions } from '@/features/topic/topicSlice';

import { Pagination } from '..';

const TOPIC_PER_PAGE = 5;

export function TableTopic() {
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const listTopic = useAppSelector(selectListTopic);
  const currentParams = useAppSelector(selectParamsTopic);

  const dispatch = useAppDispatch();

  const { data: topicResponse, isLoading, refetch } = useGetListTopicQuery(currentParams);
  const [deleteTopic] = useDeleteTopicMutation();

  useEffect(() => {
    if (topicResponse) {
      dispatch(topicActions.setListTopic(topicResponse.data));
    }
  }, [topicResponse]);

  useEffect(() => {
    if (topicResponse?.pagination) {
      setTotalPage(Math.ceil(topicResponse.pagination.totalRows / TOPIC_PER_PAGE));
    }
  }, [topicResponse?.pagination]);

  useEffect(() => {
    if (currentPage > 0) {
      dispatch(topicActions.setParams({ ...currentParams, page: currentPage }));
    }
  }, [currentPage]);

  const handleDeleteTopic = async (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTopic(id);
        Swal.fire('Deleted!', 'Delete topic successfully', 'success');
        refetch();
      }
    });
  };

  return (
    <>
      <table className="w-full rounded-md admin-table">
        <thead className="text-white bg-primaryAdmin">
          <tr>
            <th className="w-[45px] rounded-tl-md">
              <input type="checkbox" />
            </th>
            <th className="w-[30%]">Tên chủ đề</th>
            <th className="w-[30%]">Slug</th>
            <th>Số bài viết</th>
            <th className="rounded-tr-md w-[126px]">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {listTopic.map((item, index) => (
            <tr key={index}>
              <td className="w-[45px] text-center">
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>{item.slug}</td>
              <td>{item.postNumber} bài</td>
              <td>
                <div className="flex items-center justify-center gap-p10">
                  <CardIcon></CardIcon>
                  <Link to={`/manage/topics/${item._id}`}>
                    <NotePencilIcon></NotePencilIcon>
                  </Link>
                  <TrashIcon
                    className="cursor-pointer"
                    onClick={() => handleDeleteTopic(item._id as string)}
                  ></TrashIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {listTopic.length <= 0 && isLoading && (
        <div className="bg-white py-10 flex justify-center items-center">
          <div className="w-10 h-10 border-2 border-blue-500 rounded-full animate-spin border-t-transparent border-b-transparent"></div>
        </div>
      )}
      <div className="py-p10 px-3 flex justify-between items-center bg-[#E3E5E8] rounded-b-md">
        {listTopic.length > 0 && (
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
        {listTopic.length <= 0 && !isLoading && (
          <p className="block w-full text-center">Không tìm thấy bài viết nào phù hợp </p>
        )}
      </div>
    </>
  );
}
