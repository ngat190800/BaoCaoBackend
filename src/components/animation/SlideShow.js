import React from 'react'

    function Slideshow () {
      return (
  
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img src="https://sfarm.vn/wp-content/uploads/2019/06/DGT-Cac-tieu-chuan-san-xuat-rau-pho-bien-tai-vn-1.jpg" alt="Los Angeles" />
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZlM82gvrkkQdPT9-5zkPMoimbUqswj2jVQ&usqp=CAU" alt="Chicago" />
            </div>
            <div className="item">
              <img src="https://lh3.googleusercontent.com/proxy/AVFD2KS4T2QIeXPJ0nfxxS5OaGGsrm7nvzqXIDaXdFtm09A-3u4sBth9XrtG-tDVnGYhhB84Bj4lT3CTXJyHcPYZHASHJC4Yx2_8Sw8vBFAkG01a507sLJesD2zPlccMB6JlyXZHqOvwhT1xPpMrZpnDfMv7b7CGHERbPj5m8nUP7t9bcRxXo1tIkA" alt="New York" />
            </div>
          </div>
          {/* Left and right controls */}
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      );
    }
 
  export default Slideshow;