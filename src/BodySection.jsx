


import React, { StrictMode, useState } from 'react';
import Output from './Output';
import Operation from './EventOperation/EventsOperation';
import EventMobileOperation1 from './EventForMobile.jsx/EventMobileOperation1';
import EventOperationPositioning from './EventOperation/EventOperationPositioning';




const BodySection = ({num}) => {

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
                         <EventOperationPositioning/>
                    }

                    {/* output */}
                    <Output data={data} />


                    {/* operation */}
                    <EventMobileOperation1 data = {data} ChangeData = {ChangeData} />
                    
                </div>
            </div>





        </StrictMode>
    )
}

export default BodySection;