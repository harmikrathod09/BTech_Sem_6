import prisma from '@/app/lib/prisma';
import React from 'react'
import Link from 'next/link';

export default async function UserDetails({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const data = await prisma.users.findFirst({ where: { UserID: Number(id) } })

    if (!data) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">User Not Found</h4>
                    <p>The user you're looking for doesn't exist.</p>
                    <hr />
                    <Link href="/user" className="btn btn-secondary">
                        Back to Users
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">User Details</h4>
                            <Link href="/user" className="btn btn-light btn-sm">
                                Back to Users
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <strong>User ID:</strong>
                                </div>
                                <div className="col-md-8">
                                    {data.UserID}
                                </div>
                            </div>
                            
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <strong>Username:</strong>
                                </div>
                                <div className="col-md-8">
                                    {data.UserName}
                                </div>
                            </div>

                            <hr />

                            <div className="d-flex gap-2 mt-4">
                                <Link 
                                    href={`/user/edit/${data.UserID}`} 
                                    className="btn btn-warning"
                                >
                                    Edit User
                                </Link>
                                <Link 
                                    href="/user" 
                                    className="btn btn-secondary"
                                >
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}