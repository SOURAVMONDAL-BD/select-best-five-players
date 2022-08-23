

function clickToSelect(nameTag, btnTag){
    const selection = document.getElementById('selection');
    let childCount = selection.childElementCount;

    if(childCount < 5){
        let name = nameTag.innerText;
        let createEle = document.createElement('p');
        createEle.innerText = name;
        selection.append(createEle);
        btnTag.disabled = true
    }
    else{
        alert('You can not select more than 5 players')
    }

}


document.getElementById('calculateBtn').addEventListener('click', function(){
    const selection = document.getElementById('selection');
    let childCount = selection.childElementCount;

    const perPlayerField = document.getElementById('perPlayerField');
    let valueString = perPlayerField.value;
    let perPlayerValue = parseInt(valueString);

    let playerCost = document.getElementById('playerCost');
    playerCost.innerText = childCount * perPlayerValue ;
    
})


document.getElementById('calculateTotal').addEventListener('click', function(){
    const playerCost = document.getElementById('playerCost');
    let playerCostString = playerCost.innerText;
    let playerCostNumber = parseInt(playerCostString)

    const managerField = document.getElementById('managerField');
    let managerValueString = managerField.value;
    let managerValueNumber = parseInt(managerValueString);
    
    const coachField = document.getElementById('coachField');
    let coachValueString = coachField.value;
    let coachValueNumber = parseInt(coachValueString);

    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = playerCostNumber + managerValueNumber + coachValueNumber;
    // console.log(coachValueNumb)
})