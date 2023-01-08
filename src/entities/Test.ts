export type TestEntity = {
  id: number;
  type: string;
};

export default class Test {
  private _id: number;
  private _type: string;

  constructor(data: TestEntity) {
    const { id, type } = data;

    this._id = id;
    this._type = type;
  }

  getId() {
    return this._id;
  }

  getType() {
    return this._type;
  }
}
