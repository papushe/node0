var football = require('./footballScore');
var events = require('./footballScore/config');

var player1 = new football("papushe", "football");



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
    return player1.dataLogs();
};