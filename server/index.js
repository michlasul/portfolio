import express from "express";
import cors from "cors";
import "dotenv/config"; // load .env (dotenv)
const app = express();

app.use(cors()); // izinkan dipanggil dari client dev server
app.use(express.json()); // parse JSON body

import notionRouter from "./routes/notion.js";
app.use("/api", notionRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
