import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { IProduct } from '../components/Product'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Head from 'next/head'

import '../styles.scss'

interface IIndexProps {
  products: IProduct[]
}
const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="NmQ5MDI5YmEtMWM2MC00ZGU1LTliYmYtYTZjMzc3MWQ3NzhjNjM3MzgyMjkyMDUwMDk4Njgz"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {
        id: 'nextjs_godzilla',
        name: 'Godzilla Needle',
        price: 25.0,
        image: '../static/needle-thread.jpg',
        description:
          'The 5 inch needle is arguably one of the prettiest needle models. It is recognized by its large thread hole that can sew through leather.',
      } as IProduct,
      {
        id: 'nextjs_lbdragon',
        name: 'Light Blue Dragon',
        price: 35,
        image: '../static/light-blue-thread.jpg',
        description:
          'The light royal blue thread is a rarer and higher maintenance thread. It is named by its thick white and blue threads covering its sides that looks like dragon armor.',
      } as IProduct,
      {
        id: 'nextjs_redvelvet',
        name: 'Red Velvet',
        price: 7.5,
        image: '../static/black-bg-thread.jpg',
        description:
          "The Red Velvet is pretty, but interesting none the less. It's recognized by the color of its thread that has an appearance of luxury.",
      } as IProduct,
      {
        id: 'nextjs_orangesun',
        name: 'Orange Sun',
        price: 5.0,
        image: '../static/red-orange-thread.jpg',
        description:
          'By far the most common colored thread. You can recognize it by its long threads.',
      } as IProduct,
    ],
  }
}
export default Index
