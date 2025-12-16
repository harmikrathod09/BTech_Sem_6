import React from 'react'
import Link from 'next/link';
import { log } from 'console';

export default async function studentByID({ params }: { params: { id: string } }) {
    const { id } = await params;
    let data = await (
        await fetch(`https://67c94c000acf98d070899d14.mockapi.io/student/${id}`)
    ).json();

    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg border-0 rounded-4 p-4">

                            <h1 className="text-center mb-4 fw-bold">student Details</h1>

                            <div className="mb-3">
                                <label className="fw-semibold text-secondary">Name</label>
                                <div className="fs-5">{data.name}</div>
                            </div>

                            <div className="mb-3">
                                <label className="fw-semibold text-secondary">Gender</label>
                                <div className="fs-5">{data.gender}</div>
                            </div>

                           
                            <div className="text-center mt-4">
                                <Link href="/student" className="btn btn-primary px-4">
                                    Back to student List
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
