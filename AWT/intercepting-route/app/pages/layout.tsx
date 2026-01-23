import Link from 'next/link'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Link href="/pages/home">Home</Link> &nbsp;
            <Link href="/pages/about">About</Link> &nbsp;
            <Link href="/pages/contact">COntact</Link> &nbsp;
            <Link href="/login">Login</Link> &nbsp;
            <br />

        </div>
    )
}
