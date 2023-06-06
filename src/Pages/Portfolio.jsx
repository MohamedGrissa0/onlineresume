import React from 'react';
import Card from '../Components/Card';

export default function Portfolio() {
  return (
    <div className="text-white  p-4">
      <h1 className='text-3xl mb-3 flex justify-center items-center'>Projects</h1>
  <div className="projects grid  bg-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <Card imageSrc={"../assets/online.png"} title="ONLINE PORTFOLIO" link="https://mohamedgrissa0.github.io/Portfolio/" />
    <Card imageSrc={"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-21.webp"} title="REVIEWHUB" link="https://www.google.com" />
    <Card imageSrc={"../assets/tindog.png"} title="TINDOG" link="https://mohamedgrissa0.github.io/TinDog/" />
    <Card imageSrc={"../assets/diece.png"} title="DIECE GAME" link="https://mohamedgrissa0.github.io/diecegame/" />
    <Card imageSrc={"../assets/zilla.png"} title="GODZILLA PORTFOLIO" link="https://mohamedgrissa0.github.io/codezilla-portfolio/" />
   </div>
   <div className="tech grid  bg-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <img src={"../assets/pngwing.com.png"} alt=""/>
    <img src={"../assets/pngwing.com.png"} alt=""/>
    <img src={"../assets/pngwing.com.png"} alt=""/>
    <img src={"../assets/pngwing.com.png"} alt=""/>

   </div>
    </div>
  );
}
