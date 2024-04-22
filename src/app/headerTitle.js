
export default function HeaderTitle({ title }) {
  return (
    <div className="text-white mix-blend-difference relative">
    <div className="absolute mt-24 right-4">
      <div className="transform -rotate-90 flex h-96 w-96 text-end justify-end items-end ">
        {`/${title.toUpperCase()}`}
      </div>
    </div>
  </div>
  );
}
