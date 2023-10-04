import IItem from "../types/Item";

export const addConnectionClass = (items: IItem[], index?: number): string => {
  if (items.length === 0) {
    return "";
  }
  if (items.length !== 1 && index === undefined) {
    return "tree--border";
  }
  if (
    index === items.length - 1 &&
    (items[index].children === null || !items[index].children?.length)
  ) {
    return "tree__item--right tree__item--last";
  }

  if (index === items.length - 1) {
    return "tree__item--right";
  }
  if (
    index &&
    (items[index].children === null || !items[index].children?.length)
  ) {
    return "tree__item--last";
  }

  if (
    index === 0 &&
    (items[0].children === null || !items[0].children?.length)
  ) {
    return "tree__item--left tree__item--last";
  }
  if (index === 0) {
    return "tree__item--left";
  }

  return "";
};
