const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type':'black',
        'origin':'you mamas house',
        'water temp': 200,
        'steepTime': 180,
        'caffinated': true,
        'flavor':'deelish'

    },
    'matcha':{
        'type':'green',
        'origin':'you mamas house',
        'water temp': 200,
        'steepTime': 180,
        'caffinated': false,
        'flavor':'deelish'

    },
    'unknown':{
        'type':'unknown',
        'origin':'you mamas house',
        'water temp': 0,
        'steepTime': 0,
        'caffinated': false,
        'flavor':'unknown'

    }
}

app.get('/', (request, response)=>{                 // serves up just HTML
    response.sendFile(__dirname + '/index.html')   //when server hears this request, __ dirname  tells where to start looking for the html
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT,()=>{           // process.env.PORT lets any other port the host server will like to use 
    console.log(`This server is running on port ${PORT}, catch it!!`)  // set the server to listen on 8000
})