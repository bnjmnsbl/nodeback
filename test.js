var express = require('express');
var app = express();

// Get Pricing details from subscription
app.get('/billingv2/resourceUri/:resourceUri', function(req, res) {

    var pricingDetail = {}

            pricingDetail.resourceUri = req.params.resourceUri;
            pricingDetail.chargeAmount = '25.0000';
            pricingDetail.chargeAmountUnit = 'per hour';
            pricingDetail.currencyCode = 'USD';

  res.send(pricingDetail); // send json response
});

app.listen(8080);