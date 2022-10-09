import { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';

function ScrollButton () {
    const [ScrollButton, setScrollButton] = useState(false);

    useEffect(() =>{
     window.addEventListener(`scroll`,()=>{
         if(window.scrollY >100) {
             setScrollButton(true)
         } else{
            setScrollButton(false) 
         }
     })
     return () =>{
         window.removeEventListener('scroll')
     }
    }, [])
    const scrollup = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <div>{
            ScrollButton &&
            <IconButton style={{
                position:'fixed',
                color:'grey',
                bottom:'50px',
                right:'50px',
                height:'40px',
                width:'30px',
                fontSize:'50px',
            }} onClick={scrollup}> ^
                 
            </IconButton>}
         
        </div>
    )
}

export default ScrollButton
