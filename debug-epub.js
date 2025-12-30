// Simple EPUB debugging script
const fs = require('fs');
const JSZip = require('jszip');

async function debugEPUB() {
    try {
        console.log('Reading EPUB file...');
        const data = fs.readFileSync('test-book.epub');
        console.log('File size:', data.length);
        
        console.log('Loading with JSZip...');
        const zip = await JSZip.loadAsync(data);
        
        console.log('Files in ZIP:');
        Object.keys(zip.files).forEach(filename => {
            console.log(' -', filename);
        });
        
        console.log('\nTrying to read container.xml...');
        let containerFile = zip.file('META-INF/container.xml');
        if (!containerFile) {
            containerFile = zip.file('META-INF\\container.xml');
        }
        
        if (containerFile) {
            const containerContent = await containerFile.async('text');
            console.log('Container content:', containerContent);
        } else {
            console.log('Container file not found!');
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

debugEPUB();