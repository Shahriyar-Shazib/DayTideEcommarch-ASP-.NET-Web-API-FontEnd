$(document).ready(function(){
    var sParam = new URLSearchParams(window.location.search)
    var  param = sParam.get('id')
    //document.write(param);
    
    $.ajax({
        url:"http://localhost:2293//api/Admin/OrderDetailcus?"+sParam,
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    var str='';
                   
                    var data=xmlhttp.responseJSON;
                    //document.write(data);
                    for(var i=0;i<data.length;i++)
                    {
                        if (data[i].customer.customerId==param){

                            //document.write(param);
                            //document.write(data[0].user.status)
    
                            str+="<tr><td>"+data[i].order_Detail.date+"</td>";
                            str+="<td>"+data[i].customer.name+"</td>";
                            str+="<td>"+data[i].customer.customerId+"</td>";
                            str+="<td>"+data[i].order_Detail.address+"</td>";
                            str+="<td>"+data[i].order_Detail.district+"</td>";
                            str+="<td>"+data[i].order_Detail.amount+"</td>";
                            str+="<td>"+data[i].order_Detail.payment_Type+"</td>";
                            str+="<td>"+data[i].deliveryMan.name+"</td>";
                            str+="<td>"+data[i].deliveryMan.delManId+"</td>";
                            str+="<td>"+data[i].order_Detail.status+"</td>";
                            str+="</tr>";
                        }
                    
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                     $("#orderdetailcus tbody").html(str);
                }
                
            
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    
    });
    function notifydel(id)
    {
       // var v=document.getElementById("#notifyAd").value;  
       window.location = '../../Views/Admin/Notify.html?userid='+id;
    }
    function detaildel(id)
    {
       // var v=document.getElementById("#notifyAd").value;  
       window.location = '../../Views/Admin/DetailDelman.html?userid='+id;
    }
