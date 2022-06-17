import React,{ useState } from "react"
import { useParams,useNavigate  } from "react-router-dom";
import axios from "axios";
import eye from '../../img/eye.png';
import invisible from '../../img/invisible.png';

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
    //event.preventDefault();
    const readUrl = "http://localhost/studenskidom/php/login.php";
    let inputData;

    if(inputs.login === "student" || inputs.login === "admin")
    {
      event.preventDefault();
     inputData = 
     {
      "Email":inputs.Email,
      "Lozinka": inputs.Lozinka,
      "login": inputs.login
     }

    }
    else if (inputs.login==="register")
    {
      event.preventDefault();
      inputData = 
      {
       "Email":inputs.Email,
       "Lozinka": inputs.Lozinka,
       "Oib": inputs.oib,
       "login": inputs.login
      }
    }

    axios({
      method: "post",
      url: readUrl,
      data: inputData 
      ,
      headers: { "Content-Type": "multipart/form-data"},
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
        else if(response.data === "Registration successfull" && inputs.login === "register")
        {
          navigate('/Prijava/studentLogin');
        }
        else if(response.data === "Registration failed" && inputs.login === "register")
        {
          alert("Pogreška pri registraciji!");
        }
        else if(response.data === "Student je vec registriran" && inputs.login === "register")
        {
          alert("Student je već registriran!");
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
        <div className="container mt-5">
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
</div>

)
}

if(type === "adminLogin")
{
  inputs.login = "admin";
    return(
      <div className="container mt-5">
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

//form-group d-flex justify-content-center

  return ( 
    <div className="container mt-5 d-flex justify-content-center">
    <form className="row row-cols-1" onSubmit={handleSubmit}>
    <div className="col"><h1 className="text-center">Registracija studenta</h1></div>
        <div className="col ">
      <label className="centerRegister"><p>Unesite email adresu:</p>
        <input type="email" 
        name="Email"
        value={inputs.Email || ""} 
        onChange={handleChange} required/>
      </label>
      </div>
      <div className="col ">
      <label className="centerRegister">
        <p>Unesite lozinku:</p>
        <input type={passwordType}
        name="Lozinka" 
        value={inputs.Lozinka || ""} 
        onChange={handleChange} required/>
          <div className="input-group-btn d-inline">
          <button type="button" className="btn btn-outline-primary" onClick={togglePassword}>
          {passwordType==="password"? <img alt="eye" src={eye} /> :<img alt="eye/" src={invisible} />}
          </button>
          </div>
        </label>     
       </div>

      <div className="col mt-3">
      <label className="centerRegister"><p>Unesite svoj OIB:</p>
        <input type="text" 
        name="oib"
        value={inputs.oib || ""} 
        onChange={handleChange} required/>
      </label>
      </div>
   
      <div className="col text-center mt-2">
        <button type="submit" className="btn btn-success" >Register</button>
      </div>
    </form>
  </div>);
}
}


/*


      <div className="col ">
      <label className="centerRegister"><p>Ime:</p>
        <input type="text" 
        name="Ime"
        value={inputs.Ime || ""} 
        onChange={handleChange} required/>
      </label>
      </div>

      <div className="col ">
      <label className="centerRegister"><p>Prezime:</p>
        <input type="text" 
        name="Prezime"
        value={inputs.Prezime || ""} 
        onChange={handleChange}required/>
      </label>
      </div>

      <div className="col ">
      <label className="centerRegister"><p>Spol:</p>
      <label>Muško</label><input type="radio" 
        name="Spol"
        value={"M"} 
        checked={inputs.Spol === "M"}
        onChange={handleChange}/> <br></br>
         <label>Žensko</label> <input type="radio" 
        name="Spol"
        value={"F"}
        checked={inputs.Spol === "F"} 
        onChange={handleChange}/> <br></br>
        </label>
      </div>
 


      
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