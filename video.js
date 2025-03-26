import { join } from 'path';
import { readFileSync } from 'fs';

export default function handler(req, res) {
    const { name } = req.query;
    const filePath = join(process.cwd(), 'private_assets', name);

    try {
        const file = readFileSync(filePath);
        res.setHeader("Content-Type", "video/mp4");
        res.send(file);
    } catch {
        res.status(404).json({ error: "Video tidak ditemukan" });
    }
}