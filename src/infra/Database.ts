export default interface Database {
  query(): Promise<any>;
  close(): Promise<any>;
}
