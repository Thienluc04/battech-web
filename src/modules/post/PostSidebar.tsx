import { ArrowDownIcon, CloseCircleIcon, SearchIcon } from '@/components/icons';

export interface PostSidebarProps {}

export function PostSidebar(props: PostSidebarProps) {
  return (
    <div {...props} className="w-[320px] border border-borderAdmin rounded-md bg-white mb-auto">
      <h2 className="px-3 py-2 font-bold border-b border-b-borderAdmin font-fontRoboto">
        Thông tin
      </h2>
      <div className="px-3 py-p10">
        <div className="mb-3">
          <h3 className="mb-2 font-fontRoboto">Chủ đề</h3>
          <div className="flex items-center justify-between h-8 border rounded px-p10 border-borderAdmin">
            <span className="font-medium">NFT</span>
            <ArrowDownIcon></ArrowDownIcon>
          </div>
        </div>
        <div className="mb-3">
          <h3 className="mb-2 font-fontRoboto">Tác giả</h3>
          <div className="flex items-center justify-between h-8 border rounded px-p10 border-borderAdmin">
            <span className="font-medium">Phạm Khoa</span>
            <ArrowDownIcon></ArrowDownIcon>
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-fontRoboto">Tag</h3>
          <div className="flex items-center justify-between h-8 border rounded px-p10 border-borderAdmin">
            <div className="flex gap-1">
              <span className="flex items-center justify-center h-6 gap-1 px-1 font-medium leading-5 rounded bg-borderAdmin font-fontRoboto">
                NFT
                <span>
                  <CloseCircleIcon></CloseCircleIcon>
                </span>
              </span>
              <span className="flex items-center justify-center h-6 gap-1 px-1 font-medium leading-5 rounded bg-borderAdmin font-fontRoboto">
                Game NFT
                <span>
                  <CloseCircleIcon></CloseCircleIcon>
                </span>
              </span>
            </div>
            <SearchIcon></SearchIcon>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t border-t-borderAdmin">
        <p className="font-fontRoboto">Ngày viết:</p>
        <p className="font-medium font-fontRoboto">10:20 20/04/2023</p>
      </div>
    </div>
  );
}
