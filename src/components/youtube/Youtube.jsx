import React from 'react'

const Youtube = () => {
  return (
    <>
        <section className="ring_section layout_padding">
    <div className="design-box">
      <img src="images/design-1.png" alt=""/>
    </div>
    <div className="container">
      <div className="ring_container layout_padding2">
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/97cthX19OTA?si=28yIMAGB8RafCp3a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {/* <div className="row">
          <div className="col-md-5">
            <div className="detail-box">
              <h4>
                special
              </h4>
              <h2>
                Wedding Ring
              </h2>
              <a href="">
                Buy Now
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="img-box">
              <img src="images/ring-img.jpg" alt=""/>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
    </>
  )
}

export default Youtube