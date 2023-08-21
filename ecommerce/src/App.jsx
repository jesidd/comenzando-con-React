import {products as initialProducts} from"./mocks/prodcuts.json"
import { Products } from "./components/Products"
import { useState } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useContext } from "react"
import { FiltersContext } from "./context/Filters"

function useFilerts(){
  
 /* const [filters, setFilters] = useState({
    category: 'all',
    minPrice:0,
  })*/

  const filters = useContext(FiltersContext)
  //const setFilters=() => {}


  const filterProducts = (products)=>{
    return products.filter(product =>{
      return (
        product.price >= filters.minPrice &&
        (
          filters.category == 'all' ||
          product.category == filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters}
}


function App() {
  const [products] = useState(initialProducts)
  const{filters,filterProducts,setFilters} = useFilerts()

  const filteredProducts = filterProducts(products)

  return (
    <>
     <Header changeFilters={setFilters}/>
     <Products products={filteredProducts} />
     <Footer filters={filters}/>
    </>
  )
}

export default App
