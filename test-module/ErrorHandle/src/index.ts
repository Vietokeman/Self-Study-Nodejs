//eslintprettier/prettier
import express from 'express'
import { sum } from './utils'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const value = sum(2, 5)
  res.send(`Hello World! ${value}`)
})

app.listen(port, () => {
  console.log('Example app listening on', port)
})
