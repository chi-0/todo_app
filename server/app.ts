import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("port", PORT);

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "5000포트에서 서버 실행");
});
