const express = require('express')
const fetch = require('node-fetch')


const app = express();

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('main work')
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('App listen 3000 port!')
})