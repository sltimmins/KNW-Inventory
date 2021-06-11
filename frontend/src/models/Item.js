export class Item {
    constructor(id, name, quantity, locker, onOrder, orderArrivalDate, link) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.locker = locker;
        this.onOrder = onOrder;
        this.orderArrivalDate = orderArrivalDate;
        this.link = link;
    }
}