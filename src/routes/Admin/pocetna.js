import { Outlet, Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import logo from '../../logo.jpg';

export default function Main()
{
  const navigate = useNavigate(); 
  function AreYouSure()
  {
    if(window.confirm("Odjava?"))
    {
      navigate('/Prijava/adminLogin');
    }
  }
//<h3>Studenski Dom</h3>
    return (
        <>
        <div id='main'>
        <nav className='navigacija'>
        <img id="logo"  src={logo}/ >
        <Link className='btn' to="/pocetna">Pocetna</Link>
        <Link className='btn' to="/sobe">Sobe</Link>
        <Link className='btn' to="/studenti">Studenti</Link>
        <div id="OdjavaBtn"><button className="btn btn-danger" onClick={() => AreYouSure()}>Odjava</button></div>
        </nav>
        </div>
        <Outlet />
        </>
      );

}