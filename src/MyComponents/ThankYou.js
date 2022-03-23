import React from 'react'

export const ThankYou = () => {
    return (
        <>
        <div className="te" style="height: 40px;">
        <ul className="nav">
            <li style="margin-top: 7px;" className="nav-item">   
              <a style="color: white;" href="index.html">Food's Restaurant</a>
            </li>
            <div className="icons notification"><a style="color: black;" href="thankyou.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                </svg>
                <span className="badge">2</span>
                </a>
            </div>
            
          </ul>
    </div>
    <br />
            <div className="container">
        <div className="row">
            <div className="col">
                <div className="card" style="width: 300px;">
                    <img src="Hamburger.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Hamburger</h5>
                        <p className="card-text">Price: 200</p>
                        <a className="btn btn" style="background-color: #3A41CF; color: white; width: 60px;" href="#">+</a>
                        <a className="btn btn" style="background-color: #ccccce; color: black; width: 60px;" href="#">-</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style="width: 300px;">
                    <img src="Fries.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Fries</h5>
                        <p className="card-text">Price: 100</p>
                        <a className="btn btn" style="background-color: #3A41CF; color: white; width: 60px;" href="#">+</a>
                        <a className="btn btn" style="background-color: red; color: black; width: 60px;" href="#">-</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style="width: 300px;">
                    <img src="Coke.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Coke</h5>
                        <p className="card-text">Price: 50</p>
                        <a className="btn btn" style="background-color: #3A41CF; color: white; width: 60px;" href="#">+</a>
                        <a className="btn btn" style="background-color: red; color: black; width: 60px;" href="#">-</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card" style="width: 300px;">
                    <img src="Pepsi.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pepsi</h5>
                        <p className="card-text">Price: 50</p>
                        <a className="btn btn" style="background-color: #3A41CF; color: white; width: 60px;" href="#">+</a>
                        <a className="btn btn" style="background-color: #ccccce; color: black; width: 60px;" href="#">-</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}