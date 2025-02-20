import prizemlje from "../../img/prizemlje.png"
import prvikat from "../../img/1kat.png"
import {useState} from 'react';
import axios from "axios";
import ShowModal from "../../js/components/Modal";


export default function PocetnaAdmin()
{
  const[blueprint,setBlueprint] = useState("prizemlje");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalKomentar, setModalKomentar] = useState(false);
  const [modalUnosKomentar, setModalUnosKomentar] = useState(false);
  const [modalOdabirStudent, setModalOdabirStudent] = useState(false);
  const [modalRacunStudent, setmodalRacunStudent] = useState(false);
 // const [inputs,setInputs] = useState({});
 const [currentPage,setCurrentPage] = useState(1);
 const [postPerPage] = useState(5);
  
  
  const [RoomInfo,setRoomInfo] = useState();
  const [KomentarRoom,setKomentarRoom] = useState();
  const [studentOdabir,setStudentOdabir] = useState();
  const [studentRacun, setStudentRacun] = useState();
  const readUrl = "http://localhost/studenskidom/php/read.php";
 function Prizemlje()
 {
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
        <area target="" alt="118" title="118" className="areahover" coords="1052,109,869,197" shape="rect" onClick={()=>GetRoomInfo(118)} />
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
            <button className="btn btn-success marginButtons" onClick={()=>PromjeniKat("prizemlje")}>Prizemlje</button>
            <button className="btn btn-danger marginButtons" onClick={()=>PromjeniKat("prvikat")}>Prvi kat</button>
            </>
        )
    }
    else if(blueprint === "prvikat")
    {
        return(
            <>
            <button className="btn btn-danger marginButtons" onClick={()=>PromjeniKat("prizemlje")}>Prizemlje</button>
            <button className="btn btn-success marginButtons" onClick={()=>PromjeniKat("prvikat")}>Prvi kat</button>
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
  function openKomentarModal()
  {
    setModalKomentar(true);
  }
  function closeKomentarModal()
  {
    setModalKomentar(false);
  }
  function openUnosKomentarModal() {
    setModalUnosKomentar(true);
  }
  function closeUnosKomentarModal() {
    setModalUnosKomentar(false);
  }
  function openOdabirStudentModal() {
    setModalOdabirStudent(true);
  }
  function closeOdabirStudentModal() {
    setModalOdabirStudent(false);
  }

  function openRacunStudentModal() {
    setmodalRacunStudent(true);
  }
  function closeRacunStudentModal() {
    setmodalRacunStudent(false);
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
         //   console.log(response.data);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });   
    
//
openModal();
}

function GetRoomKomentar(SobaId)
{
    axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "json":"GetRoomKomentar",
            "SobaId":SobaId
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
            setKomentarRoom(response.data);
           // console.log(response.data);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });     
openKomentarModal();
}

const handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date();
    let fulldatum =  date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+ " " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    axios({
      method: "post",
      url: readUrl,
      data: {
        "json":"AddRoomKomentar",
        "SobaId":RoomInfo.Soba.Id,
        "Vlasnik":"Voditelj",
        "VlasnikId":1,
        "Komentar":event.target.Komentar.value,
        "VrijemeUnosa":fulldatum
      } 
      ,
      headers: { "Content-Type": "multipart/form-data"},
    })
      .then(function (response) {
        if(response.data === "Operation successful")
        {
            //console.log(response);
            closeUnosKomentarModal();
            GetRoomKomentar(RoomInfo.Soba.Id);
            ModalKomentarData();
            //closeKomentarModal();
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });  
    }

function VratiKat(Kat)
{
    if(Kat === "0")
    {
        return ("prizemlje")
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


function GetStudentRacuni(SobaId)
{
  axios({
    method: "post",
    url: readUrl,
    data: 
    {
        "json":"GetStudentForBill",
        "SobaId":SobaId
     
    },
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
        setStudentOdabir(response.data);
       // console.log(response.data);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });   

    openOdabirStudentModal();
}

function GetStudentRacun(StudentId)
{
  axios({
    method: "post",
    url: readUrl,
    data: 
    {
        "json":"GetStudentRacun",
        "StudentId":StudentId
     
    },
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
        setStudentRacun(response.data);
       // console.log(response.data);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });   

    openRacunStudentModal();

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
        <button className="btn mt-3" onClick={()=>PopupRoom(RoomInfo.Soba.Tip)}>3D prikaz sobe</button>
        {RoomInfo.Studenti!== "" ?<button className="btn mt-3" onClick={()=>GetRoomKomentar(RoomInfo.Soba.Id)} >Komentari</button> : <button className="btn mt-3" disabled>Komentari</button>}
        {RacunButton(RoomInfo.Studenti,RoomInfo.Soba.Id)}
        </>
    )
}

function RacunButton(Studenti,Id)
{
  if(Studenti === "")
  {
     return (<button className="btn mt-3" disabled>Računi studenta</button>);
  }
  else
  {
    return (<button className="btn mt-3" onClick={()=>GetStudentRacuni(Id)}>Računi studenta</button>)
  }

}


function ModalKomentarData() //Ispis komentara u modal komentar ako postoje
{
    if(!KomentarRoom)
    {
        return (<><h3>Soba ne sadrži ni jedan komentar</h3>  <button className="btn btn-info" onClick={()=>openUnosKomentarModal()}>Unesite novi komentar</button></>);
    }

    //////////////////////////////////////////

    const Posts =({posts}) => 
    {
      const list = posts.map((k) => (
        <tr key={k.Id}><td><li><span className="komentarStyle">{k.Vlasnik}</span>: {k.Komentar}</li></td><td>Vrijeme unosa: {k.VrijemeUnosa}</td></tr>
              ));
              return list;
    }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = KomentarRoom.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const Pagination = ({postPerPage,totalPosts,paginate}) => //funkcija radi broj stranica koliko je potrebno za ispis svih podataka
    {
      const pageNumbers = [];
      for(let i=1; i<=Math.ceil(totalPosts/postPerPage);i++)
      {
        pageNumbers.push(i);
      }
      return(
          <tr className="pagination">
        {pageNumbers.map(number =>(
          <td key={number} className="page-item">
            <button onClick={()=>paginate(number)} href='' className="page-link">{number}</button>
          </td>
        ))}
          </tr>
      )
    }


////////////////////////////////////////////////////
/*
    const list = KomentarRoom.map((k)=>
    (
     <li key={k.Id}><span className="komentarStyle">{k.Vlasnik}</span>: {k.Komentar}</li>
    )); */


/*
    return(
        <div>
        <ul>
        {list}
        </ul>
        <button className="btn btn-info" onClick={()=>openUnosKomentarModal()}>Unesite novi komentar</button>
        </div>
    ); */
   return(
    <div className="mt-4">
    <table className="table table-sm">
    <tbody >
    <Posts  posts={currentPost} />
    </tbody>
    <tfoot>
    <Pagination postPerPage={postPerPage} totalPosts={KomentarRoom.length} paginate={paginate} />
    </tfoot>
    </table>
    <button className="btn btn-info mt-3" onClick={()=>openUnosKomentarModal()}>Unesite novi komentar</button>
    </div>
   );   

}

function ModalUnosKomentar()
{
    //console.log(inputs.Komentar);
    return(<form onSubmit={handleSubmit}>
        <textarea className="d-flex p-2 textareaClass"
        name="Komentar"
        //value={inputs.Komentar || ""}
      //  onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn-success mt-2">Submit</button>
         </form>)
}

function ModalOdabirStudenta()
{
    if(!studentOdabir) return(null)

    const list = studentOdabir.map((s)=>
    (
      <button key={s.Id} className="btn btn-outline-info" onClick={()=>GetStudentRacun(s.Id)}>{s.Ime} {s.Prezime}</button>
    ));

    return (<div className="text-center">{list}</div>);
    
}

function ModalRacunStudent()
{
  if(!studentRacun) return(<h3>Student nema račun!</h3>)

  const racuni = studentRacun.map((racun)=>(
    <h4 key={racun.Id}>{racun.DatumUplate} : {racun.Iznos} kn {racun.Placeno === "0" ? <button className="btn btn-danger" onClick={()=>PlaceniRacun(racun.Id,racun.StudentId)}>Promjeni stanje</button>: <button className="btn btn-success" disabled>Plačeno</button>}</h4>

  ));
  return  (<div>{racuni}</div>);
}

function PlaceniRacun(RacunId,StudentId)
{
  if(window.confirm("Potvrdite radnju:"))
  {
    axios({
      method: "post",
      url: readUrl,
      data: 
      {
          "json":"PlaceniRacunStudent",
          "RacunId":RacunId
       
      },
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //console.log(response.data);
        GetStudentRacun(StudentId);
        ModalRacunStudent();
        
      })
      .catch(function (response) {
        //handle error
        console.log(response.data);
        alert("Error!");
      });
      //ModalRacun();
     
           
  }
 
}


function CloseAllModal()
{
  closeModal();
  closeKomentarModal();
  closeOdabirStudentModal();
  closeRacunStudentModal();
  closeUnosKomentarModal();
}

function CloseAllBtn()
{
 return (<button className="btn btn-outline-danger mt-3 p-2 marginButtons" onClick={CloseAllModal}>Close all</button>);
}
     return(
        <>
        <div className="text-center mt-3 ">
        <ButtonColor />
        </div>
        <div className="mt-3 mb-5 text-center areaMap">
        <Katovi />
       </div>
           {ShowModal(modalIsOpen,closeModal,customStyles,ModalData,"Informacije o sobi",null)}
           {ShowModal(modalKomentar,closeKomentarModal,customStyles,ModalKomentarData,"Komentari",CloseAllBtn)}
           {ShowModal(modalUnosKomentar,closeUnosKomentarModal,customStyles,ModalUnosKomentar,"Unesite novi komentar",CloseAllBtn)}
           {ShowModal(modalOdabirStudent,closeOdabirStudentModal,customStyles,ModalOdabirStudenta,"Odaberite studenta:",CloseAllBtn)}
           {ShowModal(modalRacunStudent,closeRacunStudentModal,customStyles,ModalRacunStudent,"Računi:",CloseAllBtn)}
        </>
    )
}

