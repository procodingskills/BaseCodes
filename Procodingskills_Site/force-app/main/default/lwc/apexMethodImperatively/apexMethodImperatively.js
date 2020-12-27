import { LightningElement , wire , track} from 'lwc';
import getAccounts from '@salesforce/apex/ProcodingskillsCtr.getAccounts';

export default class ApexMethodImperatively extends LightningElement {
    @track accounts;
    @track error;
    loadAccounts(event){
        getAccounts()
            .then(
                result => {
                    this.accounts = result;
                }
            )
            .catch(
                error => {
                    this.error = error;
                    console.log("Load Error : "+JSON.stringify(errro));
                }
            );
    }
}