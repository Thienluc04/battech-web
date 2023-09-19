import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
import { authorActions, selectParamsAuthor } from '@/features/author/authorSlice';
import { TableAuthor } from '@/modules/author';

export default function ManageAuthor() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm({ mode: 'onSubmit' });

  const [sortValue, setSortValue] = useState<'asc' | 'desc'>('desc');

  const currentParams = useAppSelector(selectParamsAuthor);
  const showSidebar = useAppSelector(selectShowSidebar);

  const watchSearch = watch('search');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentParams.search && watchSearch === '') {
      dispatch(authorActions.setParams({ ...currentParams, search: '' }));
    }
  }, [watchSearch]);

  useEffect(() => {
    dispatch(authorActions.setParams({ ...currentParams, sort: sortValue }));
  }, [sortValue]);

  const handleSearchAuthor: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    dispatch(authorActions.setParams({ ...currentParams, search: values.search }));
  };

  const handleSortAuthor = () => {
    if (sortValue === 'asc') {
      setSortValue('desc');
    } else {
      setSortValue('asc');
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
          <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">Tác giả</h1>
        </div>
        <Link
          to={'/manage/authors/create'}
          className="flex items-center gap-[6px] px-p10 h-8 bg-primaryAdmin rounded"
        >
          <PlusIcon></PlusIcon>
          <span className="text-white font-fontRoboto">Thêm tác giả</span>
        </Link>
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex gap-2">
          <form onSubmit={handleSubmit(handleSearchAuthor)} className="flex gap-2 max-h-8">
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
          <div className="h-8 px-2 rounded bg-white border border-[#9D9D9D] cursor-pointer flex gap-2 items-center">
            <FilterIcon></FilterIcon>
            <span className="text-sm font-fontRoboto">Bộ lọc</span>
          </div>
        </div>
        <div
          onClick={handleSortAuthor}
          className="px-2 h-8 rounded bg-white border border-[#9D9D9D] cursor-pointer flex gap-2 items-center"
        >
          <SquaresFourIcon></SquaresFourIcon>
          <span className="text-sm font-fontRoboto">Sắp xếp</span>
        </div>
      </div>
      <TableAuthor></TableAuthor>
    </div>
  );
}
