// form validation


function validateForm(){
    if(!validname() || !validMobile() || !validemail() ||!validmessage()) {
      submitError.style.display='block';
      submitError.innerHTML='please fill correctly';
      setTimeout(function(){submitError.style.display='none';},3000);
      return false;
    }
  }
  
  
  
  
  
  
  function validname() {
  
    let name = document.myform.name.value
    let errorname = document.getElementById("error-name")
  
    if (name.length == 0) {
      errorname.innerHTML = "Name is required"
      return false
    }
    if (name.length < 3) {
      errorname.innerHTML = "MIn 3 charecters"
      return false
    }
    if (!name.match(/^[a-zA-Z]+( [a-zA-Z]+)+$/)) {
      errorname.innerHTML = 'Write full name'
      return false
    }
    errorname.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>'
    return true
  
  
  }
  
  function validemail() {
  
    let email = document.myform.email.value
    let erroremail = document.getElementById("error-email")
  
    if (email.length == 0) {
      erroremail.innerHTML = "Email reqired"
      return false
  
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      errorname.innerHTML = 'Email Invalid'
      return false;
    }
    erroremail.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>'
    return true
  
  }
  
  function validMobile() {
  
    let mobile = document.myform.mobile.value
    let errormobile = document.getElementById("error-mobile")
  
    if (mobile.length == 0) {
      errormobile.innerHTML = 'Mobile no required'
      return false
    }
    if (mobile.length !== 10) {
      errormobile.innerHTML = 'Mobile no should be 10 digits'
      return false
    }
  
    if (!mobile.match(/^[0-9]{10}$/)) {
      errormobile.innerHTML = 'mobile number must be digit'
      return false
    }
  
    errormobile.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>'
    return true
  }
  
  function validmessage() {
  
    let message = document.myform.message.value
  
    let errormessage = document.getElementById("error-message")
    let required = 30
    let left = required -message.length
    if(left > 0){
      errormessage.innerHTML =left + 'more character required'
        return false
    }
  
    errormessage.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>'
    return true
  
  }