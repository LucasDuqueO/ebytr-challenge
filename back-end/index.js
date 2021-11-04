const express = require('express');

const app = express();

const PORT = 3001;

app.use(express.json());

app.listen( PORT, () => console.log(`Aplicativo ouvindo na porta ${PORT}`));