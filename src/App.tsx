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
            <Button size="large">List view</Button>
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
