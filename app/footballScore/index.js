'use strict';
var Emitter = require('events');
var events =  require('./config');
var cant = 'Cants minus, the score is: ';
var plusGoalim = 'You score goal, the score now: ';
var minusGoalim = 'You got goal, the score now: ';
var result = ' The result is: ';
module.exports = class Football extends Emitter.EventEmitter{
    constructor(name, sports){
        super();
        this.score = 0;
        Emitter.EventEmitter.call(this);
        this.name=name;
        this.sports=sports;
        this.dataLog = Array();
    }
    getName(){
        this.emit(events.NAME);
        // return this.name;
    }
    getSports(){
        this.emit(events.SPORTS);
        // return this.sports;
    }
    plusGoal(goal){
        this.score += goal;
        this.dataLog.push(plusGoalim + this.score);
        this.emit(events.CHANGE);
    }
    minusGoal(goal){
        if (this.score < 1){
            this.dataLog.push(cant + this.score);
        }
        else {
            this.score -= goal;
            this.dataLog.push(minusGoalim + this.score);
            this.emit(events.CHANGE);
        }
    }
    displayScores() {
        console.log("The score is " + this.score ) ;
    }
    nameOfPlayer() {
        console.log("The name is " + this.name ) ;
    }
    typeOfSports() {
        console.log("The type of sports is " + this.sports ) ;
    }
    dataLogs(){
        return this.dataLog;
    }
};




// module.exports = function displayScores() {
//     console.log("The score is " + this.score ) ;
// }


// var player1 = new Football("papushe", "football");
//
// player1.on(events.CHANGE, displayScores);
//
// player1.plusGoal(1);
// player1.plusGoal(1);
// player1.plusGoal(1);
// player1.plusGoal(1);
// player1.minusGoal(1);
// player1.minusGoal(1);
// player1.minusGoal(1);
// player1.minusGoal(1);
// player1.minusGoal(1);
// player1.plusGoal(1);
// console.log("The player name is: " + player1.getName());
// console.log("The player sports is: " + player1.getSports());
// console.log(JSON.stringify(dataLog, null, 2));
//

//
// exports.footbalPlayer =function () {
//     var footballer = new Football();
//     return footballer;
// };
//
