import Link from 'next/link';
import React from 'react'

export default async function student() {
    let data = await (await fetch("https://67c94c000acf98d070899d14.mockapi.io/student")).json();

    const formatedData = data.map((student: { id: number; name: string; }, index: number) => (
        <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>
                <Link href={`/student/${student.id}`} className="btn btn-primary btn-sm">
                    View Details
                </Link>
            </td>
        </tr>
    ));

    return (
        <div>
            <div className="container py-5">

                <div className="card shadow-lg border-0 rounded-4 p-4">

                    <h1 className="text-center mb-4 fw-bold">student List</h1>

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
        </div>
    )
}
