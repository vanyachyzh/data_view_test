import { ReactNode, useEffect, useRef, useState } from "react";
import "./App.scss";
import Selector from "./components/Selector/Selector";
import Tree from "./components/Tree/Tree";
import { getUpdatedTree } from "./helpers/getUpdatedTree";
import IItem from "./types/Item";
import IPosition from "./types/Position";

const obj = {
  id: 12,
  text: "Bye",
  edit: false,
  children: null,
  editable: true,
};
const obj2 = {
  id: 13,
  text: "Bydddd",
  edit: false,
  children: null,
  editable: true,
};

const MOCK: IItem[] = [
  {
    text: "Main",
    edit: false,
    id: 2222,
    editable: false,
    children: [
      obj2,
      {
        id: 14,
        text: "Bu",
        edit: false,
        children: null,
        editable: true,
      },
      {
        id: 15,
        text: "Hello",
        edit: false,
        editable: true,
        children: [
          { id: 16, text: "Bye", edit: false, children: null, editable: true },
          {
            id: 17,
            text: "Me",
            edit: false,
            editable: true,
            children: [
              obj,
              {
                id: 18,
                text: "Me",
                edit: false,
                children: null,
                editable: true,
              },
              {
                id: 19,
                text: "Bye",
                edit: false,
                children: null,
                editable: true,
              },
            ],
          },
        ],
      },

      {
        id: 111,
        text: "No",
        edit: false,
        editable: true,
        children: [
          { id: 122, text: "Yes", edit: false, children: null, editable: true },
        ],
      },

      { id: 133, text: "Bu", edit: false, children: null, editable: true },

      { id: 144, text: "Bu", edit: false, children: null, editable: true },
    ],
  },
];

type Props = {
  children: ReactNode;
  position: IPosition;
  setPosition: (position: React.SetStateAction<IPosition>) => void;
};

const MultiDirectionalContainer: React.FC<Props> = ({
  position,
  setPosition,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const moveChildren = (x: number, y: number) => {
    setPosition((prev) => ({ ...prev, x, y }));
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      setPosition((prev) => ({
        ...prev,
        x: containerWidth / 2,
        y: containerHeight / 2,
      }));
    }
  }, []);

  return (
    <div className="multi-container" ref={containerRef}>
      <div
        className="multi-container__children"
        style={{
          top: position.y,
          left: position.x,
          transform: `scale(${position.z}%) translate(-50%, -50%)`,
        }}
      >
        {children}
      </div>
      <button
        className="multi-container__left"
        onClick={() => moveChildren(position.x - 10, position.y)}
      >
        Left
      </button>
      <button
        className="multi-container__right"
        onClick={() => moveChildren(position.x + 10, position.y)}
      >
        Right
      </button>
      <button
        className="multi-container__top"
        onClick={() => moveChildren(position.x, position.y - 10)}
      >
        Top
      </button>
      <button
        className="multi-container__bottom"
        onClick={() => moveChildren(position.x, position.y + 10)}
      >
        Bottom
      </button>
    </div>
  );
};
function App() {
  const [items, setItems] = useState<IItem[]>(MOCK);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 100 });

  const updateNode = (targetNode: IItem, newNode?: IItem) => {
    setItems(getUpdatedTree(items, targetNode, newNode));
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      <div className="App">
        <div className="App__header">
          Header <Selector position={position} setPosition={setPosition} />
        </div>
        <div className="App__body">
          <MultiDirectionalContainer
            position={position}
            setPosition={setPosition}
          >
            <Tree items={items} updateNode={updateNode} />
          </MultiDirectionalContainer>
        </div>
      </div>
    </>
  );
}

export default App;
