import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { Store } from '../../utils/Store'

export default function ProductScreen() {
    const[state, dispatch] = useContext(Store)


    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find((x) => x.slug === slug)
    if(!product){
        return <div>Product not found</div>
    }

const addToCartHandler = () => {
    dispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity: 1 } })
}

  return (
    <Layout title={product.name}>
       <div className='py-5' >
        <Link href='/'>
            back to homepage
        </Link>
        <div className='grid md:grid-cols-4 md:gap-3'>
            <div className='md:col-span-2'>
                <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                layout='responsive'
                >
                </Image>
            </div>
            <div>
                <ul>
                    <li>
                        <h1 className='text-lg'>{product.name}</h1>
                    </li>
                    <li>
                        Category: {product.category}
                    </li>
                    <li>
                        Brand: {product.brand}
                    </li>
                    <li>
                        {product.rating} of {product.numReviews} Reviews
                    </li>
                    <li>
                        Description: {product.description}
                    </li>
                </ul>
            </div>
            <div>
                <div className=' card p-5'>
                    <div className='flex mb-2 justify-between'>
                        <div>Price</div>
                        <div>£{product.price}</div>
                    </div>
                    <div className='flex mb-2 justify-between'>
                        <div>Status</div>
                        <div>{product.countInstock > 0 ? 'In stock' : 'Out of stock'}</div>
                    </div>
                    <button className='primary-button w-full' onClick={addToCartHandler} >Add to cart</button>
                </div>
            </div>
        </div>
       </div>
    </Layout>
  )
}
