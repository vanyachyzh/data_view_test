import IItem from "../types/Item";

export const getUpdatedTree = (
  tree: IItem[],
  targetNode: IItem,
  newNode?: IItem
) => {
  const updatedTree: IItem[] = [...tree];

  const recursivelyUpdateNode = (
    tree: IItem[],
    targetNode: IItem,
    newNode?: IItem
  ) => {
    tree.map((node, index) => {
      if (node === targetNode) {
        newNode ? tree.splice(index, 1, newNode) : tree.splice(index, 1);
        return;
      }

      if (node.children) {
        recursivelyUpdateNode(node.children, targetNode, newNode);
      }
    });
  };

  recursivelyUpdateNode(updatedTree, targetNode, newNode);

  return updatedTree;
};
