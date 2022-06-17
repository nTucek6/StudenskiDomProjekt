import axios from "axios";
import {useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
//import { Outlet, Link } from "react-router-dom";
//import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import paginationFactory from 'react-bootstrap-table2-paginator';
import Modal from 'react-modal';
import React from 'react';




export default function ListaCekanja()
{
    const [studenti, setData] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

    const navigate = useNavigate();

    const readUrl = "http://localhost/studenskidom/php/read.php";

    useEffect(()=>{UcitajPodatke();},[]);
    
    async function UcitajPodatke()
        {
                axios({
                    method: "post",
                    url: readUrl,
                    data: 
                    {
                        "json":"listacekanja"
                    },
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                    .then(function (response) {
                        setData(response.data);
                        console.log(response);
                    })
                    .catch(function (response) {
                      //handle error
                      console.log(response);
                    });   
        }

        

        if(!studenti) {return(<h3 className="text-center mt-3">Lista za čekanje je prazna.</h3>)}

        const Posts =({posts,i}) => 
        {
          const list = posts.map((student) => (
              <tr key={student.Id.toString()} className="text-center">
                  <td>{i++}</td>
                  <td>{student.Ime}</td>
                  <td>{student.Prezime}</td>
                  <td>{student.OIB}</td>
                  <td>{student.BrojBodova}</td>
              </tr>
                  ));
                  return list;
        }

        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        const currentPost = studenti.slice(indexOfFirstPost,indexOfLastPost);
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

       async function UpisUDom()
        {
         await axios({method: "post",url: readUrl,data: {"json":"UpisUDom"},headers: { "Content-Type": "multipart/form-data" },})
            .then(function (response) 
            {
              if(response.data === "Operation successful")
              {
                window.location.reload();
              }
              else
              {
                alert("Error");
              }
             // console.log(response.data);
            })
            .catch(function (response) 
            {
              console.log(response);
            });
            
           // navigate("/studenti");
          
        }

        return(
           <>
            <table className="container table mt-5">
                <thead>
                    <tr className="text-center">
                        <th>Rbr</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>OIB</th>
                        <th>Broj bodova</th>
                    </tr>
                </thead>
                <tbody>
                <Posts  posts={currentPost} i={(postPerPage*currentPage)-9}/>
                </tbody>
                <tfoot>
                <Pagination postPerPage={postPerPage} totalPosts={studenti.length} paginate={paginate} />
                </tfoot>
           
            </table>
            <div className="text-center"><button className="btn btn-primary" onClick={()=>UpisUDom()}>Upiši u studenski dom</button></div>
             
             </>
            );


}

/*
<Modal
isOpen={modalIsOpen}
//onAfterOpen={afterOpenModal}
onRequestClose={closeModal}
style={customStyles}
ariaHideApp={false}
contentLabel="Delete Student">
<h2 >Odaberite sobu:</h2>
 <ModalData />
<div className="mt-2">
<button onClick={closeModal}>Close</button>
</div>
</Modal> */