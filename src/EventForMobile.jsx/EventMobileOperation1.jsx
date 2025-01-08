

import React, { StrictMode, useState } from 'react'

const EventMobileOperation1 = ({ data, ChangeData }) => {


    
  
    
    
    const CardData = [
        {
            id: 1,
            title: "Gray Scale",
            name: "grayscale",
            min: "0",
            max: "100",
            step: null,
            info: { a: data.grayscale }
        },
        {
            id: 2,
            title: "Blur",
            name: "blur",
            min: "0",
            max: "15",
            step: "0.1",
            info: { a: data.blur }
        },
        {
            id: 3,
            title: "Brightness",
            name: "bright",
            min: "0",
            max: "2",
            step: "0.01",
            info: { a: data.bright }
        },
        {
            id: 4,
            title: "Constrast",
            name: "constrast",
            min: "0",
            max: "3",
            step: "0.01",
            info: { a: data.constrast }
        },
        {
            id: 5,
            title: "Hue",
            name: "hue",
            min: "0",
            max: "360",
            step: null,
            info: { a: data.hue }
        },
        {
            id: 6,
            title: "Invert",
            name: "invert",
            min: "0",
            max: "100",
            step: null,
            info: { a: data.invert }
        },
        {
            id: 7,
            title: "Opacity",
            name: "opacity",
            min: "0",
            max: "100",
            step: null,
            info: { a: data.opacity }
        },
        {
            id: 8,
            title: "Saturation",
            name: "saturate",
            min: "0",
            max: "10",
            step: '0.1',
            info: { a: data.saturate }
        },
        {
            id: 9,
            title: "Image Radius ",
            name: "radius",
            min: "0",
            max: "50",
            step: '1',
            info: { a: data.radius }
        }
    ]


    const [disable , setDisable] = useState(null);
    const ActiveIt = (id) => {
        setDisable(disable === id ? null : id)
    }



    return (
        <StrictMode>


            <div className="col-sm-4 col-12 operationsection vis">
                <div className="row">


                    <div className="col-10 m-auto p-0">
                        <div className="row">

                            {/* first part - url */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Image url : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="text" value={data.url} name='url' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>



                            {/* third part - widht */}
                            <div className="col-12 form-group mb-2" >
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Width : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="number" placeholder='eg : 100' value={data.widht} name='widht' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>


                            {/* second part - height */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Height : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="number" placeholder='eg : 100' value={data.height} name='height' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>



                            {
                                CardData.map((val) => {

                                    return (
                                        <div className="col-12 form-group mb-2 " onClick={() => ActiveIt(val.id)} key={val.id}>
                                            <div className="row">

                                                <div className="col-4  m-auto">
                                                    <label  className={disable === val.id ? 'text-danger fw-bold' : 'text-primary'}>{val.title} : </label>
                                                </div>

                                                <div className="col-8 inputContainer">
                                                    <input type="range"
                                                        min={val.min}
                                                        max={val.max}
                                                        step={val.step}
                                                        disabled={ disable === val.id ? false : true}
                                                        value={val.info.a}
                                                        name={val.name}
                                                        onChange={(e) => ChangeData(e)}
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

export default EventMobileOperation1;