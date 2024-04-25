
export default function HeaderTitle({name}) {
  return (
    <div className="fixed right-1 bottom-1 text-white border-white mix-blend-difference">
      <div className="h-96 w-96 flex -rotate-90 items-end ">
      <div className="flex flex-row items-center gap-3 ">
          <div className="w-48 h-0.5 border  "></div>
          <h1 className="">{name.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  );
}

// ${headerTitleFont.className}
