const signUp = ()=> {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(result){
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
}

const signIn = ()=> {
    let email = document.getElementById("email-sign")
    let password = document.getElementById("password-sign")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        console.log("login succesfull")
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
}