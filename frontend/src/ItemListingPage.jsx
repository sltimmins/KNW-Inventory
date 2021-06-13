import React, { useContext, useState } from "react";
import { View } from 'react-native'
import { Item } from './models/Item'
import axios from "axios";
import { AppContext } from "./AppContext";
import { capitalize } from "./utils";
import './ItemListingPage.css'

export function ItemListingPage({ listing, setListing, refresh }) {
  let [bannerMessage, setBannerMessage] = useState("");

  let id = listing.id;
  let name = listing.name;
  let quantity = listing.quantity;
  let locker = listing.locker;
  let onOrder = listing.onOrder;
  let orderArrivalDate = new Date(listing.orderArrivalDate);
  let link = listing.link;

  let { baseURL } = useContext(AppContext);

  let banner = <></>;
  if (bannerMessage) {
    banner = (
      <div className="alert alert-primary" role="alert">
        {bannerMessage}
      </div>
    );
  }

  let edit = (
    <button
      type="button"
      className="btn btn-primary m-4 float-end"
      data-bs-toggle="modal"
      data-bs-target="#settingsModal"
    >
      Edit Item
    </button>
  );

  let quantityDisplay = (
    <h4>Quantity: {quantity}</h4>
  )

  let lockerDisplay = (
    <h4>Locker: {locker}</h4>
  )

  let onOrderDisplay = (
    <div className={`alert-wrapper`}>
      <h2>On Order</h2>
    </div>
  )

  let orderArrivalDateDisplay = (
    <h4>Order Arrival: {orderArrivalDate.toISOString().substring(0, 10)}</h4>
  )

  // {listing.item.price}
  return (
    <>
      {banner}
      <button
        type="button"
        className="btn btn-primary btn-md m-4 float-none"
        onClick={() => setListing(null)}
      >
        Back To Inventory
      </button>
      {edit}
      {/* <SettingsModal
        listing={listing}
        refresh={refresh}
        setListing={setListing}
        reset={() => setListing(null)}
      /> */}
      <div className="jumbotron container bg-light mt-3">
        <div className="container mt-3">
          <div style={{ textAlign: "center" }}>
              <h1 className="center">{capitalize(name)}</h1>
              <h1>
                <span className="badge badge-success badge-lg"></span>
              </h1>
              <div></div>
              <p className="lead">{quantityDisplay}</p>
              <div>
              </div>
              <h1>
                <span className="badge badge-success badge-lg"></span>
              </h1>
              <p className="lead">{lockerDisplay}</p>
              <div>
              </div>
              {onOrder === 1 && 
                <div className="center">
                  <h1>
                    <span className="badge badge-success badge-lg"></span>
                  </h1>
                  <p className="center">{onOrderDisplay}</p>
                  <div>
                  </div>
                </div>}
              {onOrder === 1 &&
                <div className="center">
                  <h1>
                    <span className="badge badge-success badge-lg"></span>
                  </h1>
                  <p className="center">{orderArrivalDateDisplay}</p>
                  <div>
                  </div>
                </div>}
          </div>
        </div>
      </div>
    </>
  );
}
