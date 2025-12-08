import Image from "next/image";

export default function Home() {
  return (
    // <div classNameName="flex justify-center items-center h-screen">
    //   <h1 classNameName="text-5xl text-sky-500 text-center">Hello World from Next Application</h1>
    // </div>

    <div className="container-fluid">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/image-1.jpg" className="d-block w-100 bg-dark" alt="..." width={100} height={600}/>
          </div>
          <div className="carousel-item">
            <img src="/images/image-2.jpg" className="d-block w-100" alt="..." width={100} height={600}/>
          </div>
          <div className="carousel-item">
            <img src="/images/image-3.jpg" className="d-block w-100" alt="..." width={100} height={600}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
