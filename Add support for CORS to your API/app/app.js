const express = require('express');
const app = express();
const cors = require('cors');
const prisma = require('../lib/prisma/client');
const {
  validate,
  validationErrorMiddleware,
} = require('../lib/validation/index');
const planetSchema = require('../lib/validation/planet');

const corsOption = {
  origin: 'http://localhost:3000',
};

app.use(express.json());
app.use(cors(corsOption));

app.get('/planets', async (req, res) => {
  const planets = await prisma.planet.findMany()
})