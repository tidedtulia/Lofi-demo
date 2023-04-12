import { ReactNode, createContext, useState } from "react";

interface DraggContextType {
  handleMouseUpMixer: () => void;
  handleMouseDownMixer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  handleMouseMoveMixer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  styleMixer: Object;
}
const DraggContext = createContext<DraggContextType>({
  handleMouseUpMixer: () => {},
  handleMouseDownMixer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {},
  handleMouseMoveMixer: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {},
  styleMixer: {},
});

export interface IDraggProvider {
  children: ReactNode;
}

const DraggProvider = ({ children }: IDraggProvider) => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState({ x: 300, y: 100 });
  const [draggedElement, setDraggedElement] = useState<EventTarget | null>(
    null
  );
  const handleMouseDownMixer = (e: React.MouseEvent) => {
    console.log("MouseDown");

    setIsDragging(true);
    setDraggedElement(e.target);
    e.stopPropagation();
    setDraggingPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMoveMixer = (e: React.MouseEvent) => {
    console.log("MouseMove");

    if (!isDragging) return;
    e.stopPropagation();
    const dx = e.clientX - draggingPosition.x;
    const dy = e.clientY - draggingPosition.y;

    setDraggingPosition({
      x: e.clientX,
      y: e.clientY,
    });
    if (draggedElement) {
      (draggedElement as HTMLElement).style.left = `${
        (draggedElement as HTMLElement).offsetLeft + dx
      }px`;
      (draggedElement as HTMLElement).style.top = `${
        (draggedElement as HTMLElement).offsetTop + dy
      }px`;
    }
  };

  const handleMouseUpMixer = () => {
    console.log("MouseUp");

    // e.stopPropagation();
    setIsDragging(false);
    setDraggedElement(null);
  };
  const styleMixer = {
    position: "absolute",
    top: draggingPosition.y,
    left: draggingPosition.x,
    transform: "translate(-50%, -50%)",
  };
  console.log({ isDragging });

  return (
    <DraggContext.Provider
      value={{
        handleMouseUpMixer,
        handleMouseDownMixer,
        handleMouseMoveMixer,
        styleMixer,
      }}
    >
      {children}
    </DraggContext.Provider>
  );
};

export { DraggContext, DraggProvider };
