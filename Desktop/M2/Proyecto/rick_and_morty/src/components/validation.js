const validation = (userData,errors,setErrors) => {
    if(!userData.username) setErrors({...errors,username:"Completa este campo"}); 
    else if(userData.username.length > 35) setErrors({...errors, username: "No puede superar los 35 caracteres"});
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
    ){ setErrors({...errors, username: "Email invalido"});

    } else {
        setErrors({...errors, username: ""});
    }

   if (userData.password.lenght <6 || userData.password.length > 10) {
    setErrors({...errors, password: "Debe tener entre 6 y 10 caracteres"});
   } else if(!/\d/.test(userData.password)) {
    setErrors({...errors, password: "Debe contener al menos un número"});

   } else {
    setErrors({...errors, password: ""});
   }
  

};

export default validation;