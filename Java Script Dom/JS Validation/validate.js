function validate() {
    var nameVali = document.form1.name.value;
    var dobVali = document.form1.dob.value;
    var emailVali = document.form1.email.value;
    var phoneVali = document.form1.phone.value;
    var pwd1Vali = document.form1.pwd1.value;
    var pwd2Vali = document.form1.pwd2.value;
    if (nameVali == "" || dobVali == "" || emailVali == "" || pwd1Vali == "" || pwd2Vali == "") {
        if(nameVali==""){alert("Enter Name Must");}
        else if(dobVali==""){alert("Enter Date Of Birth Must");}
        else if(emailVali==""){alert("Enter Email Must");}else{
            confirm("enter Values Must");
        }
        
    }
    if(isNaN(phoneVali)){
        alert("Your Contact Numer values Must");
    }else{
        return true;
    }
    if (pwd1Vali.length < 6 || pwd2Vali.length < 6){
        document.getElementsById('pwd').innerHTML="Password Must Enter 6 character";
       
    }
    if (pwd1Vali != pwd2Vali) {
        alert("Please Check Your Password Again");
       return false;
    }else{return true;}
    
    
}
