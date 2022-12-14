import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, servicePrice, serviceURL, serviceDetails } =
    service;
  return (
    <div>
      <div className="card w-full h-[525px] bg-[#f7e9f3] shadow-xl p-4 border-2 border-pink-900">
        <figure className="cursor-pointer">
          <PhotoProvider>
            <PhotoView src={serviceURL}>
              <img className="" src={serviceURL} alt="..." />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body p-0 ">
          <h2 className="card-title py-5 text-2xl font-bold text-pink-900">
            {serviceName}
          </h2>
          <p className="text-start text-gray-600 pb-5">
            {serviceDetails.length > 100 ? (
              <>{serviceDetails.slice(0, 100) + "..."}</>
            ) : (
              serviceDetails
            )}
          </p>
          <p className="text-start text-gray-600 font-medium pb-5">
            Price: {servicePrice} BDT
          </p>
          <div className="card-actions justify-center w-full mb-0">
            <Link
              to={`/services/${_id}`}
              className="btn w-full mb-0 bg-transparent text-gray-800 text-lg normal-case hover:text-white hover:bg-pink-800 border-pink-900"
            >
              <button className="">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
