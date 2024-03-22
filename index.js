const { traverse } = require("babel-core");

// Code your solution in this file!
function distanceFromHqInBlocks(Blocknum) {
    if (Blocknum>42) {
        return Blocknum - 42;
    } else {
        return 42 - Blocknum;
    }
}

function distanceFromHqInFeet (Blocknum){
    distanceFromHqInBlocks(Blocknum)
    return distanceFromHqInBlocks(Blocknum)*264
}

function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264;
    if(start > destination) {
        return  (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
};
function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start,destination);
    if (distance < 400) {
        return 0;
    } else 
    if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * 0.02);
    } else if (distance > 2000 && distance <= 2500)
    return 25;
    else { 
        return 'cannot travel that far';
    }
}