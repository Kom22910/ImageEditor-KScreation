


import React, { StrictMode, useState } from 'react';


const MobilePositioning = ({ PositionData, ChangePosition }) => {

    const cardData = [
        {
            id: 1,
            title: "Vertical position",
            max: '77',
            min: "-77",
            steps: '0.5',
            name: "topBottom",
            value: { a: PositionData.topBottom }
        },
        {
            id: 2,
            title: "Horizontal Position",
            max: '90',
            min: '-90',
            steps: '0.5',
            name: "leftRight",
            value: { a: PositionData.leftRight }
        }
    ]



    const [disable , setDisable ] = useState(null);

    const ActivateFun= (id)=>{
        setDisable(disable === id ? null : id);
    }

    return (
        <StrictMode>
            <div className="col-sm-4 col-11 operationsection vis m-auto">
                <div className="row">

                    <div className="col-12 px-4 py-3">
                        <div className="row">




                            {/*  part */}
                            {
                                cardData.map((val) => {

                                    return (
                                        <div className="col-12 form-group mb-3" key={val.id} onClick={()=>ActivateFun(val.id)}>
                                            <div className="row">

                                                <div className="col-sm-5 col-6 m-auto">
                                                    <label className={ disable === val.id ? "text-primary fw-bold" : "text-black"}>{val.title} : </label>
                                                </div>

                                                <div className="col-sm-7 col-6 inputContainer" >
                                                    <input type="range" 
                                                            min={val.min} 
                                                            max={val.max} 
                                                            step={val.steps}
                                                            disabled= {disable === val.id ? false : true} 
                                                            value={val.value.a} 
                                                            name={val.name} 
                                                            onChange={(e) => ChangePosition(e)} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>


                </div>
            </div>
        </StrictMode>
    )
}


export default MobilePositioning;