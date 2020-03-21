const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/api', (req, res) => 
{
    res.send('Hello World')
})

app.post('/api/mail', (req,res,next) => {

    console.log(reg.body)

    sendGrid.setApiKey('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');
    const msg = {
        to: "ejtian@princeton.edu",
        from: req.body.email,
        subject: 'website connect',
        text: req.body.text
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                succes: true
            });
        })
        .catch(err => {
            console.log("error: ", err);
            req.status(401).json({
                success: false
            });
        });
});

const port = 3030
app.listen(port, () => console.log(`Example app listening on port!`))