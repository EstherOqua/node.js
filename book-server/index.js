const express = require ('express')
const cors = require ('cors')

const esthersProfile = {
    firstName: 'Esther',
    lastName: "Oqua",
    preferences: {
      foods: ["Jollof", "Plantain"],
      colour: 'Green',
      number: 7
    },
    hoursOfSleep: 7.5 
  }

const db = {
    profiles: {
        1000: esthersProfile,
    },
    books: {
        0: {
          title: 'Love In Colour',
          author: 'Bolu Babalola'
        },
        1: {
            title: 'Philosopher Stone',
            author: 'J K Rowling'
        },
        2: {
            title: 'Chambers of Secret',
            author: 'J K Rowling'
        }
      }
    }

const app = express()
app.use(cors())
app.use(express.json()) // for parsing application/json
    
    
// GET /profiles
app.get('/profiles', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: db.profiles
      })
})
    
// POST /profiles
app.post('/profiles', (req, res) => {
    
    // find the largest key and increment it
    const existingIds = Object.keys(db.profiles)
    const largestKey = Math.max(...existingIds)
    
    const newKey = largestKey + 1
    
    db.profiles[newKey] = req.body
    
    res.status(201).json({
    status: 'success',
    message: `Created a profile with id of ${newKey}`
      })
    })

//Get profiles
app.get('/profiles/:userId', (req, res) => {
    console.log(req.params.userId)
    
    const matchingProfile = db.profiles[req.params.userId]
    
    if (matchingProfile) {
        res.json({
          status: 'success',
          data: matchingProfile
        })
      } 
      else {
        res.status(404).json({
          message: "Couldn't find user with that id"
        })
      }
    })
    
//Delete profile
app.delete('/profiles/:userId', (req, res) => {
    
    delete db.profiles[req.params.userId]
    
    res.status(200).json({
    status: 'success',
    message: 'deleted profile 1000'
      })
    })
    
//To update profiles
app.put('/profiles/:userId', (req, res) => {
    const idToUpdate = req.params.userId
    
    db.profiles[idToUpdate] = req.body
    
    res.status(200).json({
        message: "User updated"
      })
    })
    // another way to update profiles
    app.patch('/profiles/:userId', (req, res) => {
    
      db.profiles[req.params.userId] = {
        ...db.profiles[req.params.userId],
        ...req.body
      }
    
      res.status(200).json({
        message: "User updated"
      })
    })


app.listen (2020, () => {
    console.log('Did it work?')
})