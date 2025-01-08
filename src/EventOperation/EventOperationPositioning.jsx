


import React, { StrictMode } from 'react'

const EventOperationPositioning = ({PositionData , ChangePosition}) => {



  return (
    <StrictMode>
      <div className="col-sm-4 col-6 operationsection dis">
        <div className="row">

          <div className="col-12 px-4">
            <div className="row">

              {/* First part */}
              <div className="col-12">
                <div className="row">

                  <div className="col-4 m-auto">
                      <label>Vertical Position : </label>
                  </div>

                  <div className="col-8">
                    <input type="range" min="0" max="100" value={PositionData.topBottom} name='topBottom' onChange={(e) => ChangePosition(e)} />
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