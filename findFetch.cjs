const fs = require('fs');
const path = require('path');
function searchDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' && dir !== '.') continue;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            searchDir(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.mjs') || fullPath.endsWith('.ts') || fullPath.endsWith('.cjs')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.match(/fetch\s*=\s*/)) {
                console.log('Found in:', fullPath);
            }
        }
    }
}
searchDir('./node_modules');
