import React from 'react'
import Homebackground from './Homebackground';
import About from './About';
function Main() {
    
      
  return (
    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-gap-4 h-screen">
  
<About />
<Homebackground/>
</div>  

  )
}

export default Main