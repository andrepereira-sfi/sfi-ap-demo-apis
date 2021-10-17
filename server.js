const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/serviceability/:address', (req, res) => {
    let response={
        result: 'None',
        address: req.params.address || ''
    }
    if(req.params.address.substr(0,1) == '3'){
        response.result = 'Fibre';
    }
    res.json(response);
})


app.listen(3000);
