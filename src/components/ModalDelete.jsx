
import './styles/modalDelete.css'

const ModalDelete = ({ deleteClose, setDeleteClose }) => {

    const handleExitDelete = () => {
        setDeleteClose(true)
    }

    return (
        <div className={`delete__container ${deleteClose && 'delete__close'}`}>
            <div className='delete'>
                <i className="fa-solid fa-triangle-exclamation delete__icon"></i>
                <h3 className='delete__text'>User has been deleted.</h3>
                <button onClick={handleExitDelete} className='delete__btn'>Ok</button>
            </div>
        </div>
    )
}

export default ModalDelete