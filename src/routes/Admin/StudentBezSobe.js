import axios from "axios";
import {useState, useEffect} from 'react';

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
            <tr key={student.Id.toString()}>
                <td>{i++}</td>
                <td>{student.Ime}</td>
                <td>{student.Prezime}</td>
                <td>{student.OIB}</td>
                
            </tr>
                )) 
            
        return(
        <table className="container table mt-5">
            <thead>
                <tr>
                    <td>Rbr</td>
                    <td>Ime</td>
                    <td>Prezime</td>
                    <td>OIB</td>
                    
                </tr>
            </thead>
            <tbody>
            {list}
            </tbody>
        </table>);
        






}