interface ListItem {
 name: string;
 iconPath: string;
}

export default interface IFooterList {
  listName: string;
  list: Array<ListItem>;
}