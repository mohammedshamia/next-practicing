import Head from "next/head";
import Link from "next/link";

function Index(props) {
    console.log(props)
    return (
        <>
            <div>Products page</div>
            {props.products.map(item=><div key={item.id}>
                <Link href={`/products/${item.id}`}>
                    <a>Product: {item.name}</a>
                </Link>
            </div>)}
        </>
    );
}


//export async function getStaticProps(context) {
export async function getServerSideProps(context) {
    const response=await fetch("http://localhost:3000/api/products", {
        method:"GET"
    })
    const data = await response.json()

    return {
        props: {
            ...data
        }
    }
}

export default Index;