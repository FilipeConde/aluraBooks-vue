export default interface IDisplaySection {

  sectionTitle: string,
  bookList: Array<string>,
  card: {
    title: string;
    mainText: string;
    description: string;
    image: string;
  }
}