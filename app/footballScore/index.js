'use strict';
var Emitter = require('events');
var eventsName =  require('./config');

//strings for function
var cant = 'Cants minus, the score is: ';
var plusGoalim = 'You score goal, the score now: ';
var minusGoalim = 'You got goal, the score now: ';
var result = ' The result is: ';

module.exports = class Football extends Emitter.EventEmitter{

    constructor(name, sports){
        super(); // call parent to copy its props and methods
        Emitter.EventEmitter.call(this);
        this.score = 0;
        this.name = name;
        this.sports = sports;
        this.dataLog = Array(); // array for logs
    }
    getName(){
        this.emit(eventsName.events.NAME); //emit (=fire) event
    }
    getSports(){
        this.emit(eventsName.events.SPORTS); //emit (=fire) event
    }
    plusGoal(goal){
        this.score += goal; // score++
        this.dataLog.push(plusGoalim + this.score); // push the logs to dataLogs array
        this.emit(eventsName.events.CHANGE); //emit (=fire) event
    }
    minusGoal(goal){
        if (this.score < 1){ // if the score less then 1 (0)
            this.dataLog.push(cant + this.score); // push the logs to dataLogs array
        }
        else {
            this.score -= goal; // score--
            this.dataLog.push(minusGoalim + this.score); // push the logs to dataLogs array
            this.emit(eventsName.events.CHANGE); //emit (=fire) event
        }
    }
    displayScores() {
        console.log("The score is " + this.score) ; // callback function
    }
    nameOfPlayer() {
        console.log("The name is " + this.name) ; // callback function
    }
    typeOfSports() {
        console.log("The type of sports is " + this.sports) ; // callback function
    }
    dataLogs(){
        return this.dataLog; // return the dataLogs array
    }
};