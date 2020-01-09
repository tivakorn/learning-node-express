// libs
import express from 'express'
import bodyParser from 'body-parser'
import config from 'config'
import cors from 'cors'

// Routes
import forumRoutes from './routes/forumRoute'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use('/forum', forumRoutes)

app.get('/', (req, res) => { res.json({ success: true }) })


app.listen(config.nodejs.port, () => {
    console.log(`Start server at port ${config.nodejs.port}.`)
})