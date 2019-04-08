const express = require('express')
const sha1 = require('sha1')

const app = express()

app.get('/', (req, res) => {
    console.log(req.query)
    const token = 'shaodawechat'
    const timestamp = req.query.timestamp
    const nonce = req.query.nonce
    const signature = req.query.signature
    const echostr = req.query.echostr

    let sha = sha1([token, timestamp, nonce].sort().join(''))

    if (sha === signature) {
        res.send(req.query.echostr)
    } else {
        res.send('wrong')
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})
