import React, { useRef, useState } from "react";
import Modal from "../../Modal/Modal";
import IItem from "../../types/Item";
import Button from "../Button/Button";
import { CheckIcon, PenIcon, PlusIcon, XIcon } from "../Icons";
import "./Item.scss";

type Props = {
  item: IItem;
  update: (targetNode: IItem, newNode?: IItem) => void;
};

const Item: React.FC<Props> = ({ item, update }) => {
  const { edit, text, editable } = item;
  const [value, setValue] = useState(text);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const createItem = () => {
    update(item, {
      ...item,
      children:
        item.children !== null
          ? [
              ...item.children,
              {
                text: "",
                id: 45656,
                edit: true,
                children: null,
                editable: true,
              },
            ]
          : [
              {
                text: "",
                id: 45656,
                edit: true,
                children: null,
                editable: true,
              },
            ],
    });

    setIsModalOpen(false);
  };

  return (
    <>
      <div className="item">
        <div className="item__field">
          {edit ? (
            <input
              onBlur={() =>
                value
                  ? update(item, { ...item, edit: false, text: value })
                  : update(item)
              }
              autoFocus
              onFocus={() => console.log("focus")}
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
              <Button
                variant="yellow"
                onClick={() => update(item, { ...item, edit: false })}
              >
                <XIcon />
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
              <Button onClick={() => setIsModalOpen(true)}>
                <PlusIcon />
              </Button>
              {editable && (
                <>
                  <Button onClick={() => update(item, { ...item, edit: true })}>
                    <PenIcon />
                  </Button>
                  <Button variant="red" onClick={() => update(item)}>
                    <XIcon />
                  </Button>
                </>
              )}
            </>
          )}
        </div>

        {isModalOpen && (
          <div className="item__modal" ref={modalRef}>
            <Modal
              footer={
                <>
                  <button onClick={createItem}>Category</button>
                  <button onClick={createItem}>Type</button>
                </>
              }
            >
              What do you want to create?
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default Item;
