/**
 * @description       : 
 * @author            : i.lakshmideepak@gmail.com
 * @group             : 
 * @last modified on  : 12-19-2020
 * @last modified by  : i.lakshmideepak@gmail.com
 * Modifications Log 
 * Ver   Date         Author                      Modification
 * 1.0   12-19-2020   i.lakshmideepak@gmail.com   Initial Version
**/
public with sharing class ProcodingskillsCtr {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [Select Id , Name , Phone , ParentId,Parent.Name FROM Account WHERE parentId != null LIMIT 10 ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
