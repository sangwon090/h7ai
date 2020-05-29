import express from 'express';
import fs from 'fs';

const app = express();

let config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

app.listen(config.server.port, () => {
    console.log(`h7ai server has started on port ${config.server.port}`);
})