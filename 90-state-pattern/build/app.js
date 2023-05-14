"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "DraftDocument";
    }
    publish() {
        console.log(`The text ${this.item.text} has been sent to the site!`);
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log(`Text deleted!`);
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "PublishDocument";
    }
    publish() {
        console.log(`Access error!`);
    }
    delete() {
        console.log("Deleted from publication!");
        this.item.setState(new DraftDocumentItemState());
    }
}
const doc = new DocumentItem();
doc.text = "My document!";
console.log(doc.getState());
doc.publishDoc();
console.log(doc.getState());
doc.publishDoc();
doc.deleteDoc();
console.log(doc.getState());
