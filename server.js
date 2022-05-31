const express = require('express');

const app = express();
// правим инстанция на експреса и го изпълняваме, което е нашият апликейшън

app.get('/', (req, res) => {
    console.log('Hello from console');

    res.send('Hello world');
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});