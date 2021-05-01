$(document).ready(function(){
    $.ajax({
        url:"http://localhost:2293//api/Admin/ModeratorList",
        Method:'GET',
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
                            
    
                            str+="<tr><td>"+data[i].moderator.name+"</td><td>"+data[i].moderator.email+"</td><td>"+data[i].moderator.phone+"</td><td>"+data[i].moderator.address+"</td><td>"+data[i].moderator.salary+"</td>";
                            str+="<td><button id='notifymod' style='margin-right:5px;'class='btn btn-primary'onclick='notifymod("+JSON.stringify(data[i].moderator.moderatorId)+")'>Notify</button>";
                            str+="<button id='Detailmod' class='btn btn-primary'onclick='detailmod("+JSON.stringify(data[i].moderator.moderatorId)+")'>Detail</button>";
                            str+="</td></tr>";
                        }
                       
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                    $("#validModlist tbody").html(str);
                    
                    for(var i=0;i<data.length;i++)
                    {
                        if (data[i].user.status=="invalid"){

                            str1+="<tr><td>"+data[i].moderator.name+"</td><td>"+data[i].moderator.email+"</td><td>"+data[i].moderator.phone+"</td><td>"+data[i].moderator.address+"</td>><td>"+data[i].moderator.salary+"</td>";
                            str1+="<td><button id='UnBlockdel' style='margin-right:5px'class='btn btn-primary'onclick='Unblockmod("+JSON.stringify(data[i].moderator.moderatorId)+")'>UnBlock</button>";
                            str1+="<button id='Deletedel' class='btn btn-primary' href='Notify/"+data[i].moderator.delManId+"'>Delete</button>";
                            str1+="</td></tr>";
                        }
                    
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                     $("#invalidModlist tbody").html(str1);
                
                    
                }
                
            
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    
    });
    function notifymod(id)
    {
       // var v=document.getElementById("#notifyAd").value;  
       window.location = '../../Views/Admin/Notify.html?userid='+id;
    }
    function detailmod(id)
    {
       // var v=document.getElementById("#notifyAd").value;  
       window.location = '../../Views/Admin/DetailModerator.html?id='+id;
    }
    function Unblockmod(id)
    {
        $.ajax({
            url:"http://localhost:2293//api/Admin/UnBlockmod?id="+id,
            method:"GET",
            complete: function(xmlhttp,status){
                {
                    
                    if(xmlhttp.status==200)
                    {
                        window.location = '../../Views/Admin/ModeratorList.html';
                    }
                    else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
                }
            }
        
        });
    }