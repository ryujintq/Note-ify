const mongoose = require('mongoose')

const mongoUri = 'mongodb+srv://tq:Thisisthedbpassword@cluster0-0qkvc.mongodb.net/notes?retryWrites=true&w=majority'

const connectDB = () => {
    mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

    mongoose.connection.on('connected', () => console.log('Connected to database'))
    mongoose.connection.on('error', err => console.log('Error connecting to database', err))
}

module.exports = connectDB
