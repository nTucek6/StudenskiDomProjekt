import Modal from 'react-modal';

export default function ShowModal(modalIsOpen,closeModal,customStyles,ModalData,text,Button)
{
    return (<Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel={text}>
        <h2 className="text-center RoomInfoStyle">{text}</h2>
        <ModalData/>
        <div className="mt-2 d-flex flex-row-reverse">
        {Button !== null?<Button />:null}
        <button className="btn btn-outline-danger mt-3 p-2 marginButtons" onClick={closeModal}>Close</button>
        </div>
      </Modal>)
}