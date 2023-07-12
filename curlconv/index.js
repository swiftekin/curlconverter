import express from 'express';
import bodyParser from 'body-parser';
import { convertCurlToJson } from './module.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(bodyParser.json());

// Convert cURL command to JSON
app.post('/convertToJson', (req, res) => {
  const { curlCommand } = req.body;

  try {
    const jsonResult = convertCurlToJson(curlCommand);
    res.json(jsonResult);
  } catch (error) {
    res.status(500).send('Error converting cURL command to JSON');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

