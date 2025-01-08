



import React, { StrictMode } from "react";

const Operation = ({ data, ChangeData }) => {
    return (
        <StrictMode>


            <div className="col-sm-4 col-6 operationsection dis">
                <div className="row">


                    <div className="col-12 px-4">
                        <div className="row">

                            {/* first part - url */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Image url : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="text" placeholder='URL' value={data.url} name='url' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>



                            {/* third part - widht */}
                            <div className="col-12 form-group mb-2">
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

                            {/* 4 part - Gray scale */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Gray scale : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="100" value={data.grayscale} name='grayscale' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>

                            {/* 5 part - blur */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Blur : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="15" step="0.1" value={data.blur} name='blur' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>

                            {/* 6 part - Brightness */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Brightness : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="2" step="0.01" value={data.bright} name='bright' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>

                            {/* 7 part - Contrast */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Constrast : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="3" step="0.01" value={data.constrast} name='constrast' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>

                            {/* 8 part - Hue Rotation */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Hue : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="360" value={data.hue} name='hue' onChange={(e) => ChangeData(e)} />
                                    </div>

                                </div>
                            </div>

                            {/* 9 part - Invert */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Invert : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="100" value={data.invert} name='invert' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>
                            </div>

                            {/* 10 part - Opacity */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Opacity : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="100" value={data.opacity} name='opacity' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>
                            </div>

                            {/* 11 part - Saturation */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Saturation : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="10" step="0.1" value={data.saturate} name='saturate' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>
                            </div>

                            {/* 12 part - Border Radius */}
                            <div className="col-12 form-group mb-2">
                                <div className="row">

                                    <div className="col-4  m-auto">
                                        <label>Image Radius : </label>
                                    </div>

                                    <div className="col-8">
                                        <input type="range" min="0" max="50" step="1" value={data.radius} name='radius' onChange={(e) => ChangeData(e)} />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>





        </StrictMode>
    )
}

export default Operation;