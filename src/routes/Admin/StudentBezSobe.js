import axios from "axios";
import {useState, useEffect} from 'react';
import addbnt from '../../img/add.png';

export default function StudentBezSobe()
{
    const [studenti, setData] = useState(null);
    //const [studentiPoSobi,setSPS] = useState(null);
    const readUrl = "http://localhost/studenskidom/php/read.php";

    useEffect(() => {UcitajPodatke();}, []);

    async function UcitajPodatke()
        {
                axios({
                    method: "post",
                    url: readUrl,
                    data: 
                    {
                        "json":"StudentiBezSobe"
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

        if(!studenti) return null;
      
      
        let i = 1;
        const list = studenti.map((student) => (
            <tr key={student.Id.toString()} className="text-center">
                <td>{i++}</td>
                <td>{student.Ime}</td>
                <td>{student.Prezime}</td>
                <td>{student.OIB}</td>
                <td><img id="BtnHover" src={addbnt}/></td>
            </tr>
                )) 
            
        return(
        <table className="container table mt-5">
            <thead>
                <tr className="text-center">
                    <th>Rbr</th>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>OIB</th>
                    <th>Dodaj studenta u sobu</th>
                </tr>
            </thead>
            <tbody>
            {list}
            </tbody>
        </table>);
        






}