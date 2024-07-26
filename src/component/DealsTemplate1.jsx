import React from 'react'

const DealsTemplate1 = ({el}) => {
  return (
    <div>
      <div className="deal" data-aos="fade-right">
      <div className="img_deal">
        <div className="container_img">
          <img src={el.img}alt="" />
          <h1 className="caption">Learn more</h1>
        </div>
      </div>
      <div className="txt_deal">
        <h1>
          <font color="blue">{el.title}</font> <br />
          {el.description}
        </h1>
        <button>Learn more</button>
      </div>
    </div>
    </div>
  )
}

export default DealsTemplate1
