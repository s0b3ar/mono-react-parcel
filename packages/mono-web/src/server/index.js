import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cookiesMiddleware from 'universal-cookie-express'
import ssrMiddleware from './ssr'

const app = express()
const port = process.env.PORT || 8080

app.use(morgan('tiny'))
app.use('/dist', express.static(path.resolve(__dirname, '../../dist')))
app.use(ssrMiddleware)

app.use((req, res, next) => {
  res
    .status(404)
    .send('404...')
})

app.listen(port, function() {
  console.info(`Server running at http://localhost:${port}...`)
})
