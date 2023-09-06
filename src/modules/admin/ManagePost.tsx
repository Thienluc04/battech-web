import { Link } from 'react-router-dom';

import { FilterIcon, PlusIcon, SearchIcon, SquaresFourIcon } from '@/components/icons';
import { TableAdmin } from '@/modules/admin';

export function ManagePost() {
  return (
    <div className="flex-1 px-4 py-[26px] bg-blueBg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold leading-5 font-fontRoboto">Danh mục bài viết</h1>
        <Link
          to={'/manage/posts/create'}
          className="flex items-center gap-[6px] px-p10 py-2 bg-primaryAdmin rounded"
        >
          <PlusIcon></PlusIcon>
          <span className="text-white font-fontRoboto">Bài viết mới</span>
        </Link>
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex gap-p10">
          <div className="p-2 rounded bg-white border border-[#9D9D9D] cursor-pointer">
            <SearchIcon></SearchIcon>
          </div>
          <div className="p-2 rounded bg-white border border-[#9D9D9D] cursor-pointer flex gap-2 items-center">
            <FilterIcon></FilterIcon>
            <span className="text-sm font-fontRoboto">Bộ lọc</span>
          </div>
        </div>
        <div className="p-2 rounded bg-white border border-[#9D9D9D] cursor-pointer flex gap-2 items-center">
          <SquaresFourIcon></SquaresFourIcon>
          <span className="text-sm font-fontRoboto">Sắp xếp</span>
        </div>
      </div>
      <TableAdmin></TableAdmin>
    </div>
  );
}
