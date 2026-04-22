const https = require('https');
https.get('https://cdn.tailwindcss.com?plugins=typography', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    if (data.includes('fetch =') || data.includes('window.fetch =') || data.includes('fetch=') || /fetch\s*=/.test(data) || /\.fetch\s*=/.test(data)) {
      console.log('Found in tailwind cdn!');
    } else {
      console.log('Not found in tailwind');
    }
  });
});
