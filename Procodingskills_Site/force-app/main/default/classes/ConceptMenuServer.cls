/**
 * @description       : 
 * @author            : i.lakshmideepak@gmail.com
 * @group             : 
 * @last modified on  : 12-18-2020
 * @last modified by  : i.lakshmideepak@gmail.com
 * Modifications Log 
 * Ver   Date         Author                      Modification
 * 1.0   12-18-2020   i.lakshmideepak@gmail.com   Initial Version
**/
public with sharing class ConceptMenuServer {
    @AuraEnabled(cacheable=true)
    public static List<ILD_Procoding__Content_Menu__c> conceptLoads(){
        return [SELECT Id , Name,ILD_Procoding__Relative_Post_URL__c,ILD_Procoding__Component_Name__c,ILD_Procoding__Sort_Order__c,ILD_Procoding__isActive__c FROM ILD_Procoding__Content_Menu__c ORDER BY ILD_Procoding__Sort_Order__c ASC];
    }
}
