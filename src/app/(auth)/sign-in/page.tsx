'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button className="bg-red-500 py-1 px-3 rounded-md text-center align-middle" onClick={() => signIn()}>Sign in</button>
        </>
    )
}