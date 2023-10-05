import React, { useRef, useState } from "react";
import IItem from "../../types/Item";
import Button from "../Button/Button";
import { PenIcon, PlusIcon, PrevArrowIcon, XIcon } from "../Icons";
import Modal from "../Modal/Modal";
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
              onMouseDown={(e) => e.stopPropagation()}
            />
          ) : (
            <span>{text}</span>
          )}
        </div>

        <div className="item__buttons" onMouseDown={(e) => e.stopPropagation()}>
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
                <PrevArrowIcon />
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

        <div className="item__modal" onMouseDown={(e) => e.stopPropagation()}>
          <Modal
            open={isModalOpen}
            footer={
              <>
                <Button size="large" onClick={createItem}>
                  Category
                </Button>
                <Button size="large" onClick={createItem}>
                  Service
                </Button>
              </>
            }
          >
            What do you want to create?
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Item;
