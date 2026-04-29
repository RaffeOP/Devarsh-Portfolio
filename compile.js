const fs = require('fs');
const https = require('https');

const texContent = fs.readFileSync('Devarsh_Patel_CV.tex', 'utf8');
const boundary = '--------------------------' + Date.now().toString(16);

let postData = '';
postData += `--${boundary}\r\n`;
postData += `Content-Disposition: form-data; name="filecontents"; filename="document.tex"\r\n\r\n`;
postData += `${texContent}\r\n`;

postData += `--${boundary}\r\n`;
postData += `Content-Disposition: form-data; name="engine"\r\n\r\n`;
postData += `pdflatex\r\n`;

postData += `--${boundary}\r\n`;
postData += `Content-Disposition: form-data; name="return"\r\n\r\n`;
postData += `pdf\r\n`;

postData += `--${boundary}--\r\n`;

const options = {
  hostname: 'texlive.net',
  path: '/cgi-bin/latexcgi',
  method: 'POST',
  headers: {
    'Content-Type': `multipart/form-data; boundary=${boundary}`,
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  if (res.headers['content-type'] === 'application/pdf') {
    const file = fs.createWriteStream('Devarsh_Patel_CV.pdf');
    res.pipe(file);
    file.on('finish', () => {
      console.log('PDF compiled successfully!');
      file.close();
    });
  } else {
    console.error(`Failed! Content-Type: ${res.headers['content-type']}`);
    res.on('data', d => console.error(d.toString()));
  }
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
