import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import { CursorIcon } from "./components/Icons";
import MultiDirectionalContainer from "./components/MultiDirectionalContainer/MultiDirectionalContainer";
import Selector from "./components/Selector/Selector";
import Tree from "./components/Tree/Tree";
import { getUpdatedTree } from "./helpers/getUpdatedTree";
import IItem from "./types/Item";
import IPosition from "./types/Position";

const obj: IItem = {
  id: 12,
  text: "Bye",

  children: null,
  type: "category",
};
const obj2: IItem = {
  id: 13,
  text: "Bydddd",

  children: null,
  type: "category",
};

const MOCK: IItem[] = [
  {
    text: "Categories",

    id: 2222,
    type: "main",
    children: [
      obj2,
      {
        id: 14,
        text: "Bu",

        children: null,
        type: "category",
      },
      {
        id: 15,
        text: "Hello",

        type: "service",
        children: [
          {
            id: 16,
            text: "Bye",

            children: null,
            type: "service",
          },
          {
            id: 17,
            text: "Me",

            type: "service",
            children: [
              obj,
              {
                id: 18,
                text: "Me",

                children: null,
                type: "category",
              },
              {
                id: 19,
                text: "Bye",

                children: null,
                type: "service",
              },
            ],
          },
        ],
      },

      {
        id: 111,
        text: "No",

        type: "service",
        children: [
          {
            id: 122,
            text: "Yes",

            children: null,
            type: "category",
          },
        ],
      },

      {
        id: 133,
        text: "Bu",

        children: null,
        type: "category",
      },

      {
        id: 144,
        text: "Bu",

        children: null,
        type: "service",
      },
    ],
  },
];

function App() {
  const [items, setItems] = useState<IItem[]>(MOCK);
  const [initialPosition, setInitialPosition] = useState<IPosition>({
    x: 0,
    y: 0,
    z: 100,
  });
  const [position, setPosition] = useState<IPosition>({
    x: 0,
    y: 0,
    z: 100,
  });
  const appBodyRef = useRef<HTMLDivElement>(null);

  const updateNode = (targetNode: IItem, newNode?: IItem) => {
    setItems(getUpdatedTree(items, targetNode, newNode));
  };

  useEffect(() => {
    if (appBodyRef.current) {
      const containerWidth = appBodyRef.current.offsetWidth;
      const containerHeight = appBodyRef.current.offsetHeight;
      setInitialPosition((prev) => ({
        ...prev,
        x: containerWidth / 2,
        y: containerHeight / 2,
      }));

      setPosition((prev) => ({
        ...prev,
        x: containerWidth / 2,
        y: containerHeight / 2,
      }));
    }
  }, []);

  return (
    <>
      <div className="App">
        <div className="App__header">
          <h3>DATA VIEW</h3>
          <div className="App__actions">
            <Button size="large" onClick={() => setPosition(initialPosition)}>
              <CursorIcon />
            </Button>
            <Selector position={position} setPosition={setPosition} />
          </div>
        </div>

        <div className="App__body" ref={appBodyRef}>
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
