import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPoll, faVideo, faImage} from '@fortawesome/free-solid-svg-icons'
import analytics from '../../Asset/data-analytics.png'
import './Home.css'

const Home = () => {
  return (

    <div className='container'>
        <div className='nav'>
          <FontAwesomeIcon icon={faUsers} className='icon users'/>
          <FontAwesomeIcon icon={faPoll} className='icon'/>
          <FontAwesomeIcon icon={faVideo} className='icon'/>
          <FontAwesomeIcon icon={faImage} className='icon'/>
          <img className='analytics' src={analytics} alt='analytics'/>
        </div>
        <div className='survey'>
             
        </div>
    </div>
  )
}

export default Home
