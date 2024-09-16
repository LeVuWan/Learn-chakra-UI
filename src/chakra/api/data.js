import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "db.json");
  const data = await fs.readFile(filePath);
  const jsonData = JSON.parse(data);

  res.status(200).json(jsonData);
}
