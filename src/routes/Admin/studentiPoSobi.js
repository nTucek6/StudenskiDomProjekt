import axios from "axios";
import {useState, useEffect} from 'react';
//import { Outlet, Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Modal from 'react-modal';
import React from 'react';
import trashbin from '../../img/trash-can.png';
//import { Button } from "bootstrap";




export default function StudentiPoSobama()
{
    const [sobe, setData] = useState(null);

    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

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

    /*
    const columns = [
        { dataField: 'Soba.Id', text: 'Id', sort: true },
        { dataField: 'Soba.Kat', text: 'Kat', sort: true },
        { dataField: 'Soba.BrojSobe', text: 'Soba', sort: true },
        { dataField: 'Soba.BrojMjesta', text: 'Broj mjesta', sort: true },
        { dataField: 'Soba.Tip', text: 'Tip', sort: true },
        { dataField:  'Studenti', text:'Studenti',sort:true }
      //  {  dataFormat:linkFollow,text:"Delete student"}
      ];

      const defaultSorted = [{
        dataField: 'Soba',
        order: 'asc'
      }];

      const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          //console.log('page', page);
         // console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
        //  console.log('page', page);
         // console.log('sizePerPage', sizePerPage);
        }
      });




      
     
      return (
        <div className="container app">
          <BootstrapTable bootstrap4 keyField='Soba.Id' data={sobe} columns={columns} defaultSorted={defaultSorted} pagination={pagination} > 
          </BootstrapTable>
        </div>
      ); */

      const Posts =({posts,i}) => 
      {
      //let i = 1;
        let list = posts.map((soba) => (
            <tr key={soba.Soba.Id.toString()} className="text-center" >
                <td>{i++}</td>
                <td>{soba.Soba.Kat}</td>
                <td>{soba.Soba.BrojSobe}</td>
                <td>{soba.Soba.BrojMjesta}</td>
                <td>{soba.Soba.Tip}</td>
                <td >{soba.Studenti}</td>
                <td ><img id="BtnHover"  src={trashbin}/ ></td></tr>
                )); 
          return list;
      }

     

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = sobe.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  const Pagination = ({postPerPage,totalPosts,paginate}) =>
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

  return(
  <div className="container mt-5">
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
  <Posts  posts={currentPost} i={(postPerPage*currentPage)-9}/>
  <Pagination postPerPage={postPerPage} totalPosts={sobe.length} paginate={paginate} />
  </tbody>
  
  </table>
  </div>
  </div>); 
 
}


function DeleteFromRoomModal()
{
////<tfoot><tr><td><button>Prev</button></td><td><button>Next</button></td></tr></tfoot>
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );

}




