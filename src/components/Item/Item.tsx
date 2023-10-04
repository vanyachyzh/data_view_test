import React, { useState } from "react";
import IItem from "../../types/Item";
import Button from "../Button/Button";
import { CheckIcon, PenIcon, PlusIcon, XIcon } from "../Icons";
import "./Item.scss";

type Props = {
  item: IItem;
  update: (targetNode: IItem, newNode?: IItem) => void;
};

const Item: React.FC<Props> = ({ item, update }) => {
  const { edit, text } = item;
  const [value, setValue] = useState(text);
  return (
    <div className="item">
      <div className="item__field">
        {edit ? (
          <input
            className="item__input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        ) : (
          <span>{text}</span>
        )}
      </div>

      <div className="item__buttons">
        {edit ? (
          <>
            <Button variant="yellow">
              <PlusIcon />
            </Button>
            <Button
              variant="green"
              onClick={() =>
                update(item, { ...item, edit: false, text: value })
              }
            >
              <CheckIcon />
            </Button>
          </>
        ) : (
          <>
            <Button>
              <PlusIcon />
            </Button>
            <Button onClick={() => update(item, { ...item, edit: true })}>
              <PenIcon />
            </Button>
            <Button variant="red" onClick={() => update(item)}>
              <XIcon />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
