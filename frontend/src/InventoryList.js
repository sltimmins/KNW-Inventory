import React, { useState, useRef, useLayoutEffect } from "react";

import './InventoryList.css'
import listings from "./dummyData.js";
import { CreateItemModal } from "./CreateItemModal";


function InventoryItem(props) {
  let price = props.listing.base_price;
  if (!price) {
    price = props.listing.current_bid
  }

  return (
    <tr className="itemRow">
      <th scope="row">{props.listing.name}</th>
      <td>{props.listing.quantity}</td>
      <td>{props.listing.locker}</td>
    </tr>
  );
}


export function InventoryList(props) {

  let items = [];
  listings.forEach(listing => {
    items.push((
      <InventoryItem listing={listing} />
    ))
  })

  const table = useRef();

  useLayoutEffect(() => {
    window.$(table.current).DataTable()
  }, [])

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1>ENGR 1357 Inventory</h1>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#listingModal">
          Add item
        </button>
      </div>
      <CreateItemModal />
      <div className="p-2 mt-5">
        <table className="table table-striped" ref={table}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Locker</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    </div>
  )
}
