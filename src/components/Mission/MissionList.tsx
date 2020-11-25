import React from 'react'
import {useMissioninfoQuery} from '../../generated/graphql'

interface ourtype{
    handlechange: (newid: number) => void
}
export const MissionList = ({handlechange}:ourtype) => {
    const{data,error,loading} = useMissioninfoQuery();
    if(loading) return <h1 className='loading-1'>Loading ...</h1>
    if(error || !data) return <h1>Error</h1>
   console.log(data)
    return (
        <div className='list'>
            <h2 className='list-title'>Launches</h2>
            {data.launches?.map((launchobj,ind) => 
            {return <li key={ind}
            onClick={()=> handlechange(launchobj?.flight_number!)}>
               {launchobj?.mission_name}
           </li>}
            
            )}
        </div>
    )
}
