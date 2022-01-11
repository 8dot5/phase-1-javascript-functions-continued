
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;  
};

saturdayFun();
saturdayFun('bathe my dog');

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

mondayWork();


function wrapAdjective(visualFlair = '*') {
    const innerFunction = function(adjective = 'special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
    return innerFunction;
}

wrapAdjective('+')('a dedicated programmer');