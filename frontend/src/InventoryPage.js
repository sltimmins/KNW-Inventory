import React, { useState, useContext, useEffect } from "react";
import './InventoryList.css'
import { CreateItemModal } from "./CreateItemModal";
import { InventoryList, InventoryItem } from "./InventoryList";
import { ItemListingPage} from './ItemListingPage';
import { AppContext } from "./AppContext";
import axios from "axios";

export function InventoryPage({ item }) {
    const { baseURL } = useContext(AppContext);
    
    let [show, setShow] = useState(false);
    let [listing, setListing] = useState(null);
    let [items, setItems] = useState({ 'inventory': []});
    
    const getListings = () => {
        axios.all([
            axios.get(baseURL + "/getInventory")
        ]).then(axios.spread((inventory) => {
            setItems({ 'inventory': inventory.data.data})
        }))
    }

    useEffect(() => {
        getListings()
    }, [])

    if(listing) {
        return (
            < ItemListingPage listing={listing} setListing={setListing} refresh={getListings} />
        )
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h1>ENGR 1357 Inventory</h1>
                <button type="button" className="btn btn-primary" onClick={() => setShow(true)}>Add Item</button>
            </div>
            < CreateItemModal show={show} setShow={setShow} refresh={getListings} />
            < InventoryList key={items.id} listings={items} setListing={setListing} refresh={getListings} />
        </div>
    )
}