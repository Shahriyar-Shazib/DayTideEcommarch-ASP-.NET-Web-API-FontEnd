$(document).ready(function(){
    var sParam = new URLSearchParams(window.location.search)
    
    $.ajax({
        url:"http://localhost:2293//api/Admin/DetailModerator?"+sParam,
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    var str='';
                   
                    var data=xmlhttp.responseJSON;
                    //document.write(data.name);
                    
                        
                           // document.write(data.links)
                            str+="<tr><td>"
                            str+="   <img class='img-profile ' style='height: 400px; width: 450px; margin-left: 40px ;";
                            str+="       src='~/Content/Users/"+data.picture+"'>" ;
                            str+="</td>"

                            str+="<td><dl style ='margin-left:30px'class='dl-horizontal'>";
                            str+="<dt>Name</dt>";

                            str+="<dd>"+data.name+"</dd>";

                            str+=" <dt>Email</dt>";

                            str+=" <dd>"+data.email+"</dd>";

                            str+=" <dt>Phone</dt>";

                            str+="<dd>"+data.phone+"</dd>";

                            str+=" <dt>Address</dt>";

                            str+="<dd>"+data.address+"</dd>";

                            str+=" <dt>Salary</dt>";

                            str+="<dd>"+data.address+"</dd>";


                            str+="</dl></td></tr>";
                            str+="<tr><td colspan='2'style='text-align:center;'><button style='margin-top:15px;background-color:orange;color:black'id='blockmod'onclick='blockmod("+JSON.stringify(data.moderatorId)+")'class='btn btn-primary'>Block</button>"
                            str+="<button  style='margin-top:15px;background-color:orange;color:black;margin-left:5px;margin-right:5px;'id='deleteMod'onclick='DeleteMod("+JSON.stringify(data.moderatorId)+")'class='btn btn-primary'>Delete</button>"
                            str+="<button style='margin-top:15px;margin-left:5px;margin-right:5px;'id='UpdatesalMod'onclick='UpdatesalMod("+JSON.stringify(data.moderatorId)+")'class='btn btn-primary'>Update Salary</button>"
                            str+=" <a style='margin-top:15px;margin-left:5px;margin-right:5px;'class='btn btn-primary'href='ModeratorList.html'>Back</a></td></tr>"
                
                    
                    $("#detailMod").html(str);
  
                }
                
            
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    
    });
    function blockmod(id)
    {
                 
    $.ajax({
        url:"http://localhost:2293//api/Admin/Blockmod?id="+id,
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
    
       // document.write(id)
       // var v=document.getElementById("#notifyAd").value;  
       //window.location = '../../Views/Admin/Notify.html?userid='+id;
    }
    function UpdatesalMod(id)
    {
        //document.write(id)
       // var v=document.getElementById("#notifyAd").value;  
       window.location = '../../Views/Admin/updatesalmod.html?id='+id;
    }
    function DeleteMod(id)
    {
        $.ajax({
            url:"http://localhost:2293//api/Admin/Deletemod?id="+id,
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
        
    })
}
    