import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/ProcodingskillsCtr.getAccounts';

export default class ApexMethodsWire extends LightningElement {
    @wire(getAccounts) accounts;
}