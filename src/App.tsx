import "./App.scss";
import Button from "./components/Button/Button";
import { PenIcon, PlusIcon, XIcon } from "./components/Icons";

function App() {
  return (
    <>
      <div className="App">
        <Button isDangerous>
          <XIcon />
        </Button>

        <Button>
          <PenIcon />
        </Button>
        <Button>
          <PlusIcon />
        </Button>
      </div>
    </>
  );
}

export default App;
