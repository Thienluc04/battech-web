import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button } from '@/components/button';
import { FilterIcon, PlusIcon, SearchIcon, SquaresFourIcon } from '@/components/icons';
import { Input } from '@/components/input';
import { listCategories } from '@/constants/general';
import { postActions, selectParamsPost } from '@/features/post/postSlice';
import { Category } from '@/models';

import { TablePost } from '.';

export function ManagePost() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm({ mode: 'onSubmit' });

  const [sortValue, setSortValue] = useState<'asc' | 'desc'>('asc');
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const currentParams = useAppSelector(selectParamsPost);
  const dispatch = useAppDispatch();

  const watchSearch = watch('search');

  useEffect(() => {
    dispatch(postActions.setParams({ ...currentParams, sort: sortValue }));
  }, [sortValue]);

  useEffect(() => {
    if (watchSearch === '') {
      dispatch(postActions.setParams({ ...currentParams, search: '' }));
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
    dispatch(postActions.setParams({ ...currentParams, search: values.search }));
  };

  const handleFilterByCategory = (category: Category) => {
    if ((category as string) === 'All') {
      dispatch(postActions.setParams({ ...currentParams, category: '' }));
    } else {
      dispatch(postActions.setParams({ ...currentParams, category }));
    }
  };

  return (
    <div className="flex-1 px-4 py-[26px] bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">Danh mục bài viết</h1>
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
              onChange={(e) => handleFilterByCategory(e.target.value as Category)}
              className="px-2 h-8 rounded bg-white border border-[#9D9D9D] cursor-pointer"
            >
              <option value="All">Tất cả</option>
              {listCategories.map((item, index) => (
                <option value={item} key={index}>
                  {item}
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
