export function ProductListLoading({
  amount,
  title,
}: {
  amount: number;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="!max-w-4xl w-full pt-7 pb-9 flex flex-col mg:gap-10 gap-6">
        <h1 className="mg:text-xl mg:px-0 md:px-12 px-4 text-lg">{title}</h1>
        <ul className="mg:flex mg:px-0 md:px-12 px-4 gap-2 grid grid-cols-2">
          {Array.from({ length: amount }).map((_, index) => (
            <li key={index}>
              <div className="flex gap-7 flex-col cursor-pointer group">
                <div className="mg:w-[220px] mg:h-[220px] w-full aspect-square bg-zinc-900 animate-pulse"></div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs group-hover:underline bg-zinc-900 animate-pulse text-transparent">
                    Cool Name
                  </div>
                  <p className="text-sm bg-zinc-900 animate-pulse text-transparent">
                    From £100.00 GBP
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
