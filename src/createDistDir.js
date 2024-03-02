import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const makedir = async () => {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const dirpath = path.resolve(__dirname, "dist");
  try {

    await fsp.access(dirpath);
    console.log("Директория уже существует");
  } catch (e) {
    await console.log("Создание директории...");
    await fsp.mkdir(dirpath);
    console.log("Директория создана.");
  }
};

makedir()