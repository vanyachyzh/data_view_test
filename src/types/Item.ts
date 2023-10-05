interface IItem {
  id: number;
  text: string;
  children: null | IItem[];
  type: "category" | "service" | "main";
}

export default IItem;
