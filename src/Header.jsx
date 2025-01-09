



import React, { StrictMode, useState } from 'react'

const Header = ({fun}) => {


  const title = [
    "Editing", "Positioning", "Text", "Emoji", "Dummy3"
  ]

  const [activeIndex, setIndex] = useState(0)

  const ActivateLi = (id) => {
    activeIndex === id ? setIndex(null) : setIndex(id);
    fun(id);
  }




  return (
    <StrictMode>

      <div className="col-12 py-2 header">
        <div className="col-11 m-auto">
          <div className="row">


            <div className="col-sm-3 col-8 sec1">
              <h1>KSCreation</h1>
            </div>


            <div className="col-sm-8 col-12 m-auto sec2">
              <ul className='box py-2'>
                {
                  title.map((val, index) => {
                    return (
                      <li key={index}
                        style={{
                          backgroundColor: index === activeIndex ? 'black' : 'white',
                          color: index === activeIndex ? 'white' : 'black'
                        }}
                        onClick={() => {ActivateLi(index)}}
                      >

                        {val}

                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

    </StrictMode>
  )
}

export default Header;