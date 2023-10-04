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
            <div className={`tree__item ${addConnectionClass(items, index)}`}>
              <Item item={item} update={updateNode} />
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
        <Item
          update={updateNode}
          item={{ text: "Categories", edit: false, children: null, id: 555 }}
        />
      </div>

      {renderTree(items)}
    </div>
  );
};

export default Tree;
