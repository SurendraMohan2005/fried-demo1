const display = document.getElementById("display");

function appendtodisp(input){
    display.value += input

}
function cleardisp(){
    display.value = ""
}
function calculate(){
    try{
    display.value = eval(display.value)
    }
    catch(error)
    {
        display.value = "ERROR"
    }
}
