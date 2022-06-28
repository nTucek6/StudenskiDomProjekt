import axios from "axios";
import {useState, useEffect} from 'react';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import React from 'react';
import trashbin from '../../img/trash-can.png';
import ShowModal from "../../js/components/Modal";


export default function StudentiPoSobama()
{
    const [sobe, setData] = useState(null);
    const [BrisanjeOdabir,setDeleteStudent] = useState(null);
    const [searchReturn,setSearchReturn] = useState();

    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(15);
    const [modalIsOpen, setIsOpen] = useState(false);

    const readUrl = "http://localhost/studenskidom/php/read.php";
    useEffect(() => {UcitajPodatke();}, []);
    async function UcitajPodatke()
        {
                axios({
                    method: "post",
                    url: readUrl,
                    data: 
                    {
                        "json":"StudentPoSobi"
                     
                    },
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                    .then(function (response) {
                        setData(response.data);
                        setSearchReturn(response.data);
                    })
                    .catch(function (response) {
                      console.log(response);
                    });   
        }

    if (!sobe)
    {
        return null;
    }

    const customStyles = {
      content: {
        top: '15%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

   function AfterClick(SobaId,studenti)
   {
    if(studenti !== "")
    {
      axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "json":"GetStudentRoom",
            "SobaId":SobaId
         
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          setDeleteStudent(response.data);
          //console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });   
  
            openModal();
    }
    else
    {
      alert("U sobi ne postoje studenti za brisanje");
    }     
   }

      const Posts =({posts,i}) => //Ispis odredeni broj stavki na jednoj stranici
      {
        let list = posts.map((soba) => (
            <tr key={soba.Soba.Id.toString()} className="text-center" >
                <td>{i++}</td>
                <td>{soba.Soba.Kat}</td>
                <td>{soba.Soba.BrojSobe}</td>
                <td>{soba.Soba.BrojMjesta}</td>
                <td>{soba.Soba.Tip}</td>
                <td >{soba.Studenti}</td>
                <td ><img id="BtnHover" alt="" src={trashbin} onClick={()=>AfterClick(soba.Soba.Id,soba.Studenti)} /></td></tr>
                )); 
          return list;
      }

  let indexOfLastPost = currentPage * postPerPage;
  let indexOfFirstPost = indexOfLastPost - postPerPage;
  let currentPost = searchReturn.slice(indexOfFirstPost,indexOfLastPost);
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

  function ModalData() //Ispis studenata za brisanje iz sobe
  {
    if(!BrisanjeOdabir)
    {
      return null;
    }
    return(
      <div className="mt-3 text-center">
         {BrisanjeOdabir.map((student)=>(<button key={student.Id} className="btn btn-warning marginButtons" onClick={()=>DeleteStudent(student.Id)}>{student.Ime + " " + student.Prezime}</button>))}
       </div>)
    
  }

  function DeleteStudent(StudentId)
  {
    if(window.confirm("Jeste li sigurni za odabir?"))
    {
      axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "json":"DeleteStudentFromRoom",
            "StudentId":StudentId
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //console.log(response.data);
          UcitajPodatke();
          <Posts  posts={sobe.slice(indexOfFirstPost,indexOfLastPost)} i={(postPerPage*currentPage)-9}/>
        })
        .catch(function (response) {
          console.log(response);
        }); 
        closeModal();
      
    }
  }

//pretraga po studentima i broju sobe
  const searchItems = (searchText) => {
      if(searchText !== "")
      {
        const searchData = sobe.filter(i =>{return i.Studenti.toLowerCase().includes(searchText.toLowerCase()) || i.Soba.BrojSobe.includes(searchText)});
        setSearchReturn(searchData); 
      }
      else
      {
        setSearchReturn(sobe);
      }
  };

    return(
      <div className="container mt-5">
      <div className="text-center"><input type="text" onChange={(e) => searchItems(e.target.value)} placeholder="Search..." /></div>
      <div className="table-responsive">
      <table className="table" >
      <thead>
      <tr className="text-center">
      <th>Rbr</th>
      <th>Kat</th>
      <th>Soba</th>
      <th>Broj mjesta</th>
      <th>Tip</th>
      <th>Studenti</th>
      <th>Obriši studenta</th>
      </tr>
      </thead>
      <tbody>
      <Posts  posts={currentPost} i={(postPerPage*currentPage)-14}/>
      </tbody>
      <tfoot>
      <Pagination postPerPage={postPerPage} totalPosts={searchReturn.length} paginate={paginate} />
      </tfoot>
      </table>
      </div>
      {ShowModal(modalIsOpen,closeModal,customStyles,ModalData,"Odaberite studenta kojega želite ukloniti iz sobe:",null)}
      </div>
      );
}








