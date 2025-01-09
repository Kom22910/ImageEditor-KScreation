



import React, { StrictMode } from 'react'

const TextOperation = ({ textData, ChangeTextEdit }) => {

    const cardData = [
        {
            title: "Text",
            type: "text",
            placeholder: "Enter Text",
            value: textData.words,
            name: "words",
            min : null,
            max : null,
            steps : null
        },
        {
            title: "Background Color ",
            type: "color",
            placeholder: null,
            value: textData.bgclr,
            name: "bgclr",
            min : null,
            max : null,
            steps : null
        },
        {
            title: "Background opacity",
            type: "range",
            placeholder: null,
            value: textData.bgOp,
            name: "bgOp",
            min : "0",
            max : "1",
            steps : "0.01"
        },
        {
            title: "Text Color ",
            type: "color",
            placeholder: "Enter Text",
            value: textData.clr,
            name: "clr",
            min : null,
            max : null,
            steps : null
        },
        {
            title: "Text opacity",
            type: "range",
            placeholder: null,
            value: textData.txOp,
            name: "txOp",
            min : "0",
            max : "1",
            steps : "0.01"
        },
        {
            title: "Width",
            type: "range",
            placeholder: null,
            value: textData.w,
            name: "w",
            min : "1",
            max : "100",
            steps : null
        },
        {
            title: "Font Size",
            type: "range",
            placeholder: null,
            value: textData.fs,
            name: "fs",
            min : "1",
            max : "250",
            steps : "0.5"
        },
        {
            title: "Font Weight",
            type: "range",
            placeholder: null,
            value: textData.fw,
            name: "fw",
            min : "100",
            max : "900",
            steps : "100"
        },
        {
            title: "Vertical Position",
            type: "range",
            placeholder: null,
            value: textData.pTop,
            name: "pTop",
            min : "0",
            max : "100",
            steps : "0.1"
        },
        {
            title: "Horizontal Position",
            type: "range",
            placeholder: null,
            value: textData.pLeft,
            name: "pLeft",
            min : "0",
            max : "100",
            steps : "0.1"
        },
        

    ]



    return (
        <StrictMode>


            <div className="col-4 operationsection dis">

                <div className="col-12">

                    <div className="row">

                        {/* section */}

                        {
                            cardData.map((val , index) => {

                                return (
                                    <div className="col-11 m-auto form-group mb-3" key={index}>
                                        <div className="row">
                                            <div className="col-5 m-auto">
                                                <label>{val.title} : </label>
                                            </div>
                                            <div className="col-7 inputContainer">
                                                <input type={val.type} 
                                                       min={val.min}
                                                       max={val.max}
                                                       step={val.steps}
                                                       placeholder={val.placeholder} 
                                                       value={val.value} 
                                                       name={val.name} 
                                                       onChange={(e) => ChangeTextEdit(e)} 
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






        </StrictMode>
    )
}

export default TextOperation;