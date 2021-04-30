$(document).ready(function(){
    var sParam = new URLSearchParams(window.location.search)
    //document.write(sParam);
    
    
    /*$.ajax({
        url:"http://localhost:2293//api/Admin/AdminList",
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    var str='';
                    var data=xmlhttp.responseJSON;
                  // document.write(data[0].admin.adminId.toString());
                    for(var i=0;i<data.length;i++)
                    {
                       
                        if (data[i].user.status=="valid"){
                            //var adminid =admin.adminid;
                            //document.write());
                            str+="<tr><td>"+data[i].admin.name+"</td><td>"+data[i].admin.email+"</td><td>"+data[i].admin.phone+"</td>";
                            str+="<td>"+data[i].admin.address+"</td><td>"+data[i].admin.salary+"</td>";
                            str+="<td><button id='notifyad' class='btn btn-primary'onclick='notifyad("+JSON.stringify(data[i].admin.adminId)+")'>Notify</button><td></tr>";
                        }
                       
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                    $("#adminlist tbody").html(str);
                    
                }
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    */
    
    });
   
    