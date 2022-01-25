const express = require('express')
const cors = require('cors')

const {getHouses ,createHouse ,updateHouses ,deleteHouse} = require('./controller')

const app = express()

//middleware
app.use(cors())
app.use(express.json())
// app.get('/', main.index);

// endpoints
app.get('/api/houses',getHouses)
app.post('/api/houses',createHouse)
app.delete('/api/houses',deleteHouse)
app.put('/api/houses',updateHouses)

// const port = 4004

// app.listen(port, () => console.log(`server running on ${port}`))

app.listen(4004, () => console.log(`running on 4004`))