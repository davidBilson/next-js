import Link from "next/link"

export default function ProductDetails({ params }: {
    params: {productId: string}
}) {
    return (
        <>
            <h1>Details about product {params.productId}</h1>
            <h4>Products page.tsx expected in layout</h4>
            <Link href={"1"}>Product 1</Link>
            <Link href={"2"}>Product 2</Link>
            <Link href={"3"}>Product 3</Link>
        </>
    )
}