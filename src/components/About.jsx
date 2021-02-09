import React,{useEffect,useContext} from 'react'
import {Loadingcontext} from '../context'

function About() {
    let {setLoading}=useContext(Loadingcontext)
    useEffect(() => {
        setLoading(false)
      
    }, [setLoading])
    return (
        <div className='about-container'>
            <p className='about-paragraph center-20 font-20 font-primary'>
           Biblioteka which is polish meaning 'Library' is a platform for accesing course <span className='u-line'>Notes</span>, previous exams,lecture videos and assignments
       </p> </div>
    )
}

export default About
