import React,{useEffect,useContext} from 'react'
import {Loadingcontext} from '../context'
import {Link } from 'react-router-dom';
import Card from './Card'
function Contribute() {
    const {setLoading}=useContext(Loadingcontext)
    
useEffect(()=>{
    setLoading(false)
},[setLoading])
    return (
        <div>
          {/* <h2 className='center md pd2 primary'>Improve the site by adding more content</h2> */}
        
          {/* <Card values={{desc:'Become a Moderator',link:'moderator'}}/> */}
          <div className='cards-container'>
              <Card values={{desc:'Become a Moderator',link:'moderator',style:'card1'}} />
              <Card values={{desc:'Support the Developer',link:'support',style:'card2'}}/>
              </div>

        </div>
    )
}

export default Contribute
