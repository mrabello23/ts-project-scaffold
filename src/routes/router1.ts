import { Request, Response, Router } from "express";

const router1 = Router();

router1.get("/route_1/teste", (req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.params);

  // TODO: implement controller layer

  res.send({ success: true, message: "Ok" });
});

export { router1 };
