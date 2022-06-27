import axios from "axios";
import {useState, useEffect} from 'react';
import addbnt from '../../img/add.png';
import ShowModal from "../../js/components/Modal";

export default function StudentBezSobe()
{
    const [studenti, setData] = useState(null);
    const [SlobodneSobe,setSlobodneSobe] = useState(null);
    const [student,setStudent] = useState(null);
    const [soba,setSoba] = useState();
    const [searchReturn,setSearchReturn] = useState();
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
  
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
                        setSearchReturn(response.data);
                      //console.log(response);
                    })
                    .catch(function (response) {
                      //handle error
                      console.log(response);
                    });   
        }

        if(!studenti) {return(<h3 className="text-center mt-3">Trenutno ne postoje studenti bez sobe.</h3>) }
      
      
        const customStyles = {
            content: {
              top: '20%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width:"30%",
            },
          };
      
      
         
          function openModal() {
            setIsOpen(true);
          }
        
          function closeModal() {
            setIsOpen(false);
          }

          function AfterClick(StudentId)
          {
            axios({
                method: "post",
                url: readUrl,
                data: 
                {
                    "json":"GetFreeRoom",
                    "StudentId":StudentId
                 
                },
                headers: { "Content-Type": "multipart/form-data" },
              })
                .then(function (response) {
                  setSlobodneSobe(response.data);
                  //console.log(response);
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                });
              setStudent(StudentId);
              openModal();
          }

          const Posts =({posts,i}) => 
          {
            const list = posts.map((student) => (
                <tr key={student.Id.toString()} className="text-center">
                    <td>{i++}</td>
                    <td>{student.Ime}</td>
                    <td>{student.Prezime}</td>
                    <td>{student.OIB}</td>
                    <td><img id="BtnHover" alt="" src={addbnt} onClick={()=>AfterClick(student.Id)} /></td>
                </tr>
                    ));
                    return list;
          }

          const indexOfLastPost = currentPage * postPerPage;
          const indexOfFirstPost = indexOfLastPost - postPerPage;
          const currentPost = searchReturn.slice(indexOfFirstPost,indexOfLastPost);
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
                  if(!SlobodneSobe)
                  {
                    return (<h3>Sve sobe su popunjene</h3>);
                  }
                  return(
                    <div>
                      <select className="form-select" value={soba} onChange={(e) => setSoba(e.target.value)}><option></option>
                      {SlobodneSobe.map((soba)=>
                      (<option value={soba.Soba.BrojSobe} key={soba.Soba.Id}>Soba: {soba.Soba.BrojSobe}{soba.Studenti.Ime !== "" && soba.Studenti.Prezime!==""? <>, Student: {soba.Studenti.Ime} {soba.Studenti.Prezime}</>: null} </option>))}
                      </select>
                      <button className="btn btn-success mt-2" onClick={()=> DodajUSobu(soba)}>Dodaj </button>
                     </div>)
                  
              //<li key={student.Id}>{student.Ime + " " + student.Prezime}</li>
                }

                function DodajUSobu(BrojSobe)
                {
                  if(!BrojSobe)
                  {
                   alert("Pogrešan unos!")
                  }
                  else
                  {
                  
                    axios({
                      method: "post",
                      url: readUrl,
                      data: 
                      {
                          "json":"InsertStudentRoom",
                          "StudentId":student,
                          "BrojSobe":BrojSobe
                      },
                      headers: { "Content-Type": "multipart/form-data" },
                    })
                      .then(function (response) {
                        console.log(response.data);
                      })
                      .catch(function (response) {
                        //handle error
                        console.log(response);
                      });
                      closeModal();
                      //window.location.reload(false); 
                      UcitajPodatke();
                      
                      <Posts  posts={studenti.slice(indexOfFirstPost,indexOfLastPost)} i={(postPerPage*currentPage)-9}/>
                  }
                }

                const searchItems = (searchText) => {
                  if(searchText !== "")
                  {
                    const searchData = studenti.filter(i =>{return (i.Ime + " " + i.Prezime).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || (i.Prezime + " " + i.Ime).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || i.OIB.includes(searchText)});
                    setSearchReturn(searchData);
                      
                  }
                  else
                  {
                    setSearchReturn(studenti);
                  }
                  
              };


        return(
          <>
          <div className="mt-5 text-center"><input type="text" onChange={(e) => searchItems(e.target.value)} placeholder="Search..." /></div>          
        <table className="container table ">
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
            <Posts  posts={currentPost} i={(postPerPage*currentPage)-9}/>
            </tbody>
            <tfoot>
            <Pagination postPerPage={postPerPage} totalPosts={searchReturn.length} paginate={paginate} />
            </tfoot>
            {ShowModal(modalIsOpen,closeModal,customStyles,ModalData,"Odaberite sobu:",null)}
        </table></>);
        
}

/*

<Modal
             isOpen={modalIsOpen}
             //onAfterOpen={afterOpenModal}
             onRequestClose={closeModal}
             style={customStyles}
             ariaHideApp={false}
             contentLabel="modal">
             <h2 >Odaberite sobu:</h2>
              <ModalData />
             <div className="mt-4 d-flex flex-row-reverse">
             <button className="btn btn-outline-danger p-2" onClick={closeModal}>Close</button>
             </div>
           </Modal>

*/