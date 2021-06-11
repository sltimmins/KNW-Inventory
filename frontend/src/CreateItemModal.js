import React, { useState } from "react"

export function CreateItemModal() {
    let [listType, setListType] = useState("auction")

    return (
        <div class="modal fade" id="listingModal" tabindex="-1" aria-labelledby="listingModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="listingModalLabel">Add item</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row g-3 mb-3">
                                <div class="col-3">
                                    <label for="item" class="col-form-label">Item name</label>
                                </div>
                                <div class="col-9">
                                    <input type="password" id="item" class="form-control" />
                                </div>
                                <div class="col-3">
                                    <label for="quantity" class="col-form-label">Quantity</label>
                                </div>
                                <div class="col-9">
                                    <input type="password" id="quantity" class="form-control" />
                                </div>
                                <div class="col-3">
                                    <label for="locker" class="col-form-label">Locker</label>
                                </div>
                                <div class="col-9">
                                    <input type="password" id="locker" class="form-control" />
                                </div>
                                <div class="col-3">
                                    <label for="link" class="col-form-label">Link</label>
                                </div>
                                <div class="col-9">
                                    <input type="password" id="link" class="form-control" />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}