


import React, { StrictMode } from 'react'
const EventOperationPositioning = ({PositionData , ChangePosition}) => {


  return (
    <StrictMode>
      <div className="col-sm-4 col-6 operationsection dis">
        <div className="row">

          <div className="col-12 px-4 py-3">
            <div className="row">

              {/* First part */}
              <div className="col-12 form-group mb-3">
                <div className="row">

                  <div className="col-5 m-auto">
                      <label>Vertical Position : </label>
                  </div>

                  <div className="col-7 inputContainer">
                    <input type="range" min="-77" max="77" value={PositionData.topBottom} name='topBottom' onChange={(e) => ChangePosition(e)} />
                  </div>
                </div>
              </div>



              <div className="col-12 form-group mb-3">
                <div className="row">

                  <div className="col-5 m-auto">
                      <label>Horizontal Position : </label>
                  </div>

                  <div className="col-7 inputContainer">
                    <input type="range" min="-60" max="60" value={PositionData.leftRight} name='leftRight' onChange={(e) => ChangePosition(e)} />
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

export default EventOperationPositioning;