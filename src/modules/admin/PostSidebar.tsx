import { ArrowDownIcon, CloseCircleIcon, SearchIcon } from '@/components/icons';

export interface PostSidebarProps {}

export function PostSidebar(props: PostSidebarProps) {
  return (
    <div {...props} className="w-[320px] border border-borderAdmin rounded-md bg-white mb-auto">
      <h2 className="px-3 py-2 border-b border-b-borderAdmin font-bold font-fontRoboto">
        Thông tin
      </h2>
      <div className="px-3 py-p10">
        <div className="mb-3">
          <h3 className="font-fontRoboto mb-2">Chủ đề</h3>
          <div className="px-p10 h-8 flex justify-between items-center border border-borderAdmin rounded">
            <span className="font-medium">NFT</span>
            <ArrowDownIcon></ArrowDownIcon>
          </div>
        </div>
        <div className="mb-3">
          <h3 className="font-fontRoboto mb-2">Tác giả</h3>
          <div className="px-p10 h-8 flex justify-between items-center border border-borderAdmin rounded">
            <span className="font-medium">Phạm Khoa</span>
            <ArrowDownIcon></ArrowDownIcon>
          </div>
        </div>
        <div>
          <h3 className="font-fontRoboto mb-2">Tag</h3>
          <div className="px-p10 h-8 flex justify-between items-center border border-borderAdmin rounded">
            <div className="flex gap-1">
              <span
                className="rounded bg-borderAdmin font-fontRoboto leading-5 font-medium flex px-1 h-6 items-center 
                justify-center gap-1"
              >
                NFT
                <span>
                  <CloseCircleIcon></CloseCircleIcon>
                </span>
              </span>
              <span
                className="rounded bg-borderAdmin font-fontRoboto leading-5 font-medium flex px-1 h-6 items-center 
                justify-center gap-1"
              >
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
      <div className="flex items-center px-3 py-2 border-t border-t-borderAdmin">
        <p className="font-fontRoboto">Ngày viết:</p>
        <p className="font-fontRoboto font-medium">10:20 20/04/2023</p>
      </div>
    </div>
  );
}
