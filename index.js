// code your solution here
function saturdayFun (activity = "roller-skate" )
{
    return `This Saturday, I want to ${activity}!`
}
saturdayFun( 'bathe my dog' );

const mondayWork = function (activity = "go to the office")
{
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective( wrap = "*" ){
    return function ( word = 'a hardworker' )
    {
        return `You are ${ wrap }${ word }${wrap}!`;
    };

}
wrapAdjective('||')("a dedicated programmer")
    

    