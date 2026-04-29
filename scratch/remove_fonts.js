const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('app');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Match fontFamily: "...", or fontFamily: '...', with optional trailing comma and spaces
    const regex = /fontFamily:\s*["'][^"']+["'],?\s*/g;
    if (regex.test(content)) {
        console.log(`Processing ${file}`);
        const newContent = content.replace(regex, '');
        fs.writeFileSync(file, newContent);
    }
});
