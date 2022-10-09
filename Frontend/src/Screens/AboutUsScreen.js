import React from 'react'
import { Link } from 'react-router-dom';

export default function AboutUsScreen() {

  return (
    <div>
     <Link to='/'>Go to HomeScreen</Link>
     <div>
     GhalaMart is an online shopping fashion hub where people buy fashion commodities ranging from apparel to 
      shoes with a stupendous outreach for varities that encompass different age-groups.
      <p>We provide a retail based shopping experience to 
      millions of buyers online. And we strive to enhance business-customer relations from a customer centric standpoint.
      
      </p>
      <p>
        We deal in fashion line products that include Men's outfit varying from official wear, casual wear to gym outfit.
        Women apparel that extends from casual trends to official and gym fits.
        <p>
          Kids fashion is also available in varying sizes and syles. different shoe collections for Men, Ladies, kids and teens 
          is in ubandance too.
        </p>
      </p>
      <h>At GhalaMart we value customer satisfaction, feedback and intergrity.</h>
      
     </div>
     

    </div>
  )
}
