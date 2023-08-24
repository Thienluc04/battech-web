export interface ListNewsProps {}

export function ListNews({ children }: React.PropsWithChildren<ListNewsProps>) {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px_32px] mb-10 xl:mx-0 mx-5">
      {children}
    </div>
  );
}
