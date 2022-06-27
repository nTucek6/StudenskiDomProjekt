import { Outlet, Link,useParams } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import logo from '../../logo.jpg';

export default function MainS()
{
  const { id } = useParams()
  const navigate = useNavigate(); 
  function AreYouSure()
  {
    if(window.confirm("Odjava?"))
    {
      navigate('/Prijava/studentLogin');
    }
  }
    return (
        <>
        <div id='main'>
        <nav className='navigacija'>
        <img id="logo"  src={logo}/ >
        <Link className='btn' to={`/status/${id}`}>Status sobe</Link>
        <div id="OdjavaBtn"><button className="btn btn-danger" onClick={() => AreYouSure()}>Odjava</button></div>
        </nav>
        </div>
        <Outlet />
        </>
      );
}