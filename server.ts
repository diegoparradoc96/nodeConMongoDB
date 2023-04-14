import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const response = require("./network/response");

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", (req: Request, res: Response) => {
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });

  response.success(req, res, "Lista de mensajes");
});

router.post("/message", (req: Request, res: Response) => {
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "Error simulado",
      500,
      "Es solo una simulacion de los errores"
    );
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
