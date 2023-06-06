import React from 'react'

function Homebackground() {
    const divStyle = {
        backgroundImage: `url(${require('../pexels-jaspereology-3199036.jpg')})`,
      };
  return (
    
    <div className=" h-screen bg-cover bg-no-repeat" style={divStyle}></div>
    )
}

export default Homebackground