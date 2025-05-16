const https = require('https');
const fs = require('fs');
const path = require('path');

const fontUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap';
const fontsDir = path.join(__dirname, '../public/fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Download the font file
https.get('https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.ttf', (response) => {
  const fontPath = path.join(fontsDir, 'Inter-Bold.ttf');
  const fileStream = fs.createWriteStream(fontPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    console.log('Font downloaded successfully!');
    fileStream.close();
  });
}).on('error', (err) => {
 