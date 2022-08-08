import React from "react";
import "./Blog.css";
import Blog1 from "../../img/blog-01.jpg";
import Blog2 from "../../img/blog-02.jpg";
import Blog3 from "../../img/blog-03.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="blog">
      <div className="heading">
        <h1 className="heading">Мои работы</h1>
        <p className="heading p__color">Эти проекты выполнены на React.js</p>
        <p className="heading p__color">
          с подключением Ant Design и Material-UI
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Front-end разработка</h5>
                <h4 className="project__text">Staff Pro</h4>
                <a
                  href="https://github.com/bbkshow/project-staff"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  GIT
                </a>
                <a
                  href="https://staff-pro.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  WEB
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Front-end разработка</h5>
                <h4 className="project__text">Basketball BIG3</h4>
                <a
                  href="https://github.com/bbkshow/babak-basketball-main"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  GIT
                </a>
                <a
                  href="http://react-basketball.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  WEB
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Вёрстка</h5>
                <h4 className="project__text">Landing Bike</h4>
                <a
                  href="https://github.com/bbkshow/landing-bike"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  GIT
                </a>
                <a
                  href="https://landing-bike.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  WEB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
