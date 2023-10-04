import { useState } from "react";
import "./App.scss";
import Tree from "./components/Tree/Tree";
import { getUpdatedTree } from "./helpers/getUpdatedTree";
import IItem from "./types/Item";

const obj = { id: 12, text: "Bye", edit: false, children: null };
const obj2 = { id: 13, text: "Bydddd", edit: false, children: null };

const MOCK: IItem[] = [
  obj2,
  {
    id: 14,
    text: "Bu",
    edit: false,
    children: null,
  },
  {
    id: 15,
    text: "Hello",
    edit: false,
    children: [
      { id: 16, text: "Bye", edit: false, children: null },
      {
        id: 17,
        text: "Me",
        edit: false,
        children: [
          obj,
          { id: 18, text: "Me", edit: false, children: null },
          { id: 19, text: "Bye", edit: false, children: null },
        ],
      },
    ],
  },

  {
    id: 111,
    text: "No",
    edit: false,
    children: [{ id: 122, text: "Yes", edit: false, children: null }],
  },

  { id: 133, text: "Bu", edit: false, children: null },

  { id: 144, text: "Bu", edit: false, children: null },
];

function App() {
  const [items, setItems] = useState<IItem[]>(MOCK);

  const updateNode = (targetNode: IItem, newNode?: IItem) => {
    setItems(getUpdatedTree(items, targetNode, newNode));
  };

  return (
    <>
      <div className="App">
        <Tree items={items} updateNode={updateNode} />
      </div>
    </>
  );
}

export default App;
