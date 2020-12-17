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
    if(loadName == "reactiveFields"){
        this.isReactiveFields = true;
        this.componentName = data.title;
        console.log("reactiveFields is Displaying")
    }
 }

}