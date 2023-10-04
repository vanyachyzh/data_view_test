import React from "react";
import { addConnectionClass } from "../../helpers/createConnectins";
import IItem from "../../types/Item";
import Item from "../Item/Item";
import "./Tree.scss";

type Props = {
  items: IItem[];
};

const Tree: React.FC<Props> = ({ items }) => {
  const renderTree = (items: IItem[]) => {
    return (
      <div className={`${addConnectionClass(items)} tree`}>
        {items.map((item, index) => (
          <div key={item.text} className="tree__node">
            <div className={`tree__item ${addConnectionClass(items, index)}`}>
              <Item item={item} />
            </div>

            {item.children &&
              item.children.length > 0 &&
              renderTree(item.children)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="tree__item tree__item--main">
        <Item item={{ text: "Categories", edit: false, children: null }} />
      </div>

      {renderTree(items)}
    </div>
  );
};

export default Tree;
