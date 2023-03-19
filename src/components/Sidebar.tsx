import { useDrag } from "react-dnd";
import BarButton from "./buttons/BarButton";
import { ReactComponent as HeadlineIcon } from "../assets/Headline.svg";
import { ReactComponent as ParagraphIcon } from "../assets/Paragraph.svg";
import { ReactComponent as ButtonIcon } from "../assets/Button.svg";
import { useAppSelector } from "../hooks/reduxHooks";
import { useDispatch } from "react-redux";
import { setData } from "../data/store/workspaceSlice";
export default function Sidebar() {
  const data = useAppSelector((state) => state.editor.data);
  return (
    <div className="py-4 pr-4 border-r-[1px] border-b-slate-400 min-h-full shrink-0">
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        {data.map((items, index) => {
          return <SidebarItem key={index} icon={<ButtonIcon />} type={items.type} />;
        })}
      </div>
    </div>
  );
}
export interface SidebarItemProps {
  type: string;
  icon: any;
}

export const SidebarItem = ({ type, icon }: SidebarItemProps) => {
  const dataEditor = useAppSelector((state) => state.workspace.data);

  const dispatch = useDispatch();
  const [, drag] = useDrag(() => ({
    type: "SIDEBAR_ITEM",
    item: { type },
    end: (item, monitor) => {
      const dropResult: {
        type?: string | undefined;
        content?: string | undefined;
        id: number;
      } | null = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(setData({ type, id: 0 }));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  switch (type) {
    case "headline":
      return (
        <div
          onClick={() => dispatch(setData({ type, id: dataEditor.length + 1 }))}
          ref={drag}
          key={type}
          className="mt-2 drag-item"
        >
          <BarButton icon={<HeadlineIcon />} content={type} />
        </div>
      );
    case "image":
      return (
        <div
          onClick={() => dispatch(setData({ type, id: dataEditor.length + 1 }))}
          ref={drag}
          key={type}
          className="mt-2 drag-item"
        >
          <BarButton icon={<ButtonIcon />} content={type} />
        </div>
      );
    case "paragraph":
      return (
        <div
          onClick={() => dispatch(setData({ type, id: dataEditor.length + 1 }))}
          ref={drag}
          key={type}
          className="mt-2 drag-item"
        >
          <BarButton icon={<ParagraphIcon />} content={type} />
        </div>
      );
    case "button":
      return (
        <div
          onClick={() => dispatch(setData({ type, id: dataEditor.length + 1 }))}
          ref={drag}
          key={type}
          className="mt-2 drag-item"
        >
          <BarButton icon={<ButtonIcon />} content={type} />
        </div>
      );
    default:
      return <></>;
  }
};
