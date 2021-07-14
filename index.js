const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
require('dotenv/config')
app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(process.env.PORT, () => {
    console.log('API Running')
})