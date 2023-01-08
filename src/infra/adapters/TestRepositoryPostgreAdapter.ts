import Test from "../../entities/Test";
import Database from "../Database";
import TestRepository from "../repositories/TestRepository";

export default class TestRepositoryPostgreAdapter implements TestRepository {
  constructor(readonly db: Database) {}

  async getById(id: string): Promise<Test> {
    const [data] = await this.db.query("SELECT * FROM public.test WHERE id = $1", [id]);
    return new Test(data);
  }

  async getByType(type: string): Promise<Test> {
    const [data] = await this.db.query("SELECT * FROM public.test WHERE type = $1", [type]);
    return new Test(data);
  }

  async save(data: Test): Promise<void> {
    await this.db.query("INSERT INTO public.test(id, type) VALUES($1, $2)", [
      data.getId(),
      data.getType(),
    ]);
  }

  async delete(id: string): Promise<void> {
    await this.db.query("DELETE FROM public.test WHERE id = $1", [id]);
  }

  async update(data: Test): Promise<void> {
    await this.db.query("UPDATE public.test(type) SET type = $2 WHERE id = $1", [
      data.getId(),
      data.getType(),
    ]);
  }
}
