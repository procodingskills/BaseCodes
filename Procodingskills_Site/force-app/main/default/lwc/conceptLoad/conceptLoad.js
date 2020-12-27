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
    relativeurl='';

    isReactiveFields = false;
    isHTM5DataAttributes = false;
    isFileUpload = false;
    isapexMethodsWire = false;
    isapexWireFunction = false;
    isapexMethodImperatively = false;

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
     this.resetDetails();
     this.componentName = data.title;
     this.relativeurl = data.relativeurl;
    if(loadName == "reactiveFields"){
        this.isReactiveFields = true;
        console.log("reactiveFields is Displaying")
    }
    else if(loadName == "html5DataAttributes"){
        this.isHTM5DataAttributes = true;
    }
    else if(loadName == "fileUpload"){
        this.isFileUpload = true;
    }
    else if(loadName == "apexMethodsWire"){
        this.isapexMethodsWire = true;
    }
    else if(loadName =="apexWireFunction"){
        this.isapexWireFunction = true;
    }
    else if(loadName == "apexMethodImperatively"){
        this.isapexMethodImperatively = true;
    }
 }
  resetDetails(){
      this.relativeurl = '';
      this.componentName = null;
      this.isReactiveFields = false;
      this.isHTM5DataAttributes = false;
      this.isFileUpload = false;
      this.isapexMethodsWire = false;
      this.isapexWireFunction = false;
      this.isapexMethodImperatively = false;
  }

}