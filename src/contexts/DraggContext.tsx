import { ReactNode, createContext, useState } from "react";

interface DraggContextType {
  handleMouseUp: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleMouseDown: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  handleMouseMove: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  style: Object;
}
const DraggContext = createContext<DraggContextType>({
  handleMouseUp: () => {},
  handleMouseDown: () => {},
  handleMouseMove: () => {},
  style: {},
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
  const handleMouseDown = (e: React.MouseEvent) => {
    console.log("MouseDown");

    setIsDragging(true);
    setDraggedElement(e.target);
    e.stopPropagation();
    setDraggingPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
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

  const handleMouseUp = () => {
    console.log("MouseUp");

    // e.stopPropagation();
    setIsDragging(false);
    setDraggedElement(null);
  };
  const style = {
    position: "absolute",
    top: draggingPosition.y,
    left: draggingPosition.x,
    transform: "translate(-50%, -50%)",
  };
  console.log({ isDragging });

  return (
    <DraggContext.Provider
      value={{ handleMouseUp, handleMouseDown, handleMouseMove, style }}
    >
      {children}
    </DraggContext.Provider>
  );
};

export { DraggContext, DraggProvider };
