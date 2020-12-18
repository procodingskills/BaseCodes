import { LightningElement ,wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {
    registerListener,
    unregisterListener,
    unregisterAllListeners,
    fireEvent
} from 'c/pubsub';

export default class ConceptLoad extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    componentName;
    isReactiveFields = false;
    isHTM5DataAttributes = false;
    connectedCallback() {
        registerListener('loadComponents' 
                     ,this.handleComponents, 
                     this);
        }
        
   disconnectedCallback() {
           unregisterAllListeners(this);
    }
 handleComponents(data){
     let loadName = data.load;
     console.log("loadName : "+loadName);
     this.componentName = data.title;
     this.resetDetails();
    if(loadName == "reactiveFields"){
        this.isReactiveFields = true;
        console.log("reactiveFields is Displaying")
    }
    else if(loadName == "html5DataAttributes"){
        this.isHTM5DataAttributes = true;
    }
 }
  resetDetails(){
      this.isReactiveFields = false;
      this.isHTM5DataAttributes = false;
  }

}