"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use(router);
router.get("/message", (req, res) => {
    res.send("Lista de mensajes");
});
router.post("/message", (req, res) => {
    res.send("Mensaje añadido");
});
app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
