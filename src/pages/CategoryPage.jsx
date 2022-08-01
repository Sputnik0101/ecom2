import React from 'react'
import Products from '../components/products'
import Footer from '../components/footer'
import Header from '../components/header'

function CategoryPage() {
  return (
    
    <div>
      <Header/>
        <h1> Snacks </h1>
        <div>
            <p>Filter by</p>
            <select>
                <option selected disabled>Price</option>
                <option>Low to High</option>
                <option>High ti Low</option>
            </select>
        </div>

        <Products/>

        <Footer/>

    </div>
  )
}

export default CategoryPage