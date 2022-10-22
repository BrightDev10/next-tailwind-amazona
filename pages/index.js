
import Layout from '../components/Layout'
import Productitem from '../components/Productitem'
import data from '../utils/data'



export default function Home() {
  return (
   <Layout title='Home Page'>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {data.products.map((product) => (
        <Productitem product={product} key={product.slug}></Productitem>
      ))}
    </div>
  </Layout>
  )
}
