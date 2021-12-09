import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home(props) {

    console.log(props)
  return (
    <div className={styles.container}>
        <Link href="/Naim">
            Go to Naim
        </Link>
        <br/>
        <Link href="/products">
        products
        </Link>
    </div>
  )
}

export async function getServerSideProps(context) {
   console.log(context)
    const response=await fetch("http://localhost:3000/api/hello")
    const data = await response.json()

    return {
        props: {
            context:"Naim",
            ...data
        } 
    }
}