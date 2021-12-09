import Link from "next/link";
import { useRouter } from 'next/router'
import {useEffect, useLayoutEffect} from "react";

function Index(props) {
    const router = useRouter()
    // console.log(router.query.c, router.query.id, router.query)

    useLayoutEffect(()=>{
       // console.log(window.location.pathname)
        console.log("useLayoutEffect")
    },[])

    useEffect(()=>{
        console.log("useEffect")
    },[])
    return (
        <>
            <div>Products page</div>
          Page:  {props.product.name}

            <br/>
        <Link href="/products">
        Products
        </Link>
        </>
    );
}

export async function getStaticPaths() {
    const response=await fetch("http://localhost:3000/api/products")
    const data = await response.json()
    return {
        paths:data.products.map(item=>({ params: { id: item.id } }))
        ,
        fallback:false
    }
}

    export async function getStaticProps(context) {
    const response=await fetch("http://localhost:3000/api/products")
    const data = await response.json()


    return {
        props: {
            product:data.products.filter(item=>item.id===context.params.id)[0]
        },
        revalidate:10
    }
}

/*
*
* export async function getServerSideProps(context) {
    const response=await fetch("http://localhost:3000/api/products")
    const data = await response.json()

    return {
        props: {
            product:data.products.filter(item=>item.id===context.params.id)
        }
    }
}
*/

export default Index;