import React, { useState, useContext } from "react"
import { validateItem } from "./utils";
import { AppContext } from "./AppContext.js";
import axios from "axios";

export function ItemForm() {
    
}

export function CreateItemModal({ show, setShow, refresh }) {

    const { baseURL } = useContext(AppContext);

    let [inventory, setProducts] = useState([]);

    let [bannerMessage, setBannerMessage] = useState("");

    const defaultValues = {
        id: 0,
        name: "",
        quantity: 0,
        locker: "",
        onOrder: false,
        orderArrivalDate: "",
        link: ""
    }

    let [values, setValues] = useState(defaultValues);

    const submit = () => {
        const route = "/add";
        let error = validateItem(values);

        if(error) {
            setBannerMessage(error);
            return;
        }

        axios.post(baseURL + route, values, {
        }).then((r) => {
            setBannerMessage(r.data.msg)
            refresh()
            setTimeout(() => {
                setShow(false)
            }, 1000)
            setValues(defaultValues)
        }).catch((r) => {
            setBannerMessage(r.response.data.msg)
        })

        return (
            <div className="modal fade" id="listingModal" tabindex="-1" aria-labelledby="listingModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="listingModalLabel">Add item</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3 mb-3">
                                    <div className="col-3">
                                        <label for="item" className="col-form-label">Item name</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="password" id="item" className="form-control" />
                                    </div>
                                    <div className="col-3">
                                        <label for="quantity" className="col-form-label">Quantity</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="password" id="quantity" className="form-control" />
                                    </div>
                                    <div className="col-3">
                                        <label for="locker" className="col-form-label">Locker</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="password" id="locker" className="form-control" />
                                    </div>
                                    <div className="col-3">
                                        <label for="link" className="col-form-label">Link</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="password" id="link" className="form-control" />
                                    </div>
                                </div>
    
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}