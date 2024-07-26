import React from 'react'

const DealsTemplate2 = ({el}) => {
  return (
    <div>
      <div class="deal deal2" >
      <div class="txt_deal">
        <h1>
          <font color="blue">{el.title}</font> <br />
          {el.description}
        </h1>
        <button>Learn more</button>
      </div>
      <div class="img_deal">
        <div class="container_img">
          <img src={el.img} alt="" />
          <h1 class="caption">Learn more</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DealsTemplate2
