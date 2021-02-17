const express = require('express')
const connectDB = require('./connectDB')
const cors = require('cors')

const app = express()
app.use(express.json({ extended: false }))
app.use(cors())
app.use('/api/v1/users', require('./routes/authRoutes'))
app.use('/api/v1/notes', require('./routes/notesRoutes'))

connectDB()

app.listen(3001, () => console.log('Listening on port 3001'))