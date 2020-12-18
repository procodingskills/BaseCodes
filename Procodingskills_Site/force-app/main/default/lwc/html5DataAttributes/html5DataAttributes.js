import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Html5DataAttributes extends LightningElement {
    html5Attributes(event){
        const selectedItem = event.currentTarget;
        const eventname = selectedItem.dataset.title;
        const evt = new ShowToastEvent({
            title: "HTML5 Data Attributes",
            message: eventname,
            variant: "success",
        });
        this.dispatchEvent(evt);
    }
}