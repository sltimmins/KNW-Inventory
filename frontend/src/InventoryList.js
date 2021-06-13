import React, { useState, useRef, useEffect, useLayoutEffect, } from "react";
import './InventoryList.css'
import { capitalize } from './utils'
import { CreateItemModal } from "./CreateItemModal";


export function InventoryItem(props) {
  let [compare, setCompare] = useState(0)

  //We dont want to call rerender if this is our first time
  //Only cause table to rerender when something has actually changed
  //Done beacuse datatables makes some things harder than they should 
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    props.redraw()
  }, [compare])

  const handleRowClick = (e) => {
    //Datatables injects a before + if we are in responsive mode
    //If it is displayed and was clicked, return so it can be expanded
    const before = window.getComputedStyle(e.target, "before");
    const val = before.getPropertyValue("content")
    if (val != "none") {
      return
    }
    props.setListing(props.listing)
  }

  return (
    <tr className="itemRow" onClick={(e) => handleRowClick(e)}>
      <th scope="row">{props.listing.name}</th>
      <td>{props.listing.quantity}</td>
      <td>{props.listing.locker}</td>
      <td></td>
    </tr>
  );
}


export function InventoryList({ setListing, listings }) {
  let filter = false

  let init = useRef(false);
  const redraw = () => {
    //If we have not created instance
    //Do that now
    if (!init.current) {
      setup()
      init.current = true;
    }

    //Otherwise just update it with row data
    const dTable = window.$(table.current).DataTable()
    if (dTable) {
      dTable.rows().invalidate().draw()
    }
  }

  //Make the datatables instance
  const setup = () => {
    window.$(table.current).DataTable({
      responsive: true,
      dom: 'Bfrtip',
      columnDefs: [
        {
          "targets": [3],
          "visible": false,
          "searchable": true,
        }
      ]
    })
  }

  let items = []

  listings.inventory.forEach(listing => {
    items.push(
      <InventoryItem key={listing.id} listing={listing} redraw={() => redraw()} />
    )
  })

  useLayoutEffect(() => {
    //Do we have listings? 
    //Need after render for datatables
    if (items.length > 0) {
      redraw()
    }
  })

  const table = useRef();

  return (
    <div className="container mt-5">
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
