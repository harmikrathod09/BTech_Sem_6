import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default async function userDetails({ params }: { params: { userid: string } }) {
  const { userid } = await params

  let data = await (
    await fetch(`https://67c94c000acf98d070899d14.mockapi.io/User/${userid}`)
  ).json();

  console.log(data);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 p-4">

            <h1 className="text-center mb-4 fw-bold">User Details</h1>

            <div className="mb-3">
              <label className="fw-semibold text-secondary">Name</label>
              <div className="fs-5">{data.name}</div>
            </div>

            <div className="mb-3">
              <label className="fw-semibold text-secondary">Email</label>
              <div className="fs-5">{data.email}</div>
            </div>

            <div className="mb-3">
              <label className="fw-semibold text-secondary">Contact</label>
              <div className="fs-5">{data.phone}</div>
            </div>

            <div className="text-center mt-4">
              <Link href="/user" className="btn btn-primary px-4">
                Back to User List
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
