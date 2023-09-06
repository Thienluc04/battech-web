import { ArrowDownIcon, CardIcon, NotePencilIcon, TrashIcon } from '@/components/icons';

import { Pagination } from '..';

export interface TableAdminProps {}

export function TableAdmin(props: TableAdminProps) {
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
            <th className="rounded-tr-md">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {new Array(10).fill(0).map((_, index) => (
            <tr key={index}>
              <td>26631</td>
              <td>Báo cáo</td>
              <td>Báo cáo</td>
              <td>Bùi Tân Thân</td>
              <td>blockchain</td>
              <td>10/11/2022</td>
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
        <div className="flex items-center gap-1 rounded bg-white border border-[#D5D8DD] py-1 px-2 text-textAdmin">
          50
          <ArrowDownIcon></ArrowDownIcon>
        </div>
        <Pagination
          currentPage={1}
          setCurrentPage={() => {}}
          totalPage={1}
          type="admin"
        ></Pagination>
      </div>
    </>
  );
}
