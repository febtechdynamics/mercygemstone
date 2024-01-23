import React from 'react'
import { Link } from 'react-router-dom';
import whatsapp from "../../../public/images/whatsapp.png"

const Contact = () => {
  return (
    <>
        <section className="contact_section layout_padding">
    <div className="design-box">
      <img src="images/design-2.png" alt=""/>
    </div>
    <div className="container ">
      <div className="">
        <h2 className="">
          Contact Us
        </h2>
      </div>

    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div>
            <div className="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Workplace and Weekly Time</h2>
                </div>
                <p>
                  Our workplace is equipped with state-of-the-art facilities to ensure a conducive environment for gemstone cutting and processing.
                </p>
                <p>
                  Weekly Time Schedule:
                  <ul>
                    <li>Monday to Friday: 9:00 AM - 5:00 PM</li>
                    <li>Saturday: 10:00 AM - 3:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </p>
                <div>
                  <Link to="/whatsapp">
                    <span className='email_box'><img  src={whatsapp} alt="" /></span> Message us on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container">
          {/* <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style="border:0; width: 100%; height:100%" allowfullscreen></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Contact