import React from 'react'
import prisma from '../lib/prisma'
import { users } from '../generated/prisma/browser'
import Link from 'next/link'
import DeleteBtn from '../ui/deleteBtn'

export default async function UserPage() {
    const data = await prisma.users.findMany()

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Users</h2>
                <Link href={"/user/add"} className="btn btn-primary">
                    Add User
                </Link>
            </div>
            
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((u: users) => (
                                <tr key={u.UserID}>
                                    <td>{u.UserID}</td>
                                    <td>{u.UserName}</td>
                                    <td>
                                        <Link 
                                            href={`/user/${u.UserID}`} 
                                            className="btn btn-sm btn-info text-white"
                                        >
                                            Details
                                        </Link>
                                    </td>
                                    <td>
                                        <DeleteBtn id={u.UserID}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}