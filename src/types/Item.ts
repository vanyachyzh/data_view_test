interface IItem {
  text: string;
  edit: boolean;
  children: null | IItem[];
}

export default IItem;
