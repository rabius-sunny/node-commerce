import express from 'express'
import cors from 'cors'

// Initiate express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello Node Commerce'))

// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`)
})
