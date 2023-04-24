
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import { useEffect } from 'react'
import './styles/userForm.css'

const UserForm = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClose, formClose, setCreateClose }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        if(updateInfo){
            updateUserById(updateInfo.id, data)
            setTimeout(() => {
                setUpdateInfo()
            }, 3000)
            setCreateClose()
        } else {
            createNewUser(data)
            setCreateClose()
        }
        reset(defaultValues)
    }

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const handleExit = () => {
        setFormClose(true)
    }

    // const handleOpenCreate = () => {
    //     setCreateClose(false)
    // }

    return (
        <div className={`form__container ${formClose && 'close'}`}>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <h3>{updateInfo ? 'Update user' : 'Create new user'}</h3>
                <span onClick={handleExit} className='form__exit'>x</span>
                <div className='form__item'>
                    <label className='form__label' htmlFor="email">Email</label>
                    <input className='form__input' {...register('email')} type="email" id='email' />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="password">Password</label>
                    <input className='form__input' {...register('password')} type="password" id='password' />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="first_name">First Name</label>
                    <input className='form__input' {...register('first_name')} type="text" id='first_name' />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="last_name">Last Name</label>
                    <input className='form__input' {...register('last_name')} type="text" id='last_name' />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="birthday">Birthday</label>
                    <input className='form__input' {...register('birthday')} type="date" id='birthday' />
                </div>
                        
                <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
            </form>
        </div>
        
  )
}

export default UserForm