import React from "react";
import IItem from "../../types/Item";
import Button from "../Button/Button";
import { CheckIcon, PenIcon, PlusIcon, XIcon } from "../Icons";
import "./Item.scss";

type Props = {
  item: IItem;
};

const Item: React.FC<Props> = ({ item }) => {
  const { edit, text } = item;
  return (
    <div className="item">
      <div className="item__field">
        {edit ? <input className="item__input" /> : <span>{text}</span>}
      </div>

      <div className="item__buttons">
        {edit ? (
          <>
            <Button variant="yellow">
              <PlusIcon />
            </Button>
            <Button variant="green">
              <CheckIcon />
            </Button>
          </>
        ) : (
          <>
            <Button>
              <PlusIcon />
            </Button>
            <Button>
              <PenIcon />
            </Button>
            <Button variant="red">
              <XIcon />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
