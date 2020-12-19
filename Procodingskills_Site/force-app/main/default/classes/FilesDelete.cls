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
public class FilesDelete implements Schedulable {
    public  void execute(SchedulableContext sc) {
     List<ContentDocument> data = [SELECT Id from ContentDocument];
     if(data.size() > 2){
         Database.delete(data, false);
     }
    }
 }