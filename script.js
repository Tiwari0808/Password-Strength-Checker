let pass = document.querySelector('#pass');
let btn = document.querySelector('#btn');
let msg = document.querySelector('#msg');

pass.addEventListener('input',()=>{
    console.log('hello');
    let password = pass.value;
    if (pass.value.length > 0) {
        msg.style.display = 'block';
        msg.innerHTML = "Atleast four character required"
        msg.style.color = 'red';
    }
     if(pass.value.length >= 4){
        msg.innerHTML = "Weak Password.";
        msg.style.color = 'red';
    }
    if(pass.value.length >= 6){
        msg.innerHTML = "Moderate Password.";
        msg.style.color = 'orange';
    }
    if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z0-9]/)){
        msg.innerHTML = "Strong Password.";
        msg.style.color = 'green';   
    }
})

reset = ()=>{
    pass.value = ''
    msg.style.display = 'none';
}