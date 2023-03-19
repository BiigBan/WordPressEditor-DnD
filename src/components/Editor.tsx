import BarButton from "./buttons/BarButton";
import { ReactComponent as HeadlineIcon } from "../assets/Headline.svg";
import { ReactComponent as ParagraphIcon } from "../assets/Paragraph.svg";
import { ReactComponent as ButtonIcon } from "../assets/Button.svg";
import { useAppSelector } from "../hooks/reduxHooks";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

export default function Editor() {
  const data = useAppSelector((state) => state.workspace.data);
  const dataEditor = useAppSelector((state) => state.workspace.data);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "SIDEBAR_ITEM",
    drop: (item: { type: string }) => ({ id: dataEditor.length + 1, type: item.type }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  return (
    <div
      id="editor-zone"
      className="bg-blue-50 border-r-[1px]"
      ref={drop}
      style={{ border: isOver ? "1px dashed black" : "none" }}
    >
      <div className="w-full px-5 py-3 rounded">
        {data.length === 0 && "Editor is empty"}{" "}
        {data.length > 0 &&
          data.map((items, index) => {
            switch (items.type) {
              case "headline":
                return (
                  <div className="mt-2" key={items.id}>
                    <BarButton
                      index={index}
                      text={items.content}
                      id={items.id}
                      icon={<HeadlineIcon />}
                      content="Headline"
                      editor
                    />
                  </div>
                );
              case "image":
                return (
                  <div className="mt-2" key={items.id}>
                    <BarButton
                      index={index}
                      text={items.content}
                      id={items.id}
                      icon={<ButtonIcon />}
                      content="Image"
                      editor
                    />
                  </div>
                );
              case "paragraph":
                return (
                  <div className="mt-2" key={items.id}>
                    <BarButton
                      index={index}
                      text={items.content}
                      id={items.id}
                      icon={<ParagraphIcon />}
                      content="Paragraph"
                      editor
                    />
                  </div>
                );
              case "button":
                return (
                  <div className="mt-2" key={items.id}>
                    <BarButton
                      index={index}
                      text={items.content}
                      id={items.id}
                      icon={<ParagraphIcon />}
                      content="Button"
                      editor
                    />
                  </div>
                );
              default:
                <></>;
            }
          })}
      </div>
    </div>
  );
}
