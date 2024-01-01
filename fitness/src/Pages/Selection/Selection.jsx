// BookStoreCarousel.js

import React, { useState,useEffect } from 'react';
import Swiper from 'swiper';
import './Selection.css';





const Selection = () => {
    const schedules = ["./images/image0_0.jpg", "./images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png", "./images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png"];
   
   
   const [mySchedule, setMyProfession] = useState("");
  return (
    <>
    <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <h2>Select the schedule you like the most</h2>
                    <br />
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {schedules.map(schedule => (
                            <button
                                type="button"
                                key={schedule}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMyProfession(schedule)}
                            >
                                
                                <img src= {schedule} width="100px" height="200px" class="img-thumbnail"/>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col text-center">
                    <p>{mySchedule}</p>
                    <p>
                        {mySchedule === "./images/image0_0.jpg" ? (
                            <p>basic</p>
                            
                        ):(
                            <p></p>
                        )}
                        {mySchedule === "./images/intermediate me 2f4b001f-5924-40d2-976c-9eb0629931a5.png" ? (
                            <p>intermediate</p>
                        ):(
                            <p></p>
                        )}
                        {mySchedule ===  "./images/advance mens gy 6f3a1f61-a965-4060-a28e-ef1518c6964a.png" ? (
                            <p>advance</p>
                        ):(
                            <p></p>
                        )}
                        
                    </p>
                    
                </div>
            
    </div>

    </>
  )
};

export default Selection;
