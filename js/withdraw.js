document.getElementById('btn-withdraw').addEventListener('click',function (){

    // const prevwithdraw=parseFloat(document.getElementById('withdraw-total').innerText)

    // const withdrawField=document.getElementById('withdraw-field')
    // const withrawAmount= parseFloat (withdrawField.value)
    // console.log(typeof withrawAmount)
    // const total1= prevwithdraw + withrawAmount


    const amount=getInputFieldbyId("withdraw-field","withdraw-total")
    // console.log(typeof withrawAmount)
    // const prevBalance= parseFloat(document.getElementById('balance-total').innerText)
    // console.log(withrawAmount)
    // console.log(prevBalance - withrawAmount)

    document.getElementById('withdraw-total').innerText=amount

    document.getElementById('withdraw-field').value=""
    // console.log(typeof withrawAmount)
    const prevBalance= parseFloat(document.getElementById('balance-total').innerText)
    const updatedBalance= prevBalance - amount
    console.log(updatedBalance)

    document.getElementById('balance-total').innerText= updatedBalance
 

 

})