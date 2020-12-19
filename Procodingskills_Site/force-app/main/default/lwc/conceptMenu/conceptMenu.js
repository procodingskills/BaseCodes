import { LightningElement,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import getconceptLoads from '@salesforce/apex/ConceptMenuServer.conceptLoads';

export default class ConceptMenu extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @wire(getconceptLoads) menuData;
    connectedCallback() {
        let browserURL =  window.location.href;
        let newURL = new URL(browserURL).searchParams;
        
       /*  let title = newURL.get('title');
        let cmpName = newURL.get('cmp');
       if(title && cmpName ){
        fireEvent(this.pageRef,
            'loadComponents',
              {load:cmpName,title:title});
        }*/

    }
    reactiveFields(event){
        const selectedItem = event.currentTarget;
        const eventname = selectedItem.dataset.eventname;
        const eventTitle = selectedItem.dataset.title;
        const relativeurl = selectedItem.dataset.relativeurl;
        fireEvent(this.pageRef,
            'loadComponents',
              {load:eventname,title:eventTitle , relativeurl : relativeurl});
    }
}

