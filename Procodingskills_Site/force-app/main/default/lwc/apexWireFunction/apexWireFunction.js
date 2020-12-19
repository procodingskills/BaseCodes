import { LightningElement,wire} from 'lwc';
import getAccounts from '@salesforce/apex/ProcodingskillsCtr.getAccounts';

export default class ApexWireFunction extends LightningElement {
    accounts;
    error;
    @wire(getAccounts)
    wiredApex({error,data}){
        if(data){
            this.accounts = data;
        }
        else if(error){
            this.error.error;
        }
    }
}