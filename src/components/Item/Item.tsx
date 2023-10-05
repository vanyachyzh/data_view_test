import React, { useState } from "react";
import IItem from "../../types/Item";
import Button from "../Button/Button";
import { CheckIcon, PenIcon, PlusIcon, XIcon } from "../Icons";
import Modal from "../Modal/Modal";
import "./Item.scss";

type Props = {
  item: IItem;
  update: (targetNode: IItem, newNode?: IItem) => void;
  variant?: "category" | "service" | "main";
};

const Item: React.FC<Props> = ({ item, update, variant }) => {
  const { text, type } = item;
  const [value, setValue] = useState(text);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
                children: null,
                type: "service",
              },
            ]
          : [
              {
                text: "",
                id: 45656,
                children: null,
                type: "service",
              },
            ],
    });

    setIsModalOpen(false);
  };

  return (
    <>
      <div className="item">
        <div className={`${"item__field--" + variant} item__field`}>
          {isEditing || !text ? (
            <input
              onBlur={() => {
                value ? update(item, { ...item, text: value }) : update(item);

                setIsEditing(false);
              }}
              autoFocus
              onFocus={() => console.log("focus")}
              className="item__input"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onMouseDown={(e) => e.stopPropagation()}
            />
          ) : (
            text
          )}
        </div>

        <div className="item__buttons" onMouseDown={(e) => e.stopPropagation()}>
          {isEditing || !text ? (
            <>
              <Button variant="yellow" onClick={() => setIsEditing(false)}>
                <XIcon />
              </Button>
              <Button
                variant="green"
                onClick={() => {
                  update(item, { ...item, text: value });
                  setIsEditing(false);
                }}
              >
                <CheckIcon />
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => setIsModalOpen(true)}>
                <PlusIcon />
              </Button>
              {type !== "main" && (
                <>
                  <Button onClick={() => setIsEditing(true)}>
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
