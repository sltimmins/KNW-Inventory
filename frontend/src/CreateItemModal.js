import React, { useState, useContext, useRef, useEffect } from "react"
import { validateItem } from "./utils";
import { AppContext } from "./AppContext.js";
import { reload } from './InventoryPage'
import { Modal } from 'bootstrap';
import ImageUploader from 'react-images-upload'
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

    const handleInputChange = (e) => {
        let { name, value, checked } = e.target;
        if(e.target.type === "checkbox") {
            value = checked;
        }
        setValues({ ...values, [name]: value });
    }

    const submit = () => {
        console.log(JSON.stringify(values));
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
    }

    const handleClose = () => {
        setShow(false);
        reload();
    }

    const [modal, setModal] = useState(null);
    const modalRef = useRef();

    useEffect(() => {
        setModal(new Modal(modalRef.current, { backdrop: 'static'}));
    }, [show]);

    useEffect(() => {
        if(modal) {
            modal.toggle();
        }
    }, [show])

    let banner = <></>;
    if(bannerMessage) {
        banner = (
            <div className="alert alert-primary" role="alert">
                {bannerMessage}
            </div>
        )
    }
    
    return (
        <div ref={modalRef} className="modal fade modal-fullscreen-md-down" data-backdrop="static" id="itemModal" tabIndex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="itemModalLabel">Add Item</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => handleClose()}></button>
                    </div>
                    <div className="modal-body">
                        {banner}
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-3">
                                    <label htmlFor="name" className="col-form-label">Item</label>
                                </div>
                                <div className="col-9">
                                    <input className="form-control" name="name" id="name" onChange={handleInputChange} value={values.name}></input>
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-3">
                                    <label htmlFor="quantity" className="col-form-label">Quantity</label>
                                </div>
                                <div className="col-9">
                                    <input className="form-control" name="quantity" id="quantity" onChange={handleInputChange} value={values.quantity}></input>
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-3">
                                    <label htmlFor="locker" className="col-form-label">Locker</label>
                                </div>
                                <div className="col-9">
                                    <input className="form-control" name="locker" id="locker" onChange={handleInputChange} value={values.locker}></input>
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-3">
                                    <label htmlFor="link" className="col-form-label">Link</label>
                                </div>
                                <div className="col-9">
                                    <input className="form-control" name="link" id="link" onChange={handleInputChange} value={values.link}></input>
                                </div>
                            </div>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                imgExtension={['.jpg', '.png']}
                                maxFileSize={5242880}
                            />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => handleClose()} >Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => submit()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}