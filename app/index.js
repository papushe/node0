'use strict'; //Using a variable without declaring it, is not allowed

var football = require('./footballScore');
var events = require('./footballScore/config');

var player1 = new football("papushe", "football"); // new instance

//attach callback to events
player1.on(events.NAME, player1.nameOfPlayer);
player1.on(events.SPORTS, player1.typeOfSports);
player1.on(events.CHANGE, player1.displayScores);

player1.getName();
player1.getSports();
player1.plusGoal(1);
player1.plusGoal(1);
player1.plusGoal(1);
player1.plusGoal(1);
player1.minusGoal(1);
player1.minusGoal(1);
player1.minusGoal(1);
player1.minusGoal(1);
player1.minusGoal(1);
player1.plusGoal(1);
player1.plusGoal(1);

module.exports = function () {
    return player1.dataLogs(); //exports the dataLogs array
};