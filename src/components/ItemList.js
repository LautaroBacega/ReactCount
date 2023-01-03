import React from 'react'
import Item from './Item';

const ItemList = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-20 bg-black'>
      {
        products.map(product => <Item key={product.id} {...product}/>)
      }
    </div>
  )
}

export default ItemList