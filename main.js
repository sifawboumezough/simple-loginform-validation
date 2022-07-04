

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMessage = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


  // show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }

// Adding the submit event Listener

form.addEventListener("submit", (e) => { // adding e argument
    e.preventDefault();  

    engine(email , 1 , "Email cannot be Blank !");
    engine(username , 0 , "Username cannot be Blank !");
    engine(password , 2 , "Password cannot be Blank !");


    
    
    
    
});

let engine = (id , i, message) => {
    if(id.value.trim() === '') {
        errorMessage[i].innerHTML = message;
        failureIcon[i].style.opacity ="1";
        successIcon[i].style.opacity ="0";
    }
    else {
        errorMessage[i].innerHTML = '';
        successIcon[i].style.opacity ="1";
        failureIcon[i].style.opacity ="0";
        
    }
    
}



// false


// let isvalid = (id, j, msg) => {
    //     if(id.value.length <= 8) {
        //         errorMessage[j].push(msg);
        //     }
        // }
        
