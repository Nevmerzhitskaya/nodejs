import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);    
// const filePath = path.join(__dirname, 'files', 'script.js');

export const filePathConverter = (...paths) => {
    return path.join(__dirname, ...paths);
}