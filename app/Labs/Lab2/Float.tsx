import Image from "next/image";

export default function Float() {
  return (
<div id="wd-float-divs">
 <h2>Float</h2>
 <div>
   <Image
  className="wd-float-right"
  width={150}
  height={30}
  alt="sample-para-1"
  src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
/>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   <Image
  className="wd-float-left"
  width={150}
  height={20}
  alt="sample-para-2"
  src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
/>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   <Image
  className="wd-float-right"
  width={150}
  height={20}
  alt="sample-para-3"
  src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
/>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   <Image
  className="wd-float-left"
  width={150}
  height={20}
  alt="sample-para-4"
  src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
/>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
   <div className="wd-float-done"></div>
 </div>
 <div id="wd-float-divs">
 <h2>Float</h2>
 <div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
     Yellow </div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
     Blue </div>
   <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
     Red </div>
   <Image className="wd-float-right" width={150} height={20} alt="starship-image" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
   <div className="wd-float-done"></div>
 </div>
</div>
</div>

)};
