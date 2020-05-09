const express =  require("express")
const app =  express()


const db    =  require('./config/db')
const colors =  require("colors")
const cors  = require("cors")

//load routes
const Notes =  require("./routes/notes")



//setup db connection
db()

//setup middleware
app.use(express.urlencoded(), express.json())
app.use(cors())

//setup routes
app.use('/api/v1/notes',Notes);

const  PORT =  process.env.PORT  || 5000


app.listen(PORT, ()=>{
     console.log(`listening on PORT ${PORT}`.red)
    }
     )

