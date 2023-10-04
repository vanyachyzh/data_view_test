interface IItem {
  id: number;
  text: string;
  edit: boolean;
  children: null | IItem[];
  editable?: boolean;
}

export default IItem;
