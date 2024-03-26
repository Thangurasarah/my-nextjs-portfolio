
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'Sarah-Wangui_cv.pdf');
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end();
      return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Sarah-Wangui_cv.pdf');
    res.send(data);
  });
}
