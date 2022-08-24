import React, { useState } from 'react';

function CardAction (props) {
    /*
    declare the state called likeValues and initialize it with the value of props.likes
    use the function changeLikeValues whenever the value of likeValues needs to be 
    updated.
    */
    const [likeValues, changeLikeValues] = useState(parseInt (props.likes))
    const [dislikeValues, changedisLikeValues] = useState(parseInt (props.dislikes))
 
    const changeLikes=()=>{
        //change the value of state likeValues using
        //changeLikeValues
        changeLikeValues(likeValues + 1)      
    }

    const changedisLikes=()=>{
        changedisLikeValues(dislikeValues + 1)
    }
    return(
         <div>
             <button onClick= {changeLikes}>Likes</button>
              &nbsp; 
              &nbsp;  
             {likeValues}
             <button onClick= {changedisLikes}>Dislikes</button>
             &nbsp;
             {dislikeValues}  
         </div>
     );
}


export default CardAction;