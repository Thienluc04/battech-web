import { memo } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons';

export interface PaginationProps {
  type?: 'job' | 'news' | 'admin';
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = memo(
  ({ type = 'news', totalPage, currentPage, setCurrentPage }: PaginationProps) => {
    const handleClickPrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    };

    const handleClickNextPage = () => {
      if (currentPage < totalPage) {
        setCurrentPage((prev) => prev + 1);
      }
    };
    return (
      <>
        {type === 'news' && (
          <div className="flex items-center justify-center gap-1">
            <ArrowLeftIcon
              variant={currentPage > 1 ? 'green' : 'gray'}
              onClick={handleClickPrevPage}
              className={`${currentPage > 1 ? 'cursor-pointer' : 'cursor-default'}`}
            ></ArrowLeftIcon>
            <div className="flex items-center gap-3">
              {Array(totalPage)
                .fill(0)
                .map((_item, index) => (
                  <span
                    key={index}
                    className={`text-white font-bold text-xl w-8 h-10 rounded-lg cursor-pointer flex items-center justify-center ${
                      currentPage === index + 1 ? 'bg-primary' : 'bg-gray7A'
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </span>
                ))}
            </div>
            <ArrowRightIcon
              variant={currentPage < totalPage ? 'green' : 'gray'}
              onClick={handleClickNextPage}
              className={`${currentPage < totalPage ? 'cursor-pointer' : 'cursor-default'}`}
            ></ArrowRightIcon>
          </div>
        )}

        {type === 'job' && (
          <div className="flex items-center gap-2 mb-[87px] justify-center">
            <span
              className={`w-[18px] h-[18px] rounded-sm ${
                currentPage > 1 ? 'bg-primary' : 'bg-gray97'
              } flex items-center justify-center cursor-pointer`}
            >
              <ArrowLeftIcon
                variant={'white'}
                onClick={handleClickPrevPage}
                className={`${currentPage > 1 ? 'cursor-pointer' : 'cursor-default'}`}
              ></ArrowLeftIcon>
            </span>
            {Array(totalPage)
              .fill(0)
              .map((_item, index) => (
                <span
                  key={index}
                  className={`w-[18px] h-[18px] rounded-sm bg-white border ${
                    currentPage === index + 1
                      ? 'text-primary border-primary'
                      : 'text-gray97 border-gray97'
                  } flex 
                items-center justify-center cursor-pointer text-xs font-fontArial`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </span>
              ))}
            <span
              className={`w-[18px] h-[18px] rounded-sm ${
                currentPage < totalPage ? 'bg-primary' : 'bg-gray97'
              } flex items-center justify-center cursor-pointer`}
            >
              <ArrowRightIcon
                variant={'white'}
                onClick={handleClickNextPage}
                className={`${currentPage < totalPage ? 'cursor-pointer' : 'cursor-default'}`}
              ></ArrowRightIcon>
            </span>
          </div>
        )}

        {type === 'admin' && (
          <div className="flex items-center border border-[#D5D8DD]">
            <div
              className={`w-6 h-[22px] bg-white flex justify-center items-center
              border-r border-r-[#D5D8DD] rounded-l ${currentPage > 1 ? 'cursor-pointer' : ''}`}
              onClick={handleClickPrevPage}
            >
              <ArrowLeftIcon variant={currentPage > 1 ? '#186E25' : '#C7CBD1'}></ArrowLeftIcon>
            </div>
            {new Array(totalPage).fill(0).map((_, index) => {
              return (
                <div
                  className={`w-6 h-[22px]  text-sm flex items-center justify-center border-r 
                  border-r-[#D5D8DD] cursor-pointer ${
                    currentPage === index + 1
                      ? 'bg-primaryAdmin text-white'
                      : 'bg-white text-textAdmin'
                  }`}
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </div>
              );
            })}
            <div
              className={`w-6 h-[22px] bg-white flex justify-center items-center rounded-r ${
                currentPage < totalPage ? 'cursor-pointer' : ''
              }`}
              onClick={handleClickNextPage}
            >
              <ArrowRightIcon
                variant={currentPage < totalPage ? '#186E25' : '#C7CBD1'}
              ></ArrowRightIcon>
            </div>
          </div>
        )}
      </>
    );
  },
);
