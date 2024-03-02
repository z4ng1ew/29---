
import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";

// Получение переменной окружения PORT
const PORT =  process.env.PORT || 3000;;



const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filepath = path.resolve(__dirname, './dist', 'port.txt');
fsp.writeFile(filepath, `enviroment variable = ${PORT}`, 'utf-8');
