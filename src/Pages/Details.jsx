import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Details=()=> {
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if(localStorage.getItem("allRestaurants")){
      const allRestaurants = JSON.parse(localStorage.getItem("allRestaurants"));
      setRestaurant(allRestaurants.find((item)=>item.id == id))
    }
    
  }, []);
console.log(restaurant);


  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <div>
      <Header />
      <div className={showOffcanvas ? "blur-background":""}>
        <div style={{ marginTop: "100px" }} className="container mb-5 d-flex justify-content-around">
          {restaurant ? (
            <>
              <div style={{ border: "none" }} className="card w-25">
                <img className="rounded-3" src={restaurant.photograph} alt={restaurant.name} />
              </div>
              <div className="w-50 mt-3">
                <h1 style={{ fontSize: "70px", fontFamily: "Dancing Script", fontWeight: "900" }}>
                  {restaurant.name}
                </h1>
                <h5 className="mt-4">{restaurant.neighborhood}</h5>
                <h5>{restaurant.address}</h5>
                <h5 className="mt-5">Cuisine: {restaurant.cuisine_type}</h5>
                <div className="d-flex align-items-center">
                  <button onClick={handleShowModal} className="btn btn-warning mt-3 me-2">
                    Operating Hours
                  </button>
                  <button onClick={handleShowOffcanvas} className="btn btn-warning mt-3">
                    Reviews
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      <Modal className="modal-backdrop-blur" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="m-auto">Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {restaurant?.operating_hours ? (
            <ul>
              {Object.entries(restaurant.operating_hours).map(([day, hours]) => (
                <li className="mt-3" key={day}>
                  <strong>{day}:</strong> {hours}
                </li>
              ))}
            </ul>
          ) : (
            <p>No operating hours available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bolder fs-3">Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {restaurant?.reviews ? (
            restaurant.reviews.map((review, index) => (
              <div key={index} className="mb-3">
                <h5 className="fw-bold"><i className="fa-solid fa-user text-primary border p-2 rounded-5 me-2"></i>{review.name}</h5>
                <p >{review.comments}</p>
                <small className="fw-bold">Rating: {review.rating}</small>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Details;