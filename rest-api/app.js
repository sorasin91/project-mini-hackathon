
// by RazmanR  
// by RazmanR, Team3 date 14/1/24
// minihackathon assignment-
//  mobile phone gagdet web app



// express is a framework 
// add import
const express = require('express');
const morgan = require('morgan');
// bodyparser

const bodyparser = require('body-parser');

const app = express();

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
// cart 
// fulfilment  
// delivery 
const cartRoutes = require('./api/routes/cart');
// const fulfilmentRoutes = require('./api/routes/fulfilment');
// const deliveryRoutes = require('./api/routes/delivery');



// bodyparser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use('/cart',  cartRoutes   );
// app.use('/fulfilment', fulfilmentRoutes );
// app.use('/delivery', deliveryRoutes );


// error handling =-=-
    // SHOW ERROR, custom MESSAGE

app.use(morgan('dev'));

app.use((req, res, next) => {
    // SHOW ERROR, custom MESSAGE
    const error = new Error('some error msg, not found');
    error.status404;

    // go to next error
    next(error);

});

//pass error to here
app.use((error, req, res, next) => {
    // error status 500
    res.status( error.status || 500);
    res.json({
        error: {
            message: error.message
        }

    });

});


// cmdd  libs  to install ===

//   npm install --save body-parser


// open   localhost:3000
// ERROR MSG NOT FOUND



// get http   json    , add 5 data
// app.use((req, res, next) => {

//     // 200 status  === http client response success 
//     // 404 or 4nn === error from client 
//     // 500 or 5nn === error from server


// // add 5 data in json
//     res.status(200).json({
//         message: 'it is working',
//         // name: 'razm',
//         type: "people",
//         id: "42",
//         attributes: {
//             name: "RazmanR",
//             age: 80,
//             gender: "male"

//         }
//     });
//     //      res.send('Hello Jack');
// });


module.exports = app;

