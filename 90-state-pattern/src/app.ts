class DocumentItem {
    public text: string;
    private state: DocumentItemState;

    constructor() {
        this.setState(new DraftDocumentItemState());
    }

    getState() {
        return this.state;
    }

    setState(state: DocumentItemState) {
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

abstract class DocumentItemState {
    public name: string;
    public item: DocumentItem;

    public setContext(item: DocumentItem) {
        this.item = item;
    }

    public abstract publish(): void;

    public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "DraftDocument"
    }

    public publish(): void {
        console.log(`The text ${this.item.text} has been sent to the site!`);
        this.item.setState(new PublishDocumentItemState());
    }

    public delete(): void {
        console.log(`Text deleted!`);
    }
}

class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "PublishDocument"
    }

    public publish(): void {
        console.log(`Access error!`);
    }

    public delete(): void {
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