const express = require('express')
const fetch = require('node-fetch')


const app = express();

app.use(express.json())

app.get('/', async (req, res)=> {

    const message_text = "Hello from bot"

    const params = {
            chat_id: last_message.message.chat.id,
            text: message_text,
            parse_mode: 'Markdown'
            
        }
           const tg_res = await fetch(`https://api.telegram.org/bot1444703979:AAEH5sSqoODQz9DM1uIa-fEyQj5iqP8rXqU/sendMessage?${querystring.stringify(params)}`)



    res.send('main work')
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('App listen 3000 port!')
})