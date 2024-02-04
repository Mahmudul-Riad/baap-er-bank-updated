  

// console.log(deposit)
document.getElementById('btn-deposit').addEventListener('click',function deposit(){

    // const depositField=document.getElementById('deposit-field')
    // const depositAmount= depositField.value
    // const newdepositAmount=parseFloat (depositAmount);
    // const prevdeposit= document.getElementById('deposit-total').innerText
    // const previousdeposit=parseFloat(prevdeposit)
    //  const amount= previousdeposit+newdepositAmount
    const amount=getInputFieldbyId("deposit-field","deposit-total");
     
    document.getElementById('deposit-total').innerText=amount;
    
    const prevBalance= parseFloat(document.getElementById('balance-total').innerText);
    console.log(prevBalance);
    const updatedBalance= prevBalance + amount;
    document.getElementById('balance-total').innerText= updatedBalance;
    document.getElementById('deposit-field').value='';

})




