import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePosition, copyElement, deleteElement, setContent } from "../../data/store/workspaceSlice";
import { ReactComponent as BinIcon } from "../../assets/Bin.svg";
import { ReactComponent as CopyIcon } from "../../assets/Copy.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../../assets/ArrowUp.svg";

import classNames from "classnames";

interface IBarButton {
  icon: ReactNode;
  id?: number;
  content: string;
  text?: string;
  editor?: boolean;
  index?: number;
}

export default function BarButton({ icon, content, text, editor, id, index }: IBarButton) {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={classNames(
        "cursor-pointer flex flex-col justify-center items-center basis-full bg-slate-50 rounded-sm p-4 relative",
        {
          "hover:bg-blue-200": isHover && editor,
        },
      )}
    >
      <div className="mb-2 w-[20px] h-[20px] grow">{icon}</div>
      <span className="text-xs">{content}</span>

      {editor && isHover && (
        <div className="w-full bg-white p-2 z-10 mt-1">
          <input
            value={text || ""}
            onChange={(e) => {
              dispatch(setContent({ content: e.target.value, id: id || 0 }));
            }}
            type="text"
            name="content"
            className="p-1 border rounded border-slate-400 bg-white w-full"
          />
        </div>
      )}
      {editor && isHover && (
        <div className="absolute top-[-30px] right-2 flex">
          <div className="mr-1 p-1 bg-blue-500 rounded-t-sm flex">
            <div
              onClick={() => dispatch(changePosition({ id: id || 0, direction: "down", index: index || 0 }))}
              className="hover:bg-blue-900 p-1"
            >
              <span className="text-white">
                <ArrowDown />
              </span>
            </div>
            <div
              onClick={() => dispatch(changePosition({ id: id || 0, direction: "up", index: index || 0 }))}
              className="hover:bg-blue-900 p-1"
            >
              <span className="text-white">
                <ArrowUp />
              </span>
            </div>
          </div>
          <div className=" p-1 bg-cyan-600 rounded-t-sm flex">
            <div onClick={() => dispatch(copyElement({ id: id || 0 }))} className="hover:bg-cyan-900 p-1">
              <span className="text-white">
                <CopyIcon />
              </span>
            </div>
            <div onClick={() => dispatch(deleteElement({ id: id || 0 }))} className="hover:bg-cyan-900 p-1">
              <span className="text-white">
                <BinIcon />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
