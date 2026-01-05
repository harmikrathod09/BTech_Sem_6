import { EditUserAction } from '@/app/actions/editUser'
import prisma from '@/app/lib/prisma'
import Link from 'next/link'
import React from 'react'

async function EditUser({params}:{params:Promise<{id:number}>})  {
    const {id} = await params; 

     const data = await prisma.users.findFirst({ 
        where:{UserID:Number(id)}, 
        include:{ 
            tasks:true 
        } 
    }) 
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Edit User</h4>
                        </div>
                        <div className="card-body">
                            <form action={EditUserAction}>
                                <input 
                                    type="hidden" 
                                    name="UserID" 
                                    value={id}
                                />
                                <div className="mb-3">
                                    <label htmlFor="UserName" className="form-label">
                                        Username
                                    </label>
                                    <input 
                                        type="text" 
                                        name="UserName" 
                                        id="UserName"
                                        className="form-control" 
                                        placeholder="Enter username"
                                        defaultValue={data?.UserName || ''}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="Password" className="form-label">
                                        Password
                                    </label>
                                    <input 
                                        type="password" 
                                        name="Password" 
                                        id="Password"
                                        className="form-control" 
                                        placeholder="Enter password"
                                        defaultValue={data?.Password || ''}
                                        required
                                    />
                                </div>
                                
                                <div className="d-flex gap-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                    >
                                        Edit User
                                    </button>
                                    <Link 
                                        href="/user" 
                                        className="btn btn-secondary"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser