import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="home_container">
      <section className="hero_section">
        <h1>
          Securely download files to the cloud.
          <br /> Private. Fast. Always online.
        </h1>
        <Link to={"/signup"} className="hero_act_btn">
          Sign Up
        </Link>
        <div className="clouds_wrap">
          <img
            src={process.env.PUBLIC_URL + "/assets/hero.png"}
            className="hero_image"
            alt="BTVaults logo"
          />
        </div>
      </section>

      <section className="features">
        <div className="feature_item">
          <div className="wrap_icon">
            <span className="icon_cloud_download"></span>
          </div>
          <h2>Your files, your way — whenever, wherever!</h2>
          <p>
            Experience the freedom of cloud storage, letting you access your
            files on any device — be it a computer, smartphone, or tablet —
            anytime you need them!
          </p>
        </div>
        <div className="feature_item">
          <div className="wrap_icon">
            <span className="icon_window"></span>
          </div>
          <h2>Skip the downloads — just browse!</h2>
          <p>
            With BTVaults, all you need is your favorite browser. Enjoy seamless
            access without the hassle of installing extra software.
          </p>
        </div>
      </section>

      <section className="previews">
        <div className="cloud_container">
          <h1>My Cloud</h1>
          <div className="cloud_card">
            <div className="card_body">
              <h2>Explore Your Files</h2>
              <p>
                Effortlessly manage and view all your downloaded files in a
                single, convenient location.
              </p>
              <Link to={"/my-dashboard"} className="cloud_act_btn">
                Go to My Cloud
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section">
        <h2>Get in Touch</h2>
        <div className="contact_container">
          <div className="form_column">
            <form>
              <div className="form_group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form_control"
                />
              </div>
              <div className="form_group">
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form_control"
                />
              </div>
              <div className="form_group">
                <label>Message</label>
                <textarea
                  rows={3}
                  placeholder="Your message"
                  className="form_control"
                ></textarea>
              </div>
              <button type="submit" className="act_btn">
                Submit
              </button>
            </form>
          </div>
          <div className="info_column">
            <h4>Contact Information</h4>
            <p>Email: support@example.com</p>
            <p>Phone: +234 123 4567</p>
            <p>Address: Ikorodu, Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
