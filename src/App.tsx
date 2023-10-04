import "./App.scss";
import Tree from "./components/Tree/Tree";
import IItem from "./types/Item";

const MOCK: IItem[] = [
  {
    text: "Bu",
    edit: false,
    children: null,
  },
  {
    text: "Hello",
    edit: false,
    children: [
      { text: "Bye", edit: false, children: null },
      {
        text: "Me",
        edit: false,
        children: [
          { text: "Bye", edit: false, children: null },
          { text: "Me", edit: false, children: null },
          { text: "Bye", edit: false, children: null },
        ],
      },
    ],
  },

  {
    text: "No",
    edit: false,
    children: [{ text: "Yes", edit: false, children: null }],
  },

  {
    text: "Bu",
    edit: false,
    children: null,
  },

  {
    text: "Bu",
    edit: false,
    children: null,
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Tree items={MOCK} />
      </div>
    </>
  );
}

export default App;
