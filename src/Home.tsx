import React, { useState } from 'react'
import { MissionList } from './components/Mission/MissionList';
import { Missioninfo } from './components/Missioninfo/Missioninfo';
export const Home = () => {
    let [id, setid] = useState(1);
    const handlechange = React.useCallback(newid => {
         setid(newid)
    },[])
    return (
        
            <div className="App">
            <MissionList handlechange={handlechange} />
            <Missioninfo id={id} />
      </div>
            
        
    )
}
