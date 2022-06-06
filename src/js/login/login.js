import React,{ useState } from "react"
import { useParams,useNavigate  } from "react-router-dom";
import axios from "axios";

export default function Login()
{
  const { type } = useParams()
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  
  ////////////////////////////////////////////////////////////////////
  //toggle za prikaz i sakrivanje lozinke
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  ////////////////////////////////////////////////////////////////////

  const handleSubmit = (event) => {
    event.preventDefault();
    const readUrl = "http://localhost/studenskidom/php/login.php";
    let inputData;

    if(inputs.login === "student" || inputs.login === "admin")
    {
     inputData = 
     {
      "Email":inputs.Email,
      "Lozinka": inputs.Lozinka,
      "login": inputs.login
     }

    }
    else if (inputs.login==="register")
    {
      inputData = 
      {

      };

    }

    axios({
      method: "post",
      url: readUrl,
      data: inputData 
      ,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        if(response.data === "Login successfully" && (inputs.login==="admin")) //ako je prijava admina redirekcija na pocetna
        {
          navigate('/pocetna');
        }
        else if(response.data.login === "Login successfully" && (inputs.login==="student")) //ako je prijava studenta redirekcija na status
        {
         // sessionStorage.setItem()
          navigate(`/status/${response.data.Id}`);
        }
        else if(response.data === "Login failed")
        {
          alert("Pogreška pri prijavi");
        }
        else if(response.data === "Register successfully" && inputs.login === "register")
        {
          navigate('/Prijava/studentLogin')
        }

       //
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });  

    }
    const handleChange = (event) => {
      const username = event.target.name;
      const lozinka = event.target.value;
      setInputs(values => ({...values, [username]: lozinka}))
      }  

if(type === "studentLogin")
{
  inputs.login = "student";
    return(
        <div className="container">
  <h1 className="text-center">Prijava Studenta</h1>
  <form className="" onSubmit={handleSubmit}>
      <div className="form-group d-flex justify-content-center">
    <label>
      <p>Email:</p>
      <input type="email"
      name="Email"
      value={inputs.Email || ""} 
      onChange={handleChange}
      />
    </label>
    </div>
    <div className="form-group d-flex justify-content-center">
    <label>
      <p>Password:</p>
      <input type="password"
      name = "Lozinka" 
      value={inputs.Lozinka || ""} 
      onChange={handleChange} />
    </label>
    </div>
    <div className="d-flex justify-content-center mt-1">
   
      <button type="submit" className="btn">Prijava</button>
    </div>
  </form>
</div>)
}

if(type === "adminLogin")
{
  inputs.login = "admin";
    return(
      <div className="container">
      <h1 className="text-center">Prijava Admina</h1>
      <form className="" onSubmit={handleSubmit}>
          <div className="form-group d-flex justify-content-center">
        <label><p>Email:</p>
          <input type="email" 
          name="Email"
          value={inputs.Email || ""} 
          onChange={handleChange}/>
        </label>
        </div>
        <div className="form-group d-flex justify-content-center">
        <label>
          <p>Password:</p>
          <input type="password"
          name="Lozinka" 
          value={inputs.Lozinka || ""} 
          onChange={handleChange} />
        </label>
        </div>
        <div className="d-flex justify-content-center mt-1">
        
          <button type="submit" className="btn" >Prijava</button>
        </div>
      </form>
    </div>)
}


if(type === "studentRegister")
{
  inputs.login = "register";

  return ( 
    <div className="container">
    <h1 className="text-center">Registracija studenta</h1>
    <form className="" onSubmit={handleSubmit}>
        <div className="form-group d-flex justify-content-center">
      <label><p>Unesite email adresu:</p>
        <input type="email" 
        name="KorisnickoIme"
        value={inputs.KorisnickoIme || ""} 
        onChange={handleChange}/>
      </label>
      </div>
   
      <div className="form-group d-flex justify-content-center">
      <label>
        <p>Password:</p>
        <input type={passwordType}
        name="Lozinka" 
        value={inputs.Lozinka || ""} 
        onChange={handleChange} />

<div className="input-group-btn d-inline">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>

        </label> 
                
      

    


      </div>


      

      <div className="d-flex justify-content-center mt-1">
        <button type="submit" className="btn" >Register</button>
      </div>
    </form>
  </div>);
}
}



/*

 


      
      <div className="form-group d-flex justify-content-center">
      <div className="row">
            <div className="col-sm-3">
                <div className="input-group my-4 mx-4">
                    <input type={passwordType} onChange={handleChange} value={inputs.Lozinka || ""} name="password" class="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
                </div>
                
            </div>
      </div>
      </div>
      */