import { Request, Response, Router } from "express";

const router2 = Router();

router2.get("/route_1/teste", (req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.params);

  // TODO: implement controller layer

  res.send({ success: true, message: "Ok" });
});

export { router2 };
