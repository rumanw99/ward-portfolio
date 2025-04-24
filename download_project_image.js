const https = require('https');
const fs = require('fs');

const url = 'https://i.postimg.cc/8PJxwJdN/react-project.jpg';
const path = './assets/react-project.jpg';

https.get(url, (res) => {
    const fileStream = fs.createWriteStream(path);
    res.pipe(fileStream);

    fileStream.on('finish', () => {
        fileStream.close();
        console.log('Project image downloaded successfully!');
    });
}).on('error', (err) => {
    console.error('Error downloading project image:', err.message);
}); 