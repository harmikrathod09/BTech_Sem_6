"use client"

import React from 'react'
import Link from 'next/link'

export default function EditBtn({ id }: { id: number }) {
    return (
        <Link 
            href={`/user/edit/${id}`}
            className="btn btn-sm btn-primary"
        >
            Edit
        </Link>
    )
}