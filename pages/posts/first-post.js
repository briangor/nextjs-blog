import Link from "next/link"

export default function FirstPost() {
    return (
        <>
            <h1>Fist Post</h1>
            <h2>
                <Link href='/'>Go back to home</Link>
            </h2>
        </>
    );
}