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
    const [search, setSearch] = useState('');
    const [searchReturn,setSearchReturn] = useState();

    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(15);
    const [modalIsOpen, setIsOpen] = useState(false);

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
                        "json":"StudentPoSobi"
                     
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


      const Posts =({posts,i}) => 
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

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = sobe.slice(indexOfFirstPost,indexOfLastPost);
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
    
//<li key={student.Id}>{student.Ime + " " + student.Prezime}</li>
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
          console.log(response.data);
         // navigate("/sobe");
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        }); 
        closeModal();
       // window.location.reload(false); 
       UcitajPodatke();
       <Posts  posts={sobe.slice(indexOfFirstPost,indexOfLastPost)} i={(postPerPage*currentPage)-9}/>
    }
    
  }



  // dovrsiti moram
  const searchItems = (searchText) => {
    setSearch(searchText);
    
      if(searchText !== "")
      {
        const searchData =  sobe.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())})
          setSearchReturn(searchData);
      }
      else
      {
        setSearchReturn(sobe);
      }
      
  };

console.log(searchReturn);

    return(
      <div className="container mt-5">
        <div className="text-center"><input type="text" onChange={(e) => searchItems(e.target.value)} /></div>
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
      <Pagination postPerPage={postPerPage} totalPosts={sobe.length} paginate={paginate} />
      </tfoot>
      </table>
      </div>
      {ShowModal(modalIsOpen,closeModal,customStyles,ModalData,"Odaberite studenta kojega želite ukloniti iz sobe:",null)}
      </div>
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
             <h2 >Odaberite studenta kojega želite ukloniti iz sobe</h2>
              <ModalData />
             <div className="mt-4 d-flex flex-row-reverse">
             <button className="btn btn-outline-danger p-2" onClick={closeModal}>Close</button>
             </div>
           </Modal>

*/








