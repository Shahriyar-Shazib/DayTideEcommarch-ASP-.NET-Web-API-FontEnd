$(document).ready(function(){
    $.ajax({
        url:"http://localhost:2293//api/Admin/Deleverymanlist",
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    var str='';
                    var str1='';
                    var data=xmlhttp.responseJSON;
                  //document.write(data[0].user.status);
                    for(var i=0;i<data.length;i++)
                    {
                        if (data[i].user.status=="valid"){
                            //document.write(data[0].user.status)
    
                            str+="<tr><td>"+data[i].deliveryMan.name+"</td><td>"+data[i].deliveryMan.email+"</td><td>"+data[i].deliveryMan.phone+"</td><td>"+data[i].deliveryMan.address+"</td><td>"+data[i].deliveryMan.salary+"</td>";
                            str+="<td><button id='notifydel'style='margin-right:5px' class='btn btn-primary'onclick='notifydel("+JSON.stringify(data[i].deliveryMan.delManId)+")'>Notify</button>";
                            str+="<button id='notifydel' class='btn btn-primary'onclick='detaildel("+JSON.stringify(data[i].deliveryMan.delManId)+")'>Detail</button>";
                            str+="</td></tr>";
                        }
                       
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                    $("#validDellist tbody").html(str);
                    
                    for(var i=0;i<data.length;i++)
                    {
                        if (data[i].user.status=="invalid"){

                            str1+="<tr><td>"+data[i].deliveryMan.name+"</td><td>"+data[i].deliveryMan.email+"</td><td>"+data[i].deliveryMan.phone+"</td><td>"+data[i].deliveryMan.address+"</td>><td>"+data[i].deliveryMan.salary+"</td>";
                            str1+="<td><button id='UnBlockdel' class='btn btn-primary' href='Notify/"+data[i].deliveryMan.delManId+"'>UnBlock</button>";
                            str1+="<button id='Deletedel' class='btn btn-primary' href='Notify/"+data[i].deliveryMan.delManId+"'>Delete</button>";
                            str1+="</td></tr>";
                        }
                    
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                     $("#invalidDellist tbody").html(str1);
                
                    
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
       window.location = '../../Views/Admin/DetailDelman.html?id='+id;
    }
