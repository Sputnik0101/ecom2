import React from 'react'
import { ApiTopProducts } from '../apifolder/TopProductsApi'
import product from './product';
function products() {
 
  return ( <div className='flex flex-wrap p-5 items-center justify-center'>
    
      {
        ApiTopProducts.map((product, index)=>(
          <product item={product} key={index}/>
        ))
      }

    </div>
  )
}

export default products