function getInputFieldbyId(inputFieldId,displayField)
{
    const depositField=document.getElementById(inputFieldId);
    const depositAmount= depositField.value;
    const newdepositAmount=parseFloat (depositAmount);
    const prevdeposit= document.getElementById(displayField).innerText;
    const previousdeposit=parseFloat(prevdeposit);
    const total= previousdeposit+newdepositAmount;
    return total;
    // depositField.value=""

}