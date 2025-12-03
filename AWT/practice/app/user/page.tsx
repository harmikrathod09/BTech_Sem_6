import Link from 'next/link';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default async function userPage() {
    let data = await (await fetch('https://67c94c000acf98d070899d14.mockapi.io/User')).json();

    console.log(data);

    let formatedData = data.map((user: any) => (
        <tr key={user.id}>
            <td className="fw-semibold">{user.id}</td>
            <td>{user.name}</td>
            <td>
                <Link href={`user/userdetails/${user.id}`} className="btn btn-sm btn-primary">
                    View Details
                </Link>
            </td>
        </tr>
    ));

    return (
        <div className="container py-5">

            <div className="card shadow-lg border-0 rounded-4 p-4">

                <h1 className="text-center mb-4 fw-bold">User List</h1>

                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        {formatedData}
                    </tbody>
                </table>

            </div>
        </div>
    );
}
