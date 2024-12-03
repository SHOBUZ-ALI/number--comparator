const numberOne=document.getElementById('compareNumber1');
const numberTwo=document.getElementById('compareNumber2');
const compareButton=document.getElementById('compareButton');
const resetButton=document.getElementById('resetButton');
const result=document.getElementById('result');


const INPUT_ERROR='border-red-500';
// validating/parts-2(if-true)
function isValidInput(){
    if(!numberOne.value){
        numberOne.classList.add(INPUT_ERROR);
        return false;
    }
    if(!numberTwo.value){
        numberTwo.classList.add(INPUT_ERROR);
        return false;
    }
    // for removing INPUT_ERROR/red border when reset
    numberOne.classList.remove(INPUT_ERROR);
    numberTwo.classList.remove(INPUT_ERROR);
    return true;
}

compareButton.addEventListener('click', function () {
    // validation parts-1/incase no input
    if(!isValidInput()){
        return;
    }
    const compareNumber1=parseFloat(numberOne.value);
    const compareNumber2=parseFloat(numberTwo.value);
    if(compareNumber1>compareNumber2){
        result.innerText='result:compareNumber1 is greater';
    }if(compareNumber1<compareNumber2){
        result.innerText='result:compareNumber2 is greater';
    }if(compareNumber1===compareNumber2){
        result.innerText='result:two number is equal';
    }

})
resetButton.addEventListener('click',function(){
    numberOne.value='0';
    numberTwo.value='0';
    // resultcomment needs to be disappeared
    result.innerText='';
})











