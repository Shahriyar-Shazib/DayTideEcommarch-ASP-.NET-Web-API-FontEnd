$(document).ready(function(){
    var sParam = new URLSearchParams(window.location.search)
    var type=getCookie("Type");
    if(type!='Admin')
    {
        window.location='../../Views/Login/index.html'
    }
    else
    {
    
    $.ajax({
        url:"http://localhost:2293//api/Admin/DetailDelman?"+sParam,
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
                            str+=" <dt>Complete Tasks</dt>";

                            str+="<dd>"+data.complete_Task+"</dd>";

                            str+=" <dt>In Services</dt>";

                            str+="<dd>"+data.in_Service+"</dd>";

                            str+=" <dt>Salary</dt>";

                            str+="<dd>"+data.salary+"</dd>";


                            str+="</dl></td></tr>";
                            str+="<tr><td colspan='2'style='text-align:center;'><button style='margin-top:15px;background-color:orange;color:black'id='blockdel'onclick='blockdel("+JSON.stringify(data.delManId)+")'class='btn btn-primary'>Block</button>"
                            str+="<button  style='margin-top:15px;background-color:orange;color:black;margin-left:5px;margin-right:5px;'id='deleteMod'onclick='Deletedel("+JSON.stringify(data.delManId)+")'class='btn btn-primary'>Delete</button>"
                            str+="<button style='margin-top:15px;margin-left:5px;margin-right:5px;'id='UpdatesalMod'onclick='Updatesaldel("+JSON.stringify(data.delManId)+")'class='btn btn-primary'>Update Salary</button>"
                            str+=" <a style='margin-top:15px;margin-left:5px;margin-right:5px;'class='btn btn-primary'href='DeleveryManList.html'>Back</a></td></tr>"
                
                    
                    $("#detaildelman").html(str);
  
                }
                
            
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
}
    });
    function blockdel(id)
    {
                 
    $.ajax({
        url:"http://localhost:2293//api/Admin/Blockdel?id="+id,
        method:"GET",
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    window.location = '../../Views/Admin/DeleveryManList.html';
                }
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    
       // document.write(id)
       // var v=document.getElementById("#notifyAd").value;  
       //window.location = '../../Views/Admin/Notify.html?userid='+id;
    }
    function Updatesaldel(id)
    {
        //document.write(id)
       // var v=document.getElementById("#notifyAd").value;  
       window.location = '../../Views/Admin/updatesalDeletedelman.html?id='+id;
    }
    function Deletedel(id)
    {
        $.ajax({
            url:"http://localhost:2293//api/Admin/Deletedelman/?id="+id,
            method:"DELETE",
            complete: function(xmlhttp,status){
                {
                    
                    if(xmlhttp.status==200)
                    {
                        
                        window.location = '../../Views/Admin/DeleveryManList.html';
                    }
                    else if(xmlhttp.status==406)
                    {
                        $("#msg").text("Couldnot Delete Delevery Man is under A delevery Process")
                    }
                    else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
                }
            }
        
    })
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}