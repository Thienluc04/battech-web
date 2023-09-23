import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useGetListPostQuery } from '@/api/postApi';
import { useGetListTopicQuery } from '@/api/topicApi';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/button';
import {
  FilterIcon,
  MenuLeftIcon,
  PlusIcon,
  SearchIcon,
  SquaresFourIcon,
} from '@/components/icons';
import { Input } from '@/components/input';
import { authAction, selectShowSidebar } from '@/features/auth/authSlice';
import { postActions, selectParamsPost } from '@/features/post/postSlice';
import { Topic } from '@/models';
import { TablePost } from '@/modules/post';

export default function ManagePost() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm({ mode: 'onSubmit' });

  const [sortValue, setSortValue] = useState<'asc' | 'desc'>('desc');
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const currentParams = useAppSelector(selectParamsPost);
  const showSidebar = useAppSelector(selectShowSidebar);

  const dispatch = useAppDispatch();

  const watchSearch = watch('search');

  const { data: listTopic } = useGetListTopicQuery({ sort: 'desc' });
  const { data: postResponse } = useGetListPostQuery({ ...currentParams, page: 1 });

  useEffect(() => {
    if (postResponse) {
      dispatch(postActions.setListPost(postResponse?.data));
    }
  }, []);

  useEffect(() => {
    dispatch(postActions.setParams({ ...currentParams, sort: sortValue, page: 1 }));
  }, [sortValue]);

  useEffect(() => {
    if (watchSearch === '' && currentParams.search) {
      dispatch(postActions.setParams({ ...currentParams, search: '', page: 1 }));
    }
  }, [watchSearch]);

  const handleSortPost = () => {
    if (sortValue === 'asc') {
      setSortValue('desc');
    } else {
      setSortValue('asc');
    }
  };

  const handleSearchPost: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    dispatch(postActions.setParams({ ...currentParams, search: values.search, page: 1 }));
  };

  const handleFilterByCategory = (topic: string) => {
    if (topic === 'All') {
      dispatch(postActions.setParams({ ...currentParams, topic: '', page: 1 }));
    } else {
      dispatch(postActions.setParams({ ...currentParams, topic, page: 1 }));
    }
  };

  return (
    <div className="flex-1 px-4 py-[26px] bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">
          <MenuLeftIcon
            className="xl:hidden"
            onClick={() => dispatch(authAction.setShowSidebar(!showSidebar))}
          ></MenuLeftIcon>
          <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">Danh mục bài viết</h1>
        </div>
        <Link
          to={'/manage/posts/create'}
          className="flex items-center gap-[6px] px-p10 h-8 bg-primaryAdmin rounded"
        >
          <PlusIcon></PlusIcon>
          <span className="text-white font-fontRoboto">Bài viết mới</span>
        </Link>
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex gap-2">
          <form onSubmit={handleSubmit(handleSearchPost)} className="flex gap-2 max-h-8">
            <Button
              variant="secondary"
              className="flex items-center justify-center bg-white rounded cursor-pointer btnSearchPost"
            >
              <SearchIcon></SearchIcon>
            </Button>
            <Input
              control={control}
              name="search"
              placeholder="Search..."
              className="w-[150px] border border-[#9D9D9D] bg-white rounded text-sm py-0 px-3 h-auto"
            ></Input>
          </form>
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="h-8 px-2 rounded bg-white border border-[#9D9D9D] cursor-pointer flex gap-2 items-center"
          >
            <FilterIcon></FilterIcon>
            <span className="text-sm font-fontRoboto">Bộ lọc</span>
          </div>
          {showFilter && (
            <select
              onChange={(e) => handleFilterByCategory(e.target.value as string)}
              className="px-2 h-8 rounded bg-white border border-[#9D9D9D] cursor-pointer"
            >
              <option value="All">Tất cả</option>
              {listTopic &&
                (listTopic as Topic[]) &&
                listTopic.map((item: Topic) => (
                  <option value={item.name} key={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          )}
        </div>
        <div
          onClick={handleSortPost}
          className="px-2 h-8 rounded bg-white border border-[#9D9D9D] cursor-pointer flex gap-2 items-center"
        >
          <SquaresFourIcon></SquaresFourIcon>
          <span className="text-sm font-fontRoboto">Sắp xếp</span>
        </div>
      </div>
      <TablePost></TablePost>
    </div>
  );
}
