'use strict';

var _mortgage = require('./mortgage');

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;

    var _calculateAmortizatio = (0, _mortgage.calculateAmortization)(principal, years, rate),
        monthlyPayment = _calculateAmortizatio.monthlyPayment,
        monthlyRate = _calculateAmortizatio.monthlyRate,
        amortization = _calculateAmortizatio.amortization;

    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    amortization.forEach(function (month) {
        return console.log(month);
    });
});
