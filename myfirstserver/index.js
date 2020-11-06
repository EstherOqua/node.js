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

const facts = [
    'My names is Esther',
    'I live in Dudley',
    'I love the color green'
]

//routes (include a banana route)

app.get('/', (req, res) => {
    res.json ({message: "We are live baby!"})
})

app.get ('about-me', (req, res) => {
    res.json {esther}
})

//random fact generate
app.get  ('./root', (req, res) => {
    const randomIndex = Math.floor (Math.random () = facts.length)
    const randomFact = facts [randomIndex]
    res.json ({
        ...esther,
        fact:randomFact
    })
})

// code to start server
app.listen (2020, () => {
    console.log('YES! It is working. Well done Est!')
})