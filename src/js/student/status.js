import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";
import ShowModal from "../components/Modal";

export default function StudentInfo()
{
    const [RoomInfo, setData] = useState(null);
    const { id } = useParams();
    const [modalKomentar, setModalKomentar] = useState(false);
    const [modalUnosKomentar, setModalUnosKomentar] = useState(false);
    const [KomentarRoom,setKomentarRoom] = useState();
    const [modalRacunStudent, setmodalRacunStudent] = useState(false);
    const [studentRacun, setStudentRacun] = useState();
    const readUrl = "http://localhost/studenskidom/php/read.php";

    useEffect(() => {UcitajPodatke();}, []);

    async function UcitajPodatke()
    {
    axios({
        method: "post",
        url: "http://localhost/studenskidom/php/read.php",
        data: 
        {
            "Id":id,
            "json":"StudentInfoRoom"
        },
        headers: { "Content-Type": "multipart/form-data" },
         })
        .then(function (response) {
            setData(response.data);
          //console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });   
    }

    if(!RoomInfo) return null;

    function UpisanUDom(Upisan)
    {     
      if(Upisan === "0")
      {
        return(<h4>Student još nije upisan u studenski dom.</h4>)
      }
      else if(Upisan === "1")
      {
        return(<h4>Info: Studentu još nije određena soba!</h4>)
      }
    }

    if(RoomInfo.Soba.BrojSobe== "null")
    {
      return (
        <div className="container mt-5">
        <div className="styling text-center">
       <h3>Student: {RoomInfo.Studenti.Ime + " " +RoomInfo.Studenti.Prezime}</h3>
        {UpisanUDom(RoomInfo.Studenti.Upisan)}
       </div>
      </div>
      )
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
function openRacunStudentModal() {
  setmodalRacunStudent(true);
}
function closeRacunStudentModal() {
  setmodalRacunStudent(false);
}

function ModalKomentarData()
{
    if(!KomentarRoom)
    {
        return (<><h3>Soba ne sadrži ni jedan komentar</h3>  <button className="btn btn-info" onClick={()=>openUnosKomentarModal()}>Unesite novi komentar</button></>);
    }

    const list = KomentarRoom.map((k)=>
    (
     <li key={k.Id}><span className="komentarStyle">{k.Vlasnik}</span>: {k.Komentar}</li>
    ));

    return(
        <div>
        <ul>
        {list}
        </ul>
        <button className="btn btn-info" onClick={()=>openUnosKomentarModal()}>Unesite novi komentar</button>
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

function ModalRacunStudent()
{
  if(!studentRacun) return(<h3>Student nema račun!</h3>)

  const racuni = studentRacun.map((racun)=>(
    <h4 key={racun.Id}>{racun.DatumUplate} : {racun.Iznos} kn {racun.Placeno == 0 ? <button className="btn btn-danger" disabled>Račun nije proknjižen!</button>: <button className="btn btn-success" disabled>Plačeno</button>}</h4>

  ));
  return  (<div>{racuni}</div>);
}

const handleSubmit = (event) => {
  event.preventDefault();
  axios({
    method: "post",
    url: readUrl,
    data: {
      "json":"AddRoomKomentar",
      "SobaId":RoomInfo.Soba.Id,
      "Vlasnik":"Student",
      "VlasnikId":RoomInfo.Studenti.Id,
      "Komentar":event.target.Komentar.value
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

function CloseAllBtn()
{
  return(<button className="btn btn-outline-danger mt-3 p-2 marginButtons" onClick={CloseAllModal}>Close all</button>);
}
function CloseAllModal()
{
  closeKomentarModal();
  closeUnosKomentarModal();
}
    return(
      <>
       <div className="container mt-5">
         <div className="styling text-center">
        <h3>Student: {RoomInfo.Studenti.Ime + " " +RoomInfo.Studenti.Prezime}</h3>
        <h3>Soba: {RoomInfo.Soba.BrojSobe}</h3>
        <h3>Kat: {VratiKat(RoomInfo.Soba.Kat)}</h3>
        <h3>Broj studenta po sobi: {RoomInfo.Soba.BrojMjesta}</h3>
        <h3>Tip: {VrstaSobe(RoomInfo.Soba.Tip)}</h3>
        <button className="btn btn-primary mt-3 marginButtons" onClick={()=>GetRoomKomentar(RoomInfo.Soba.Id)}>Komentari</button>
        <button className="btn btn-primary mt-3 marginButtons" onClick={()=>GetStudentRacun(RoomInfo.Studenti.Id)}>Racuni</button>
        </div>
       </div>
       {ShowModal(modalKomentar,closeKomentarModal,customStyles,ModalKomentarData,"Komentari",null)}
       {ShowModal(modalUnosKomentar,closeUnosKomentarModal,customStyles,ModalUnosKomentar,"Unesite novi komentar",CloseAllBtn)}
       {ShowModal(modalRacunStudent,closeRacunStudentModal,customStyles,ModalRacunStudent,"Računi:",null)}
</>
    );
}