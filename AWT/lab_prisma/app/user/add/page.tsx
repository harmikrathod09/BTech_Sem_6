import { AddUserAction } from '@/app/actions/addUser'
import Link from 'next/link'
import React from 'react'

function AddUser() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Add New User</h4>
                        </div>
                        <div className="card-body">
                            <form action={AddUserAction}>
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
                                        required
                                    />
                                </div>
                                
                                <div className="d-flex gap-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                    >
                                        Add User
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

export default AddUser