const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'trading-intro': 'https://picsum.photos/800/600?random=1',
  'technical-analysis': 'https://picsum.photos/800/600?random=2',
  'psychology': 'https://picsum.photos/800/600?random=3',
  'risk-management': 'https://picsum.photos/800/600?random=4',
  'algorithmic-trading': 'https://picsum.photos/800/600?random=5',
  'anaja-strategy': 'https://picsum.photos/800/600?random=6',
  'market-psychology': 'https://picsum.photos/800/600?random=7',
  'forex-trading': 'https://picsum.photos/800/600?random=8',
  'crypto-trading': 'https://picsum.photos/800/600?random=9',
  'stock-trading': 'https://picsum.photos/800/600?random=10'
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const downloadAll = async () => {
  const publicDir = path.join(__dirname, '../../../public/images/courses');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const [key, url] of Object.entries(images)) {
    const filename = path.join(publicDir, `${key}.jpg`);
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Error downloading ${key}:`, error);
    }
  }
};

downloadAll().then(() => {
  console.log('All images downloaded successfully!');
}).catch(console.error); 