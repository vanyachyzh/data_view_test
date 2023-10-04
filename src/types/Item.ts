interface IItem {
  id: number;
  text: string;
  edit: boolean;
  children: null | IItem[];
}

export default IItem;
