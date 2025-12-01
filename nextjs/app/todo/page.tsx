import Link from "next/link";

export default async function () {
    return (
        <div className="text-lg w-screen h-screen flex items-center justify-center">
            <div>Todo application
                <br />
                <Link href="/signin">Sign in</Link>
                <br />
                <Link href="/signup">Sign up</Link>
            </div>
        </div>
    )
}