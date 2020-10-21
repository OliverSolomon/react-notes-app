import React,{useEffect,useContext} from 'react'
import {useControlledInput} from '../hooks/myhooks'
import Button from '@material-ui/core/Button'
import {addModeratorUrl} from '../urls'
import {Loadingcontext} from '../context'

import axios from 'axios';
function Moderator() {
    const {setLoading}=useContext(Loadingcontext)

    useEffect(()=>{
    setLoading(false)
    },[setLoading])
    let [value,bindValue,resetValue]=useControlledInput()
    
    function handleSubmit(e){
    e.preventDefault();
    let payload={'email':value}
    console.log(payload)
    axios.post(addModeratorUrl,payload).then(res=>{console.log(res.data)
    resetValue()
    }).catch(err=>console.error(err))
    }
    return (
    <div className='full light container'>
        <p className='font-md cnt text-light'>A moderator can upload course resources</p>
        <div className='form-container moderator-form center-20'>
        
            <p className='font-lg primary'>Become a Moderator</p>
          <form onSubmit={handleSubmit}>
             <input className='form-input tr mr-s rounded-sm shadow' type='email' placeholder='email' required {...bindValue}/> 
             <Button type='submit' variant='contained' color='primary'>request</Button>
          </form>
        </div>
     </div>
    )
}

export default Moderator
