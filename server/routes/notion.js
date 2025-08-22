import { Router } from "express";
import { queryNotionDatabase } from "../services/notionClient.js";

const notionRouter = Router();

// POST /api/notion/query
notionRouter.post("/posts", async (req, res) => {
  try {
    const { filter, sorts, start_cursor, page_size } = req.body || {};
    const data = await queryNotionDatabase({
      databaseId: process.env.NOTION_DB_ID,
      body: { filter, sorts, start_cursor, page_size: 1 },
    });
    res.json({ ok: true, ...data });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

export default notionRouter;
