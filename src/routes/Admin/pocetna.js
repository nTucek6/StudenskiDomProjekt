import prizemlje from "../../img/prizemlje.png"
import prvikat from "../../img/1kat.png"
import {useState,useEffect} from 'react';
import Modal from 'react-modal';
import axios from "axios";

export default function PocetnaAdmin()
{
  const[blueprint,setBlueprint] = useState("prizemlje");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [RoomInfo,setRoomInfo] = useState();
  const readUrl = "http://localhost/studenskidom/php/read.php";
 function Prizemlje()
 {

    // href="http://360.vuv.hr/studom360/vanjski-prostor/index.html"
    return(
        <>
        <img src={prizemlje} id="pocetnaAdmin" useMap="#prizemlje" className="border border-primary" alt=""/>
        <map name="prizemlje">
        <area target="popup" alt="prilaz" title="prilaz" className="areahover" coords="1,2,604,655" shape="rect" onClick={()=> window.open('http://360.vuv.hr/studom360/vanjski-prostor/index.html','popup','width=700,height=700,scrollbars=no,resizable=no')} />
        <area target="popup" alt="ulaz" className="areahover" title="ulaz" coords="616,590,860,590,860,848,724,848,724,774,616,774" shape="poly" onClick={()=> window.open('http://360.vuv.hr/studom360/prizemlje-ulaz-predsoblje/index.html','popup','width=700,height=700,scrollbars=no,resizable=no')} />
        <area target="popup" alt="hodnik" className="areahover" title="hodnik" coords="808,8,862,582" shape="react" onClick={()=> window.open('http://360.vuv.hr/studom360/hodnik-prizemlje-desno/index.html','popup','width=700,height=700,scrollbars=no,resizable=no')} />
        <area target="" alt="100" title="100" className="areahover"  coords="609,858,714,1012" shape="rect" onClick={()=>GetRoomInfo(100)}/>
        <area target="" alt="102" title="102" className="areahover" coords="487,855,596,1013" shape="rect" onClick={()=>GetRoomInfo(102)}/>
        <area target="" alt="104" title="104" className="areahover" coords="369,856,478,1013" shape="rect" onClick={()=>GetRoomInfo(104)}/>
        <area target="" alt="106" title="106" className="areahover" coords="253,858,360,1010" shape="rect" onClick={()=>GetRoomInfo(106)}/>
        <area target="" alt="107" title="107" className="areahover" coords="132,858,242,1011" shape="rect" onClick={()=>GetRoomInfo(107)} />
        <area target="" alt="108" title="108" className="areahover" coords="15,858,124,1010" shape="rect" onClick={()=>GetRoomInfo(108)} />
        <area target="" alt="101" title="101" className="areahover" coords="257,673,365,787" shape="rect" onClick={()=>GetRoomInfo(101)} />
        <area target="" alt="103" title="103" className="areahover" coords="136,674,248,787" shape="rect" onClick={()=>GetRoomInfo(103)} />
        <area target="" alt="105" title="105" className="areahover" coords="15,674,128,786" shape="rect"  onClick={()=>GetRoomInfo(105)} />
        <area target="" alt="109" title="109" className="areahover" coords="618,490,800,579" shape="rect" onClick={()=>GetRoomInfo(109)} />
        <area target="" alt="110" title="110" className="areahover" coords="1051,492,869,578" shape="rect"onClick={()=>GetRoomInfo(110)} />
        <area target="" alt="111" title="111" className="areahover" coords="618,400,803,488" shape="rect" onClick={()=>GetRoomInfo(111)} />
        <area target="" alt="112" title="112" className="areahover" coords="871,397,1051,483" shape="rect"onClick={()=>GetRoomInfo(112)} />
        <area target="" alt="113" title="113" className="areahover" coords="617,300,799,387" shape="rect" onClick={()=>GetRoomInfo(113)}/>
        <area target="" alt="114" title="114" className="areahover" coords="870,301,1051,386" shape="rect" onClick={()=>GetRoomInfo(114)} />
        <area target="" alt="115" title="115" className="areahover" coords="618,207,800,294" shape="rect"  onClick={()=>GetRoomInfo(115)}/>
        <area target="" alt="116" title="116" className="areahover" coords="868,205,1051,291" shape="rect" onClick={()=>GetRoomInfo(116)} />
        <area target="" alt="117" title="117" className="areahover" coords="618,110,799,195" shape="rect"  onClick={()=>GetRoomInfo(117)} />
        <area target="" alt="118" title="118" className="areahover" coords="1052,109,869,197" shape="rect" onClick={()=>GetRoomInfo(118)}  />
        <area target="" alt="119" title="119" className="areahover" coords="618,17,799,104" shape="rect"   onClick={()=>GetRoomInfo(119)} />
        <area target="" alt="120" title="120" className="areahover" coords="870,11,1052,100" shape="rect"  onClick={()=>GetRoomInfo(120)}/>
        </map>
        </>
    )
 }

 function PrviKat()
 {
    return(
    <>
    <img src={prvikat} id="pocetnaAdmin" useMap="#prvikat" className="border border-primary" alt=""/>
    <map name="prvikat">
    <area target="popup" alt="predsoblje" className="areahover" title="predsoblje" coords="722,590,862,848" shape="react" onClick={()=> window.open('http://360.vuv.hr/studom360/predsoblje-1kat/index.html','popup','width=700,height=700,scrollbars=no,resizable=no')} />
    <area target="popup" alt="hodnik" className="areahover" title="hodnik" coords="808,8,862,582" shape="react" onClick={()=> window.open('http://360.vuv.hr/studom360/hodnik-1kat-D/index.html','popup','width=700,height=700,scrollbars=no,resizable=no')} />
    <area target="popup" alt="hodnik" className="areahover" title="hodnik" coords="8,795,616,795,616,783,715,783,715,847,8,847" shape="poly" onClick={()=> window.open('http://360.vuv.hr/studom360/hodnik-1kat-L/index.html','popup','width=700,height=700,scrollbars=no,resizable=no')} />
    <area target="" alt="200" title="200" className="areahover"  coords="606,858,715,1009" shape="rect" onClick={()=>GetRoomInfo(200)}/>
    <area target="" alt="201" title="201" className="areahover"  coords="485,672,598,786" shape="rect"onClick={()=>GetRoomInfo(201)}/>
    <area target="" alt="202" title="202" className="areahover"  coords="489,855,595,1012" shape="rect"onClick={()=>GetRoomInfo(202)}/>
    <area target="" alt="203" title="203" className="areahover"  coords="369,672,477,786" shape="rect"onClick={()=>GetRoomInfo(203)}/>
    <area target="" alt="204" title="204" className="areahover"  coords="369,858,479,1009" shape="rect"onClick={()=>GetRoomInfo(204)}/>
    <area target="" alt="205" title="205" className="areahover" coords="250,674,358,785" shape="rect"onClick={()=>GetRoomInfo(205)}/>
    <area target="" alt="206" title="206" className="areahover" coords="248,859,359,1012" shape="rect"onClick={()=>GetRoomInfo(206)}/>
    <area target="" alt="207" title="207" className="areahover" coords="133,673,240,785" shape="rect"onClick={()=>GetRoomInfo(207)}/>
    <area target="" alt="208" title="208" className="areahover" coords="132,859,241,1011" shape="rect"onClick={()=>GetRoomInfo(209)}/>
    <area target="" alt="209" title="209" className="areahover" coords="13,671,122,785" shape="rect"onClick={()=>GetRoomInfo(209)}/>
    <area target="" alt="210" title="210" className="areahover" coords="17,859,124,1012" shape="rect" onClick={()=>GetRoomInfo(210)}/>
    <area target="" alt="211" title="211" className="areahover" coords="618,494,802,578" shape="rect"/>
    <area target="" alt="212" title="212" className="areahover" coords="1052,492,872,578" shape="rect"/>
    <area target="" alt="213" title="213" className="areahover" coords="617,400,802,487" shape="rect"/>
    <area target="" alt="214" title="214" className="areahover" coords="871,396,1052,484" shape="rect"/>
    <area target="" alt="215" title="215" className="areahover" coords="619,302,799,388" shape="rect"/>
    <area target="" alt="216" title="216" className="areahover" coords="1052,301,870,388" shape="rect"/>
    <area target="" alt="217" title="217" className="areahover" coords="617,206,798,290" shape="rect"/>
    <area target="" alt="218" title="218" className="areahover" coords="872,206,1053,291" shape="rect"/>
    <area target="" alt="219" title="219" className="areahover" coords="618,110,799,195" shape="rect"/>
    <area target="" alt="220" title="220" className="areahover" coords="1053,110,871,196" shape="rect"/>
    <area target="" alt="221" title="221" className="areahover" coords="618,15,799,101" shape="rect"/>
    <area target="" alt="222" title="222" className="areahover" coords="869,15,1051,100" shape="rect"/>
    </map>
        </>
    )
 }

function Katovi() //Prikaz slike ovisno o katu
{
    if(blueprint === "prizemlje")
    {
        return Prizemlje();
    }
    else if(blueprint === "prvikat")
    {
        return PrviKat();
    }
}


 function PromjeniKat(Kat) //Promjena slike kata
 {
    setBlueprint(Kat);
 }

 function ButtonColor() //Mijenjanje boja buttonu ovisno koji je gumb stisnut
 {
    if(blueprint === "prizemlje")
    {
        return(
            <>
            <button className="btn btn-success" onClick={()=>PromjeniKat("prizemlje")}>Prizemlje</button>
            <button className="btn btn-info" onClick={()=>PromjeniKat("prvikat")}>Prvi kat</button>
            </>
        )
    }
    else if(blueprint === "prvikat")
    {
        return(
            <>
            <button className="btn btn-info" onClick={()=>PromjeniKat("prizemlje")}>Prizemlje</button>
            <button className="btn btn-success" onClick={()=>PromjeniKat("prvikat")}>Prvi kat</button>
            </>
        )
    }
 }


 //modal
// transform: 'translate(-50%, -50%)',
 const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"50%",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

function GetRoomInfo(BrojSobe)
{
    axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "json":"GetRoomInfo",
            "BrojSobe":BrojSobe
         
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
            setRoomInfo(response.data);
            console.log(response.data);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });   
    
//
openModal();
}


function VratiKat(Kat)
{
    if(Kat === "0")
    {
        return (<span>prizemlje</span>)
    }
    else if(Kat === "1")
    {
        return ("prvi kat");
    }
}

function VrstaSobe(tip)
{
    if(tip === "B" || tip === "C")
    {
        return ("dvokrevetna soba");
    }
    else
    {
        return ("jednokrevetna soba");
    }

}

function IspisStudenta(Studenti)
{
    if(Studenti === "")
    {
        return(<h3>Soba trenutno ne sadrži studente</h3>)
    }
    else
    {
        return(<h3>Studenti: {Studenti}</h3>)
    }

}

function PopupRoom(tip)
{
    if(tip === "C")
    {
        window.open('http://360.vuv.hr/studom360/2krevetna-zajednicka-soba/index.html','popup','width=700,height=700,scrollbars=no,resizable=no');
    }
    else if(tip === "B")
    {
      
        window.open('http://360.vuv.hr/studom360/2krevetna-zasebna-soba/index.html','popup','width=700,height=700,scrollbars=no,resizable=no');
    }
    else
    {
        window.open('http://360.vuv.hr/studom360/1krevetna-s-kupaonicom/index.html','popup','width=700,height=700,scrollbars=no,resizable=no') ;
    }

}


function ModalData()
{
    if(!RoomInfo)
    {
        return null
    }
    return(
        <>
        <div className="RoomInfoStyle">
        <h3>Soba: {RoomInfo.Soba.BrojSobe}</h3>
        <h3>Kat: {VratiKat(RoomInfo.Soba.Kat)}</h3>
        <h3>Tip: {VrstaSobe(RoomInfo.Soba.Tip)}</h3>
        {IspisStudenta(RoomInfo.Studenti)}
        </div>
        <button className="mt-3" onClick={()=>PopupRoom(RoomInfo.Soba.Tip)}>3D prikaz sobe</button>
        </>
    )

    

}






//<button className="btn" onClick={()=>PromjeniKat("prizemlje")}>Prizemlje</button>
//<button className="btn" onClick={()=>PromjeniKat("prvikat")}>Prvi kat</button>
     return(
        <>
        <div className="text-center mt-3 ">
        <ButtonColor />
        </div>
        <div className="mt-3 mb-5 text-center areaMap">
        <Katovi />
       </div>

       <Modal
             isOpen={modalIsOpen}
             //onAfterOpen={afterOpenModal}
             onRequestClose={closeModal}
             style={customStyles}
             ariaHideApp={false}
             contentLabel="Soba info">
             <h2 className="text-center RoomInfoStyle">Informacije o sobi</h2>
             <ModalData />
             <div className="mt-2">
             <button className="btn btn-danger mt-3" onClick={closeModal}>Close</button>
             </div>
           </Modal>
        </>
    )
}

