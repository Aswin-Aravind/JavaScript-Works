

function performAddition(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value

    let result=num1+num2
    document.querySelector("#root").innerHTML=`${num1}+${num2}=${result}`
}

function performSubtraction(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value

    let result=num1-num2
    document.querySelector("#root").innerHTML=`${num1}-${num2}=${result}`

}                                   //because an we are passing an id(will be unique), we can just use "box1.value", 

function performMultiplication(){
    let num1=+box1.value
    let num2=+box2.value

    let result=num1*num2
    document.querySelector("#root").innerHTML=`${num1}*${num2}=${result}`

}

function performDivision(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value

    let result=num1/num2
    document.querySelector("#root").innerHTML=`${num1}/${num2}=${result}`

}




function handleClick(event){
    let operator=event.target.value;
    let num1 = box1.value;
    let num2 = box2.value;

    let result = eval(`${num1}${operator}${num2}`)

    document.querySelector("#root").innerHTML=`${num1}${operator}${num2}=${result}`
}