const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Text sizing
    content = content.replace(/(?<![a-z0-9-]:)\btext-3xl\b/g, 'text-xl md:text-3xl');
    content = content.replace(/(?<![a-z0-9-]:)\btext-4xl\b/g, 'text-2xl md:text-4xl');
    content = content.replace(/(?<![a-z0-9-]:)\btext-5xl\b/g, 'text-3xl md:text-5xl');
    content = content.replace(/(?<![a-z0-9-]:)\btext-6xl\b/g, 'text-4xl md:text-6xl');
    content = content.replace(/(?<![a-z0-9-]:)\btext-7xl\b/g, 'text-5xl md:text-7xl');
    
    // Text arbitrary px sizing (>= 30px)
    content = content.replace(/(?<![a-z0-9-]:)\btext-\[([3-9][0-9])px\]/g, (m, size) => {
        let num = parseInt(size);
        return `text-2xl md:text-[${num}px]`;
    });
    
    // Padding/Margin/Gap scaling dictionary
    const scaleMap = {
        '8': '4',
        '10': '5',
        '12': '6',
        '14': '6',
        '16': '8',
        '20': '10',
        '24': '10',
        '28': '12',
        '32': '16',
        '36': '16',
        '40': '20',
        '48': '24',
        '56': '28',
        '64': '32',
        '72': '36',
        '80': '40',
        '96': '48'
    };

    const spacingRegex = /(?<![a-z0-9-]:)\b([pm][xybtlr]?|gap)-([0-9]+)\b/g;
    content = content.replace(spacingRegex, (m, prefix, size) => {
        if (scaleMap[size]) {
            return `${prefix}-${scaleMap[size]} md:${prefix}-${size}`;
        }
        return m;
    });

    // Arbitrary padding/margin px (e.g. px-[60px])
    const spacingArbRegex = /(?<![a-z0-9-]:)\b([pm][xybtlr]?|gap)-\[([0-9]+)px\]/g;
    content = content.replace(spacingArbRegex, (m, prefix, size) => {
        let num = parseInt(size);
        if (num >= 24) {
            let half = Math.floor(num / 2);
            return `${prefix}-[${half}px] md:${prefix}-[${size}px]`;
        }
        return m;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    });
}

const targetDir = path.join(__dirname, '../app');
console.log(`Processing directory: ${targetDir}`);
walkDir(targetDir);
console.log("Done");
