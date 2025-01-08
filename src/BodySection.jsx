


import React, { StrictMode, useState } from 'react';
import Output from './Output';
import Operation from './EventOperation/EventsOperation';
import EventMobileOperation1 from './EventForMobile.jsx/EventMobileOperation1';
import EventOperationPositioning from './EventOperation/EventOperationPositioning';




const BodySection = ({num}) => {


    // img setting 

    const [data, setData] = useState({
        url: "asset/img1.png",
        height: null,
        widht: null,
        grayscale: 0,
        blur: 0,
        bright: 1,
        constrast: 1,
        hue: 0,
        invert: 0,
        opacity: 0,
        saturate: 1,
        radius: 0
    })

    const ChangeData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }


    // img positioning 

    const [positionData , setPosition]= useState({
        topBottom : 0,
        leftRight : 0
    })

    const ChangePosition = (e) =>{
        const { name, value } = e.target;
        setPosition({...positionData , [name] : value})
    }


    return (
        <StrictMode>
            <div className="col-11 bodysection">
                <div className="row">

                    {/* operation */}
                    {
                        num === 0 &&
                            <Operation data = {data} ChangeData = {ChangeData} />
                    }
                    {
                        num === 1 &&
                         <EventOperationPositioning   PositionData = {positionData} ChangePosition = {ChangePosition}/>
                    }


                    {/* output */}
                    <Output data={data} PositionData={positionData} />




                    {/* operation */}
                    <EventMobileOperation1 data = {data} ChangeData = {ChangeData} />
                    
                </div>
            </div>





        </StrictMode>
    )
}

export default BodySection;