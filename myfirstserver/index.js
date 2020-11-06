//code from external libraries
const express = require ('express')
const cors = require ('cors')

//setup for Express
const app = express()
app.use(cors())

const esther = {
    firstName: 'Esther',
    lastName: 'Oqua',
    favouriteColour: 'Green',
    favouriteFood: 'Jollof'
}

//routes (include a banana route)

app.get('/', (req, res) => {
    res.json ({message: "We are live baby!"})
})

// code to start server
app.listen (2020, () => {
    console.log('YES! It is working. Well done Est!')
})