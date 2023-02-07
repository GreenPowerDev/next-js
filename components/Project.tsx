import React from "react";

export default function Project({
  title = "UI/UX Design",
  list = ["Some random text", "Some random skill"],
}) {
  return (
    <div className="flex">
      <div></div>
      <div className="flex-grow  border-l-emerald-700">
        <h2>{title}</h2>
        {list.map((x: any) => {
          return (
            <span key={Math.random()} className="text-white mt-2">
              {x}
            </span>
          );
        })}
      </div>
    </div>
  );
}
