import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  useDeleteListTopicMutation,
  useDeleteTopicMutation,
  useGetListTopicQuery,
} from '@/api/topicApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { CardIcon, NotePencilIcon, TrashIcon } from '@/components/icons';
import { selectListTopic, selectParamsTopic, topicActions } from '@/features/topic/topicSlice';
import { BottomAdminTable } from '@/modules';

const TOPIC_PER_PAGE = 5;

export function TableTopic() {
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const listTopic = useAppSelector(selectListTopic);
  const currentParams = useAppSelector(selectParamsTopic);
  const [listChecked, setListChecked] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const dispatch = useAppDispatch();

  const { data: topicResponse, isLoading, refetch } = useGetListTopicQuery(currentParams);
  const [deleteTopic] = useDeleteTopicMutation();
  const [deleteListTopic] = useDeleteListTopicMutation();

  useEffect(() => {
    if (topicResponse) {
      dispatch(topicActions.setListTopic(topicResponse.data));
    }
  }, [topicResponse]);

  useEffect(() => {
    if (currentParams) {
      setCurrentPage(currentParams?.page as number);
    }
  }, [currentParams]);

  useEffect(() => {
    if (topicResponse?.pagination) {
      setTotalPage(Math.ceil(topicResponse.pagination.totalRows / TOPIC_PER_PAGE));
    }
  }, [topicResponse?.pagination]);

  useEffect(() => {
    if (currentPage > 0) {
      dispatch(topicActions.setParams({ ...currentParams, page: currentPage }));
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
      listTopic.forEach((item) => {
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

  const handleDeleteListTopic = async () => {
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
          await deleteListTopic(listChecked);
          Swal.fire('Xóa thành công!', 'Đã xóa các tag đã chọn khỏi danh sách', 'success');
          refetch();
          setListChecked([]);
          setCheckAll(false);
          setCurrentPage(1);
        }
      });
    }
  };

  const handleDeleteTopic = async (id: string) => {
    Swal.fire({
      title: 'Bạn chắc chứ?',
      text: 'Sau khi đồng ý, chủ đề này sẽ xóa khỏi danh sách',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTopic(id);
        Swal.fire('Xóa thành công!', 'Đã xóa chủ đề khỏi danh sách', 'success');
        refetch();
        setCurrentPage(1);
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
            <th className="w-[30%]">Tên chủ đề</th>
            <th className="w-[30%]">Slug</th>
            <th>Số bài viết</th>
            <th className="rounded-tr-md w-[126px]">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {listTopic.map((item, index) => (
            <tr key={item._id}>
              <td className="w-[45px] text-center">
                <input
                  type="checkbox"
                  onChange={(e) => handleChangeInput(e.target.checked, item._id as string)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
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
      {isLoading && listTopic.length <= 0 && (
        <div>
          {new Array(5).fill(0).map((_, index) => (
            <Skeleton key={index} className="w-full h-[45px]"></Skeleton>
          ))}
        </div>
      )}
      <BottomAdminTable
        currentPage={currentPage}
        isLoading={isLoading}
        list={listTopic}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        handleDeleteList={handleDeleteListTopic}
        listChecked={listChecked}
      ></BottomAdminTable>
    </>
  );
}
