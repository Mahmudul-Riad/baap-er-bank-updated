document.getElementById('btn-withdraw').addEventListener('click',function withdraw(){

    const prevwithdraw=parseFloat(document.getElementById('withdraw-total').innerText)

    const withdrawField=document.getElementById('withdraw-field')
    const withrawAmount= parseFloat (withdrawField.value)
    console.log(typeof withrawAmount)
    const total1= prevwithdraw + withrawAmount

    // console.log(typeof withrawAmount)
    // const prevBalance= parseFloat(document.getElementById('balance-total').innerText)
    // console.log(withrawAmount)
    // console.log(prevBalance - withrawAmount)

    document.getElementById('withdraw-total').innerText=total1

    console.log(total1)

    withdrawField.value=""
    // console.log(typeof withrawAmount)
    const prevBalance= parseFloat(document.getElementById('balance-total').innerText)
    const updatedBalance= prevBalance - withrawAmount
    console.log(updatedBalance)

    document.getElementById('balance-total').innerText= updatedBalance
 

 

})