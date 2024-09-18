import Link from "next/link"


export const metadata = {
    title: "User's profile",
    description: "User's profile page"
}

export default function Profile() {
    return (
        <>
            <h1>Profile Page</h1>
            <Link href="/">Home</Link>
        </>
    )
}