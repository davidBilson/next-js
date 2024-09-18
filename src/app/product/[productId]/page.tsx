export default function ProductDetails({ params }: {
    params: {productId: string}
}) {
    return (
        <>
            <h1>Details about product {params.productId}</h1>
            <h4>Products page.tsx expected in layout</h4>
        </>
    )
}