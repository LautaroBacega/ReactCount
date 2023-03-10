import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from './Loader'

const ItemListContainer = () => {

  const {categoryID} = useParams()

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = () => {
    setTimeout(() => {
      fetch('../local.json')
        .then(res => res.json())
        .then(data => {
          setProducts(data)
          setLoading(false)
        })
    }, 500);
  }

  const getProductsByCategory = (category) => {
    setTimeout(() => {
      fetch('../local.json')
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          const filteredProducts = data.filter(product => product.category === category)
          setProducts(filteredProducts)
        })
    }, 500);
  }

  useEffect(() => {
    setLoading(true)
    if (!categoryID) {
      getProducts()
    }else{
      getProductsByCategory(categoryID)
    }
  }, [categoryID])
  

  return (
    <div className='flex justify-center'>
      {
        loading ?
        <Loader/>
        :
        <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer