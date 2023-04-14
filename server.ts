import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", (req: Request, res: Response) => {
  res.send("Lista de mensajes");
});

router.post("/message", (req: Request, res: Response) => {
  console.log("req.query: ", req.query);
  console.log("req.body: ", req.body);

  res.send("Mensaje añadido correctamente");
});

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
