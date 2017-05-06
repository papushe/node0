'use strict'; //Using a variable without declaring it, is not allowed

const   football = require('./footballScore'),
        eventsName = require('./footballScore/config').events,
        player1 = new football("papushe", "football"); // new instance

// //attach callback to events
player1.on(eventsName.NAME, player1.nameOfPlayer);
player1.on(eventsName.SPORTS, player1.typeOfSports);
player1.on(eventsName.CHANGE, player1.displayScores);

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

module.exports = () => {
    return player1.dataLogs(); //exports the dataLogs array
};
