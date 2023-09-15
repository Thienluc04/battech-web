import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

import { ArrowDownIcon } from '@/components/icons';

import { Pagination } from '.';

export interface BottomTableProps<T> {
  list: T[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
  isLoading: boolean;
  listChecked: string[];
  handleDeleteList: () => void;
}

export function BottomAdminTable<T>({
  list,
  currentPage,
  setCurrentPage,
  totalPage,
  isLoading,
  listChecked,
  handleDeleteList,
}: BottomTableProps<T>) {
  return (
    <div className="py-p10 px-3 flex justify-between items-center bg-[#E3E5E8] rounded-b-md">
      {list.length > 0 && (
        <>
          <div className="flex gap-2">
            <div className="flex items-center gap-1 rounded bg-white border border-[#D5D8DD] py-1 px-2 text-textAdmin">
              50
              <ArrowDownIcon></ArrowDownIcon>
            </div>
            <button
              onClick={handleDeleteList}
              disabled={listChecked.length <= 0}
              className={clsx(
                'px-5 rounded-lg text-white',
                listChecked.length <= 0 ? 'bg-red-200' : 'bg-red-500',
              )}
            >
              Xóa
            </button>
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            type="admin"
          ></Pagination>
        </>
      )}
      {list.length <= 0 && !isLoading && (
        <p className="block w-full text-center">Không tìm thấy kết quả nào phù hợp </p>
      )}
    </div>
  );
}
