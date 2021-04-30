$(document).ready(function(){
    $.ajax({
        url:"http://localhost:2293//api/Admin/Customerlist",
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    var str='';
                    var data=xmlhttp.responseJSON;
                   //document.write(data[0].user.type);
                    for(var i=0;i<data.length;i++)
                    {
                        if (data[i].user.status=="valid"){
    
                            str+="<tr><td>"+data[i].customer.name+"</td><td>"+data[i].customer.email+"</td><td>"+data[i].customer.phone+"</td><td>"+data[i].customer.address+"</td>";
                            str+="<td><button id='notifycus' class='btn btn-primary' href='Notify/"+data[i].customer.customerId+"'>Notify</button>";
                            str+="<button id='Detailcus' class='btn btn-primary' href='Notify/"+data[i].customer.customerId+"'>Detail</button>";
                            str+="<button id='orderdetail' class='btn btn-primary' href='Notify/"+data[i].customer.customerId+"'>Orderdetail</button>";
                            str+="</td></tr>";
                        }
                       
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                    $("#Customerlist tbody").html(str);
                    
                }
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
     $("notifyad").click(function(){
         document.write("worked")
    
     })
    });