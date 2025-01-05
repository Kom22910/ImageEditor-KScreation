

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
                </div>

            </div>

        </StrictMode>
    )
}

export default Layout;