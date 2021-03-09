import React from 'react'
import {useLaunchMissioninfoQuery} from './../../generated/graphql'

interface idtype{
  id: number
}
export const Missioninfo = ({id}:idtype) => {
    const {data,error,loading} = useLaunchMissioninfoQuery({
        variables: {id: String(id)},
    });
    if(loading) return <h1>Loading ...</h1>
    if(error || !data) return <h1>Error</h1>
    console.log(data)
    return (
        <div className='details'>
            <h2 className='detail-title'>{data.launch?.mission_name}</h2>
            <p><strong>Launch Year: </strong>  {data.launch?.launch_year}</p>
            <p><strong>Rocket Name: </strong>  {data.launch?.rocket?.rocket_name}</p>
            <p><strong>Launch Type: </strong>  {data.launch?.rocket?.rocket_type}</p>
            <p><strong>Launch Details: </strong> {data.launch?.details}</p>
            
            
        </div>
    )
}
