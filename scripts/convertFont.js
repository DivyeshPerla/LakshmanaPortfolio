const fs = require('fs');
const path = require('path');
const opentype = require('opentype.js');
const THREE = require('three');

// Download Inter Bold font and save it to fonts directory
const downloadFont = async () => {
  const response = await fetch('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
  const css = await response.text();
  const fontUrl = css.match(/url\((.*?)\)/)[1];
  
  const fontResponse = await fetch(fontUrl);
  const fontBuffer = await fontResponse.arrayBuffer();
  
  fs.writeFileSync(path.join(__dirname, '../public/fonts/Inter-Bold.ttf'), Buffer.from(fontBuffer));
};

// Convert TTF to Three.js JSON format
const convertFont = () => {
  const font = opentype.loadSync(path.join(__dirname, '../public/fonts/Inter-Bold.ttf'));
  const fontData = THREE.FontUtils.createFont(font);
  
  fs.writeFileSync(
    path.join(__dirname, '../public/fonts/Inter_Bold.json'),
    JSON.stringify(fontData)
  );
};

downloadFont()
  .then(convertFont)
  .catch(console.error); 