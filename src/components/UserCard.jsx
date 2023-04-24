import './styles/userCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm, setDeleteClose }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
        handleOpenDelete()
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }

    const handleOpenDelete = () => {
        setDeleteClose(false)
    }

    return (
        <div className="user">
            <h2 className="user__name">{user.first_name} {user.last_name}</h2>
            <ul className="user__list">
                <li className="user__item"><span className="user__item-item">Email: </span><span className="user__item-data">{user.email}</span></li>
                <li className="user__item"><span className="user__item-item">Birthday: </span><span className="user__item-data">{user.birthday}</span></li>
            </ul>
            <footer className="user__footer">
                <button className="user__footer__btn btn__delete" onClick={handleDelete}><i className="fa-regular fa-trash-can"></i></button>
                <button className="user__footer__btn btn__update" onClick={handleUpdate}><i className="fa-regular fa-pen-to-square"></i></button>
            </footer>
        </div>
    )
}

export default UserCard