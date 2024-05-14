const express = require('express')
// import 'dotenv/config'

const consumptionRouter = require('./routes/consumptionRoutes')
const tempRouter = require('./routes/temperatureRoutes')
const pressureRouter = require('./routes/pressureRoutes')

const port = 3030
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/', consumptionRouter)
app.use('/', tempRouter)
app.use('/', pressureRouter)


app.listen(port, () => {
    console.log(`Порт запущен на порту ${port}`)
})