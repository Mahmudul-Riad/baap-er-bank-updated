  

// console.log(deposit)
document.getElementById('btn-deposit').addEventListener('click',function deposit(){

    const depositField=document.getElementById('deposit-field')
    const depositAmount= depositField.value
    const newdepositAmount=parseFloat (depositAmount);
    
    // console.log(typeof newdepositAmount)

    const prevdeposit= document.getElementById('deposit-total').innerText
    
    const previousdeposit=parseFloat(prevdeposit)
    
  
 
     const total= previousdeposit+newdepositAmount
     console.log( total)
     prevdeposit==total
    document.getElementById('deposit-total').innerText=total
    
    
    depositField.value=""
    // console.log(total)
    // console.log("hello")

    // console.log(prevdeposit)


 

})




function balance(){


}