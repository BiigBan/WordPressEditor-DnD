import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";

export default function Preview() {
  const data = useAppSelector((state) => state.workspace.data);

  return (
    <div className="grow min-h-full px-2 pt-2 flex flex-col items-center">
      {data.length === 0 && "Content is empty"}{" "}
      {data.length > 0 &&
        data.map((items) => {
          switch (items.type) {
            case "headline":
              return (
                items.content && (
                  <div key={items.id} className="text-center font-bold text-lg  mb-2 break-words w-full">
                    {items.content}
                  </div>
                )
              );
            case "image":
              return (
                items.content && (
                  <div key={items.id} className="mx-auto w-full mb-2">
                    <img className="w-full rounded" src={items.content} alt="Image" />
                  </div>
                )
              );
            case "button":
              return (
                items.content && (
                  <span
                    key={items.id}
                    className="p-1 px-2 rounded mb-2 inline cursor-pointer transition bg-sky-600 font-medium text-white hover:bg-sky-700"
                  >
                    {items.content}
                  </span>
                )
              );
            case "paragraph":
              return (
                items.content && (
                  <div key={items.id} className="text-center font-medium  text-slate-300 break-words mb-2 w-full">
                    {items.content}
                  </div>
                )
              );
            default:
              <></>;
          }
        })}
    </div>
  );
}
