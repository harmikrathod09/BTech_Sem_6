import React from 'react'
import Image from 'next/image'

function AboutPage() {
  return (
    <div className='row'>
      <div className='col card p-4 m-4 text-center flex align-center'>
        <h1 >About Us</h1>
        <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quaerat? Corrupti magni optio eaque animi inventore consectetur sequi, ipsam eligendi quia dolore atque eveniet non aperiam placeat repellat impedit iure.</p>
        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis vel amet, quisquam, itaque aspernatur libero commodi sint delectus perferendis provident natus aut porro excepturi. Quae ipsum quod sapiente tempora!</p>
      </div>
      <div className='col text-center'>
        <Image src="/images/about.jpg" alt="About Us" width={600} height={400} className="img-fluid rounded" />
      </div>
    </div>
  )
}

export default AboutPage
