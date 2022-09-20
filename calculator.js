const express = require('express');
const {convertQString,calcMean,calcMedian,calcMode} = require('./utilities.js');
const ExpressError = require('./errors.js');
const app = express();

// create 3 routes

app.get('/mean', function (req,res,next){
    try {
        if (Object.keys(req.query).length === 0) throw new ExpressError('Num inputs are required!',400);
        let numArr = convertQString(req.query.nums);
        if (numArr.includes(NaN)) throw new ExpressError(`All nums must be integers`,400);

        // can intentionally through an error here
        let mean = calcMean(numArr);
        let data = {
            "response": {
                "operation": 'mean',
                "value": `${mean}`
            }
        }
        return res.json(data);
    } catch (err) {
        return next(err);
    }

});

app.get('/median', function (req,res,next){
    try{
        if (Object.keys(req.query).length === 0) throw new ExpressError('Num inputs are required!',400);
        let numArr = convertQString(req.query.nums);
        if (numArr.includes(NaN)) throw new ExpressError(`All nums must be integers`,400);
    
        let resp = calcMedian(numArr);
    
        let data = {
            "response": {
                "operation": 'median',
                "value": `${resp}`
            }
        }
        return res.json(data);
    } catch (err){
        return next(err);
    }
});

app.get('/mode', function (req,res,next){
    try {
        if (Object.keys(req.query).length === 0) throw new ExpressError('Num inputs are required!',400);
        let numArr = convertQString(req.query.nums);
        if (numArr.includes(NaN)) throw new ExpressError(`All nums must be integers`,400);
    
        let resp = calcMode(numArr);
    
        let data = {
            "response": {
                "operation": 'mode',
                "value": `${resp}`
            }
        }
        return res.json(data);
    } catch (err)    {
        return next(err);
    }
});

// need custom error
// app.use(function(req,res,next){
//     const pageNotFoundErr = new ExpressError('')
// })

// need generic error handler

app.use(function(err,req,res,next){
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message,status}
    });
});


app.listen(3000, function () {
    console.log('App on port 3000');
  });



