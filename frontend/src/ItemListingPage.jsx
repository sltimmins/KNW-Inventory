import React from "react";
import { Item } from "./models/Item"

export class ItemListingPage extends React.Component {
  constructor() {
    super();
    this.item = new Item(
        5, 
        "Arduino",
        15,
        "A1",
    );
    this.state = new Item(
        5, 
        "Arduino",
        15,
        "A1",
    );
  }

  state = {
    id: "",
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    auctionType: "",
  };

  render() {
    let info = <Item></Item>;

    return (
      <>
        <button type="button" className="btn btn-secondary btn-md m-4">
          {" "}
          Back To Listings{" "}
        </button>
        <div class="jumbotron container bg-light mt-5">
          <div class="container-fluid">
            <img
              class="float-left img-thumbnail mr-5 mb-5"
              src={this.state.imageUrl}
            ></img>
            <h1 class="display-4">{this.state.name}</h1>
            <h1>
              <span class="badge badge-success badge-lg">
                {this.state.price}
              </span>
            </h1>
            <p class="lead">{this.state.description}</p>
            <div>{info}</div>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block mt-4"
              onClick={() => this.onAddClick()}
            >
              {this.state.auctionType}
            </button>
            <div class="clearfix"></div>
          </div>
        </div>
      </>
    );
  }
}
