import "./App.scss";
import Button from "./components/Button/Button";
import { PenIcon, PlusIcon, XIcon } from "./components/Icons";
import Item from "./components/Item/Item";

const MOCK = [
  {
    text: "Hello",
    edit: false,
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Button variant="red">
          <XIcon />
        </Button>

        <Button variant="green">
          <PenIcon />
        </Button>
        <Button variant="yellow">
          <PlusIcon />
        </Button>

        <Item item={MOCK[0]} />
      </div>
    </>
  );
}

export default App;
