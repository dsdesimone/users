import './styles/modalCreate.css'

const ModalCreate = ({ createClose, setCreateClose, updateInfo }) => {

    const handleExitCreate = () => {
        setCreateClose(true)
    }

    return (
        <div className={`create__container ${createClose && 'create__close'}`}>
            <div className='create'>
                <i className="fa-regular fa-square-check create__icon"></i>
                <h3 className='create__text'>{updateInfo ? 'User has been updated.' : 'User has been created.'}</h3>
                <button onClick={handleExitCreate} className='create__btn'>Ok</button>
            </div>
        </div>
    
    )
}

export default ModalCreate