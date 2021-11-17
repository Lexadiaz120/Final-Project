import React from 'react'  
import './Rating'

function getStar(value){
    switch(value) { 
        default: 
        return 'nothing'
        case 0: 
        return "/grey-star.png";
        case 50: 
        return "/half-star.png";
        case 100:  
        return "/yellow star.png"
    }
} 
function getStars(value){
    switch (parseFloat(value)) {   
        default: 
        return [0,0,0,0,0]
        case 0.0: 
        return [0, 0, 0, 0, 0]; 
        case 0.5: 
        return [50, 0, 0, 0, 0]; 
        case 1.0: 
        return [100, 0, 0, 0, 0]; 
        case 1.5: 
        return [100, 50, 0,0,0]; 
        case 2.0: 
        return [100, 100, 0, 0 , 0] 
        case 2.5: 
        return [100, 100, 50, 0, 0] 
        case 3.0: 
        return [100, 100, 100, 0,0] 
        case 3.5: 
        return [100, 100, 100, 50, 0  ] 
        case 4.0: 
        return [100, 100, 100, 100,0] 
        case 4.5: 
        return [100, 100, 100, 50, 0] 
        case 5.0: 
        return [100, 100, 100, 100, 100]
    }
}

export default function Rating({value}){
    return(
        <div className="rating">
        
          {
              getStars(value).map(value => (
                  <img  src={getStar(value)} width={50} height={50} alt="star"
                  />
              ))
          }
        </div>
    )
}