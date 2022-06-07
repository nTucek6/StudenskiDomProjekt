import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";

export default function StudentInfo()
{
    const [RoomInfo, setData] = useState(null);
    const { id } = useParams();

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

    
    if(RoomInfo.Soba.BrojSobe== "null")
    {
      return (
        <div className="container mt-5">
        <div className="styling text-center">
       <h3>Student: {RoomInfo.Studenti.Ime + " " +RoomInfo.Studenti.Prezime}</h3>
        <h4>Info: Studentu još nije određena soba!</h4>
       </div>
      </div>
      )
    } 

    return(
       <div className="container mt-5">
         <div className="styling text-center">
        <h3>Student: {RoomInfo.Studenti.Ime + " " +RoomInfo.Studenti.Prezime}</h3>
        <h3>Soba: {RoomInfo.Soba.BrojSobe}</h3>
        <h3>Kat: {RoomInfo.Soba.Kat}</h3>
        <h3>Broj studenta po sobi: {RoomInfo.Soba.BrojMjesta}</h3>
        <h3>Tip: {RoomInfo.Soba.Tip}</h3>
        </div>
       </div>

    );


}