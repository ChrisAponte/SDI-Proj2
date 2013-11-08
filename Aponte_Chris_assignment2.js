// Christopher Aponte
// SDI 1311
// Project 2

// Variables
var myName = "Jared";
var cabName1 = "\"Checker\" Cab";
var cabName2 = "\"City\" Cab";
var area1 = "Disney";
var area2 = "Orlando Airport";
var cabStandArea;
var travelTime;
var todaysFleet;
var todaysGoal;

// Promt
todaysGoal = parseInt(prompt("what is the goal for today? ", " Enter a number from 5 - 15"));
    console.log(myName + "'s goal for today is " + todaysGoal + " cab calls.");
    
// Procedure
var dayLength = function(n) {
    if (n < 10) {
        console.log(myName + " will have a short day today.");
    }else {
        console.log(myName + " will have a long day today.");
    }
};// End Procedure