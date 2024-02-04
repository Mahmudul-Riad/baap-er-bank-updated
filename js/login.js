console.log('connected js file')

document.getElementById("btn-submit").addEventListener('click',function(){

    const emailField= document.getElementById('mail');
    const email= emailField.value;

    const passwordField= document.getElementById('pass');
    const password= passwordField.value;

    // Verify Email & password

    if(email=='riad@gmail.com'&& password=="12345"){

        console.log("login successful!!");
        window.location.href='bank.html';


    }
    else{
        console.log("password not matched!!")
    }
    
    
})