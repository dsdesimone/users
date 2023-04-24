import './styles/loading.css'

export const Loading = () => {
  return (
    <div className='loading'>
        <img className='loading__img' src="./photos/loading.png" alt="" />
        <h3 className='loading__text'>Loading</h3>
    </div>
  )
}
