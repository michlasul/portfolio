// const NOTION_API = "https://api.notion.com/v1";
// const COMMON_HEADERS = {
//   Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
//   "Notion-Version": process.env.NOTION_VERSION || "2022-06-28",
//   "Content-Type": "application/json",
// };

// // Fungsi util untuk query database Notion
// async function queryDatabase({ databaseId, body }) {
//   const url = `${NOTION_API}/databases/${databaseId}/query`; // POST /query
//   const res = await fetch(url, {
//     method: "POST",
//     headers: COMMON_HEADERS,
//     body: JSON.stringify(body || {}),
//   });

//   // Forward error detail dari Notion kalau ada
//   if (!res.ok) {
//     const err = await res.text();
//     throw new Error(`Notion error ${res.status}: ${err}`);
//   }
//   return res.json();
// }

const queryNotionDatabase = async ({ databaseId, body }) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const url = `https://api.notion.com/v1/databases/${databaseId}/query`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  // Tangani error API Notion dengan baik
  if (!res.ok) {
    let detail;
    try {
      detail = await res.json();
    } catch (_) {}
    const msg = `Notion error ${res.status}`;
    const err = new Error(msg);
    err.detail = detail;
    throw err;
  }

  return res.json();
};

export default queryNotionDatabase;
