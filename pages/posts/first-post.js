import Link from "next/link"
import Head from "next/head";

export default function FirstPost() {
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>
            <h1>Fist Post</h1>
            <h2>
                <Link href='/'>Go back to home</Link>
            </h2>
        </>
    );
}