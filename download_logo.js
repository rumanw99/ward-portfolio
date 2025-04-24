const https = require('https');
const fs = require('fs');

const url = 'https://i.postimg.cc/Dfsrt5qN/logo.jpg';
const path = './assets/logo.png';

https.get(url, (res) => {
    const fileStream = fs.createWriteStream(path);
    res.pipe(fileStream);

    fileStream.on('finish', () => {
        fileStream.close();
        console.log('Logo downloaded successfully!');
    });
}).on('error', (err) => {
    console.error('Error downloading logo:', err.message);
}); 