import React from "react";

export default function Tech({
  title = "Node Js",
  iconCallback = () => <></>,
  details = "",
}) {
  return (
    <div className="flex m-4">
      <div>{iconCallback()}</div>
      <div className="m-2">
        <h3 className="font-bold"> Node JS</h3>
        <p className="font-thin text-sm">Backend Programming</p>
      </div>
    </div>
  );
}
