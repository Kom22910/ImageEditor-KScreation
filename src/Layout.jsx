

import React, { StrictMode } from 'react'
import Header from './Header';
import BodySection from './BodySection';

const Layout = () => {
    return (
        <StrictMode>

            <div className="container-fluid p-0 layout">

                <div className="row">

                        {/* Header */}
                        <Header />


                        {/* Body section */}
                        <BodySection/>




                        <div className="col-12 text-center mt-5 para">
                            <p>&copy; Keshav Semwal created KSCreation APP.</p>
                        </div>
                </div>

            </div>

        </StrictMode>
    )
}

export default Layout;