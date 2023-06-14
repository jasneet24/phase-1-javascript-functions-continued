// code your solution here

function saturdayFun(activity = "roller-skate") {

    return `This Saturday, I want to ${activity}!`;
}    

function mondayWork(activitys = "go to the office"){

    return `This Monday, I will ${activitys}.`}



function wrapAdjective(blah="*"){
    return function wrapQuotes(adj="special"){
               return `You are ${blah}${adj}${blah}!`}
    }