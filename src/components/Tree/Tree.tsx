import React from "react";
import { addConnectionClass } from "../../helpers/createConnectins";
import IItem from "../../types/Item";
import Item from "../Item/Item";
import "./Tree.scss";

type Props = {
  items: IItem[];
  updateNode: (targetNode: IItem, newNode?: IItem) => void;
};

const Tree: React.FC<Props> = ({ items, updateNode }) => {
  const renderTree = (items: IItem[]) => {
    return (
      <div className={`${addConnectionClass(items)} tree`}>
        {items.map((item, index) => (
          <div key={item.id} className="tree__node">
            <div
              className={`tree__item ${addConnectionClass(items, index)} ${
                item.type === "main" ? "tree__item--main" : ""
              }`}
            >
              <Item item={item} update={updateNode} variant={item.type} />
            </div>

            {item.children &&
              item.children.length > 0 &&
              renderTree(item.children)}
          </div>
        ))}
      </div>
    );
  };

  return <div className="container">{renderTree(items)}</div>;
};

export default Tree;
