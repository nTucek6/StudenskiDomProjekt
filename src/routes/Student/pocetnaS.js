import { Outlet, Link,useParams } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import logo from '../../logo.jpg';

export default function MainS()
{
  const { id } = useParams()
  const navigate = useNavigate(); 
  function AreYouSure()
  {
    if(window.confirm("Are you sure?"))
    {
      navigate('/Prijava/studentLogin');
    }
  }
//<h3>Studenski Dom</h3>
    return (
        <>
        <div id='main'>
        <nav className='navigacija'>
        <img id="logo"  src={logo}/ >
        <Link className='btn' to={`/status/${id}`}>Status sobe</Link>
        <Link className='btn' to={`/racuni/${id}`}>Racuni</Link>
        <div id="OdjavaBtn"><button className="btn btn-danger" onClick={() => AreYouSure()}>Odjava</button></div>
        </nav>
        </div>
        <Outlet />
        </>
      );

}