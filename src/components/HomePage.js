import React from "react";
import cmd from "../images/cmd.PNG";
import one from "../images/one.jpg";
import two from "../images/six.jpg";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export default function HomePage(props) {
  return (
    <>
      <div className="container my-4">
        <ImageSlider />

        <div className="row">
          <div className="col-sm-4">
            <div className={`card bg-${props.mode} my-3`}>
              <div className="card-body">
                <h5 className="card-title">Home Page</h5>
                <img
                  src={cmd}
                  className="card-img-top"
                  alt="..."
                  height={"400px"}
                />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Veniam dolorum pariatur nemo
                  voluptate accusamus fugit aliquam doloribus blanditiis unde ex
                  animi vero, possimus mollitia fuga. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam aliquid illo, atque
                  error ea nisi sit, quidem tenetur fuga doloremque non.
                  Deserunt quos quo eum, ratione quisquam voluptas ad debitis
                  minima sint quis nihil dolor aut maxime omnis eveniet quam.
                </p>
                <Link to="/TextForm" className="btn btn-primary">
                  Go To Text Editor
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className={`card bg-${props.mode} my-3`}>
              <div className="card-body">
                <h5 className="card-title">Home Page</h5>
                <img
                  src={one}
                  className="card-img-top"
                  alt="..."
                  height={"400px"}
                />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Veniam dolorum pariatur nemo
                  voluptate accusamus fugit aliquam doloribus blanditiis unde ex
                  animi vero, possimus mollitia fuga. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam aliquid illo, atque
                  error ea nisi sit, quidem tenetur fuga doloremque non.
                  Deserunt quos quo eum, ratione quisquam voluptas ad debitis
                  minima sint quis nihil dolor aut maxime omnis eveniet quam.
                </p>
                <Link to="/TextForm" className="btn btn-primary">
                  Go To Text Editor
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className={`card bg-${props.mode} my-3`}>
              <div className="card-body">
                <h5 className="card-title">Home Page</h5>
                <img
                  src={two}
                  className="card-img-top"
                  alt="..."
                  height={"400px"}
                />
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Veniam dolorum pariatur nemo
                  voluptate accusamus fugit aliquam doloribus blanditiis unde ex
                  animi vero, possimus mollitia fuga. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam aliquid illo, atque
                  error ea nisi sit, quidem tenetur fuga doloremque non.
                  Deserunt quos quo eum, ratione quisquam voluptas ad debitis
                  minima sint quis nihil dolor aut maxime omnis eveniet quam.
                </p>
                <Link to="/TextForm" className="btn btn-primary">
                  Go To Text Editor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
