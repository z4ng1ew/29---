import fs from "node:fs/promises";

async function readPortFile() {
  const filePath = "./dist/port.txt";

  try {
    // Проверка доступности файла
    await fs.access(filePath, fs.constants.F_OK);

    // Чтение файла
    const data = await fs.readFile(filePath, "utf8");
    console.log("Содержимое файла port.txt:");
    console.log(data);
  } catch (err) {
    console.error(`Ошибка чтения файла: ${err}`);
  }
}

readPortFile();
