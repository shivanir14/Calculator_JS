var screenDisplayVal ="";

var screenDisplayOutput = document.querySelector('.screen');

var buttons = document.querySelectorAll('.btn');

var equal = document.querySelector('.equalButton');

var clear = document.querySelector('.clearButton');

var del = document. querySelector('.deleteButton');

buttons.forEach(function(button)
{
    button.addEventListener("click",function(e){
        screenDisplayVal += e.target.dataset.num;
        screenDisplayOutput.value= screenDisplayVal; 
    })

    
});

equal.addEventListener('click',function(e)
{
    if(screenDisplayVal == "")
    {
        screenDisplayOutput.value = ""
    }
    else
    {
        try
        {
            screenDisplayVal= eval(screenDisplayVal);
            screenDisplayOutput.value = screenDisplayVal;
        }
        catch
        {
            screenDisplayOutput.value = "Error!";
        }
        
    }
});

clear.addEventListener("click",function(e)
{
    screenDisplayVal = "";
    screenDisplayOutput.value = screenDisplayVal;
});

del.addEventListener("click",function(e){
    if(screenDisplayOutput.value){
        //screenDisplayVal = screenDisplayVal.slice(0,-1);
        screenDisplayOutput.value = screenDisplayOutput.value.slice(0,-1);
        screenDisplayVal = screenDisplayOutput.value;
    }
    
});