let equation = "0";
function buttonPress(pressedBtn)
{
    if(pressedBtn != "=")
    {
        if(equation === "0")
        {
            equation = pressedBtn;
        }
        else
        {
            equation = equation.concat(pressedBtn);
        }
        
        document.getElementById("calcScreen").innerText = equation ;
        console.log(pressedBtn);
    }
    else
    {
        document.getElementById("calcScreen").innerText = eval(equation);
    }
}