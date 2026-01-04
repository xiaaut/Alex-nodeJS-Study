import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();
const port = 3000;

app.get('/:idolName', async (req, res) => {
    const idolName = req.params.idolName;
    if (!idolName) {
        res.status(400).send('400 Bad Request');
        return
    }

    const idolDataText = await readFile('./data.json', 'utf-8');
    const idolData = JSON.parse(idolDataText);

    const resultIdol = idolData.find(idol => idol.name.toLowerCase() === idolName.toLowerCase())

    if (!resultIdol) {
        return res.status(404).send('404 Not Found');
    }

    return res.status(200).json(resultIdol);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});