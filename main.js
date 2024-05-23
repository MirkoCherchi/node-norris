const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const DB_FILE = "norrisDb";

// lettura dati JSON
const readJSONData = (nomeFile) => {
  const filePath = path.join(__dirname, nomeFile + ".json");
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    if (fileData) {
      return JSON.parse(fileData);
    }
  }
  return [];
};
