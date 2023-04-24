
import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'
import ModalDelete from './components/ModalDelete'
import { Loading } from './components/Loading'
import ModalCreate from './components/ModalCreate'


function App() {

  const [ updateInfo, setUpdateInfo ] = useState()
  const [formClose, setFormClose] = useState(true)
  const [deleteClose, setDeleteClose] = useState(true)
  const [createClose, setCreateClose] = useState(true)


  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenForm = () => {
    setFormClose(false)
  }
  

  return (
    <div className='app'>
      {
        users
          ? <>
              <div className='app__header'>
                <h2 className='app__header-title'>Users</h2>
                <button className='app__header-btn' onClick={handleOpenForm}>
                  <i className="fa-solid fa-circle-plus"></i> 
                  <p>Create new user</p>
                </button>
              </div>
              <UserForm 
                createNewUser={createNewUser}
                updateInfo={updateInfo}
                updateUserById={updateUserById}
                setUpdateInfo={setUpdateInfo}
                setFormClose={setFormClose}
                formClose={formClose}

                setCreateClose={setCreateClose}
              />
              <div className='app__users'>
                {
                  users?.map(user => (
                    <UserCard 
                      key={user.id}
                      user={user}
                      deleteUserById={deleteUserById}
                      setUpdateInfo={setUpdateInfo}
                      handleOpenForm={handleOpenForm}
        
                      setDeleteClose={setDeleteClose}
                    />
                  ))
                }
              </div>
              <ModalDelete 
                deleteClose={deleteClose}
                setDeleteClose={setDeleteClose}
              />
              <ModalCreate 
                createClose={createClose}
                setCreateClose={setCreateClose}
                updateInfo={updateInfo}
              />
            </>
          : <Loading />
      }
    </div> 
  )
}

export default App
