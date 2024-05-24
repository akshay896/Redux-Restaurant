import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Pagination, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/slices/restaurantSlice";

function Home() {
  const dispatch = useDispatch();
  const { allRestaurants, loading, error } = useSelector(
    (state) => state.RestaurantReducer
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 6 items per page for the first page

  // Calculate the total number of pages
  const totalPages = Math.ceil(allRestaurants?.length / itemsPerPage);

  // Get current page items
  const currentItems = allRestaurants?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage === 1 ? currentPage * itemsPerPage : undefined
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header insideHome={true} />
      <div className="card-area">
        {loading ? (
          <div className="text-center mt-5 fw-bolder">
            <Spinner animation="border" variant="dark" /> Loading...
          </div>
        ) : (
          <div className="wrapper">
            <div className="box-area">
              {currentItems?.length > 0 ? (
                currentItems?.map((restaurant) => (
                  <div key={restaurant.id} className="box">
                    <img src={restaurant?.photograph} alt="" />
                    <h4 style={{fontFamily:'Dancing Script',fontWeight:'700'}} className="text-center mt-3">{restaurant?.name}</h4>
                    <div className="overlay">
                      <h3>{restaurant?.name}</h3>
                      <p>Cusine: {restaurant?.cuisine_type}</p>
                      <p>Neighborhood: {restaurant?.neighborhood}</p>
                      <Link to={`/${restaurant?.id}/details`} className="btn btn-light">
                        Preview
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="fw-bolder text-center mt-5 mb-5 text-danger">
                  Restaurant Not Found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Pagination className="d-flex justify-content-center">
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item 
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default Home;