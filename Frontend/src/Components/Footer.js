import React from 'react'
import ScrollButton from './ScrollButton';
import { Link } from '../../node_modules/react-router-dom/index';




export default function Footer() {
 
  return (
   
    <div className='main'> 
            <div>
           <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
       <h1> Subscribe to our emails to get alerts on new arrivals</h1>
        </div>
             <div className='sub input'>
             <form className='search'>
               <input
               placeholder='submit email to receive updates'
               ></input>
                <button className="primaryx" type="submit">
              submit
             </button>
             </form>
             </div>
            
           </div>
            <div className='row us'>
            <ul>About Us
                <Link to='AboutGhalaMart'>
                <li>
                  <a href='#AboutGhalaMart'>Who are we?</a>
                </li>
                <li>
                  <a href='#condition'>condition of use</a>
                </li>
                </Link>
               </ul>
              {<column className='link'/>}
              <ul>Connect with us
                <Link to='AboutLeVigour'>
                  <li>
                  <a href='#facebook'  className='fa fa-facebook -f' >facebook</a>                 
                  </li>
                  <li>
                  <a href='#instagram'  className='fa fa-instagram' >instagram</a>
                  </li>
                  <li>
                  <a href='#twitter'  className='fa fa-twitter' >twitter</a>
                  </li>

                </Link>
               </ul>
              {<column className='link'/>}
              <ul>where to find us
                <Link to='location'>
                <li>
                 <a href='#location'>
                  Nairobi
                </a></li>
                <li>
                 <a href='#location'>
                  Mombasa
                </a></li>
                <li>
                 <a href='#location'>
                 Thika
                </a></li>
                 </Link>
               </ul>
              {<column className='link'/>}
              <ul>Terms of sales
                <Link to='AboutLeVigour'>
                <li>
                  <a href='#AboutLeVigour'>Delivery and Logistics</a>
                </li>
                <li>
                  <a href='#AboutLeVigour'>Return Policy</a>
                </li>
                </Link>
               </ul>
              {<column className='link'/>}
              <ul>need help?
                <Link to='AboutLeVigour'>
                <li>
                  <a href='#AboutLeVigour'>faq</a>
                </li>
                <li>
                  <a href='#AboutLeVigour'>chat with an online agent</a>
                </li>
                </Link>
               </ul>
              
            </div>
     
           
        <ScrollButton></ScrollButton>
     
        <div className='row footer'><i className='fa fa-copyright'>2022 GhalaMart.com , All rights reserved.</i> </div>

    </div> 
    
    )
}
