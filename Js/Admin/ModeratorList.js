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
                            //document.write(data[0].user.status)
    
                            str+="<tr><td>"+data[i].moderator.name+"</td><td>"+data[i].moderator.email+"</td><td>"+data[i].moderator.phone+"</td><td>"+data[i].moderator.address+"</td><td>"+data[i].moderator.salary+"</td>";
                            str+="<td><button id='notifydel' class='btn btn-primary' href='Notify/"+data[i].moderator.delManId+"'>Notify</button>";
                            str+="<button id='Detaildel' class='btn btn-primary' href='Notify/"+data[i].moderator.delManId+"'>Detail</button>";
                            str+="</td></tr>";
                        }
                       
                        //str+="<td>"+data.AdminId+"</td>";
                        
                    }
                    $("#validModlist tbody").html(str);
                    
                    for(var i=0;i<data.length;i++)
                    {
                        if (data[i].user.status=="invalid"){

                            str1+="<tr><td>"+data[i].moderator.name+"</td><td>"+data[i].moderator.email+"</td><td>"+data[i].moderator.phone+"</td><td>"+data[i].moderator.address+"</td>><td>"+data[i].moderator.salary+"</td>";
                            str1+="<td><button id='UnBlockdel' class='btn btn-primary' href='Notify/"+data[i].moderator.delManId+"'>UnBlock</button>";
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