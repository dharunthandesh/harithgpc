const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  // 1. Redirect legacy index or .html to clean URL (mirroring Vercel cleanUrls)
  if (pathname === '/index.html' || pathname === '/index.php' || pathname === '/index') {
    res.writeHead(308, { Location: '/' + (urlObj.search || '') });
    return res.end();
  }

  if (pathname.endsWith('.html')) {
    const clean = pathname.slice(0, -5);
    res.writeHead(308, { Location: clean + (urlObj.search || '') });
    return res.end();
  }

  // 2. Remove trailing slash if not root
  if (pathname.length > 1 && pathname.endsWith('/')) {
    res.writeHead(308, { Location: pathname.slice(0, -1) + (urlObj.search || '') });
    return res.end();
  }

  // 3. Resolve file path
  let filePath = path.join(ROOT, pathname);

  if (pathname === '/') {
    filePath = path.join(ROOT, 'index.html');
  } else if (!path.extname(filePath)) {
    // Check if clean URL has corresponding .html file
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }
  }

  // Prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404 Not Found</h1>');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`> Local dev server running at http://localhost:${PORT}`);
  console.log(`> Clean URLs & 308 redirects active.`);
});
