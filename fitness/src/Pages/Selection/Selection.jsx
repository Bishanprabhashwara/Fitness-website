// BookStoreCarousel.js

import React, { useState,useEffect } from 'react';
import Swiper from 'swiper';
import './Selection.css';





const Selection = () => {
const [isActive,setActive]=useState(false);
const toggleStyle = () => {
    setIsActive(!isActive);
  };
  const dynamicClass = isActive ? 'active' : 'inactive';
    const schedules = ["./images/image0_0.jpg", "./images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png", "./images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png"];
   
   
   const [mySchedule, setMyProfession] = useState("");
   const redirectToAnotherPage = (link) => {
    {mySchedule === "./images/image0_0.jpg" ? (
        window.location.href = 'https://www.w3schools.com/'
        
    ):(
        <p></p>
    )
}
{mySchedule === "./images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png" ? (
    window.location.href = 'https://ekel.kln.ac.lk'
):(
    <p></p>
)}
{mySchedule ===  "./images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png" ? (
    window.location.href = 'https://chat.openai.com/'
):(
    <p></p>
)}
    
  };
  return (
    <>
    <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <h2> &#160;&#160;&#160;Select the schedule you like the most</h2>
                    <br />
                    <div
                        className="btn-group "
                        role="group"
                        aria-label="Basic example"
                        
                    >
                        
                        {schedules.map(schedule => (
                            <>
                            
                            <button
                                type="button"
                                key={schedule}
                                className={"btn btn-light border-dark"}
                                onClick={() =>redirectToAnotherPage(schedule)}
                                onMouseEnter={() => setMyProfession(schedule)} 
                                                             
                            >
                                
                                <img src= {schedule} width="100px" height="200px" className="img-thumbnail"/>
                                
                            </button>
                            </>
                            
                        ))}
                        
                    </div>
                </div>
                <div className="col text-center discription">
                    <p></p>
                    <p>
                        {mySchedule === "./images/image0_0.jpg" ? (
                            <p className='description2'><img src= "./images/image0_0.jpg" width="75%" height="200px" className="img-thumbnail"/><br/>Greetings! Daily routine: Exercise, work/study, meals, creative break, tasks, relax.</p>
                            
                        ):(
                            <p></p>
                        )}
                        {mySchedule === "./images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png" ? (
                            <p className='description2'><img src= "./images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png" width="75%" height="200px" className="img-thumbnail"/><br/>Intermediate routines offer enhanced structure with dedicated time blocks, fostering productivity, well-rounded activities, and improved balance.</p>
                        ):(
                            <p></p>
                        )}
                        {mySchedule ===  "./images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png" ? (
                            <p className='description2'><img src= "./images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png" width="75%" height="200px" className="img-thumbnail"/><br/>Welcome! Advanced schedule integrates strategic planning, specialized activities, skill development, reflection, fostering peak performance, and well-being</p>
                        ):(
                            <p></p>
                        )}
                        
                    </p>
                    
                </div>
                <div className="col text-center move-div">
                    <p>
                        {mySchedule === "./images/image0_0.jpg" ? (
                            <p className='animated-text'>Basic</p>
                            
                        ):(
                            <p></p>
                        )}
                        {mySchedule === "./images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png" ? (
                            <p className='animated-text'>Intermediate</p>
                        ):(
                            <p></p>
                        )}
                        {mySchedule ===  "./images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png" ? (
                            <p className='animated-text'>Advanced</p>
                        ):(
                            <p></p>
                        )}
                        
                    </p>
                    
                </div>
            
    </div>
<div className='trapezoid'>

</div>
    </>
  )
};



export default Selection;
