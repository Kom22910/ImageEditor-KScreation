

import React, { StrictMode, useState } from 'react'
import Header from './Header';
import BodySection from './BodySection';

const Layout = () => {

    const [num , setNum] = useState(0);

    const changeNum = (id) =>{
        setNum(id);
        alert(id);
    }





    return (
        <StrictMode>

            <div className="container-fluid p-0 layout">

                <div className="row">

                        {/* Header */}
                        <Header fun={changeNum} />


                        {/* Body section */}
                        <BodySection  num = {num}/>




                        <div className="col-12 text-center mt-5 para">
                            <p>&copy; Keshav Semwal created KSCreation APP.</p>
                        </div>
                </div>

            </div>

        </StrictMode>
    )
}

export default Layout;