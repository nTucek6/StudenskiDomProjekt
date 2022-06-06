import axios from "axios";
import {useState, useEffect} from 'react';
//import { Outlet, Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Modal from 'react-modal';
import React from 'react';
//import { Button } from "bootstrap";




export default function StudentiPoSobama()
{
    const [sobe, setData] = useState(null);
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
        /*
        const error = 
        (
            <h1 className="text-center">Error 404</h1>

        ); */
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

      
    let i = 1;
    const list = sobe.map((soba) => (
        <tr key={soba.Soba.Id.toString()} >
            <td>{i++}</td>
            <td>{soba.Soba.Kat}</td>
            <td>{soba.Soba.BrojSobe}</td>
            <td>{soba.Soba.BrojMjesta}</td>
            <td>{soba.Soba.Tip}</td>
            <td >{soba.Studenti}</td>
            <td><i className="fa fa-trash" aria-hidden="true"></i></td>
        </tr>
            )) 

            
    return(
        <div className="container mt-5">
      <table className="table ">
        <thead>
            <tr>
                <td>Rbr</td>
                <td>Kat</td>
                <td>Soba</td>
                <td>Broj mjesta</td>
                <td>Tip</td>
                <td>Studenti</td>
                <td>Obriši</td>
            </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
    </table>
        </div>); 
    
    

}


function DeleteFromRoomModal()
{

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




