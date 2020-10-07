import React,{useState,useEffect,useContext}from 'react';
import Search from '../search/Search.jsx'
import {Searchcontext,Loadingcontext,Datacontext} from '../context'
import {isEmpty} from '../helpers'
import {allUnitsUrl,unitNotesUrl} from '../urls'

import Notes from '../notes'
import axios from 'axios'

const Landing = () => {
    const {setLoading}=useContext(Loadingcontext)
    const {data,setData} = useContext(Datacontext)
    const [notes,setNotes]=useState({})
    const {selected}=useContext(Searchcontext)
    
    useEffect(() => {
        if(isEmpty(data)){
        setLoading(true)
        axios.get(allUnitsUrl).then(resp=>{setData(resp.data)
        setLoading(false)}
        )}
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[setLoading,setData])

    useEffect(() => {
        
        if (!isEmpty(selected)){
            setLoading(true)
            axios.post(unitNotesUrl,{"unit_code":selected.code}).then(resp=>{setNotes(resp.data)
             setLoading(false)})
        }
    
    }, [selected,setLoading])

        return (
            <div className='landing'>
                <Search source={data} />
                {!isEmpty(notes) ?(<Notes notes={{notes,setNotes}}/>):null}
            </div>
        );
    };

export default Landing;
