import React from 'react'
import './Work.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"
const Work = () => {
  return (
    <div className='mywork' id='work'>
      <div className="mywork-title">
        <h1>
          My latest work
        </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
          {
            mywork_data.map((Work,index)=>{
              return <img key={index} src={Work.w_img} alt=''/>
            })
          }
      </div>
      <div className="mywork_showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Work