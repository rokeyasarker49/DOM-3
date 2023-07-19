document.getElementById('login-btn').addEventListener('click', function){
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const emailValue = email.value;
        const passwordValue = password.value;

        // condition

        if(emailValue == 'rokeya@gmail.com' && passwordValue == 'rokeya'){
                console.log("You are the real user");
                window.location.href('dashboard.html');
        }
        else{
                console.log('You are false')
                alert('You are a hacker')
        }

}

function myFunction() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }