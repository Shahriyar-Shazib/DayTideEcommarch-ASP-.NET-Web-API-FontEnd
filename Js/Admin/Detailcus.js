$(document).ready(function(){
    var sParam = new URLSearchParams(window.location.search)
    
    $.ajax({
        url:"http://localhost:2293//api/Admin/DetailCus?"+sParam,
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    var str='';
                   
                    var data=xmlhttp.responseJSON;
                    //document.write(data.customerId);
                    
                        
                            //document.write(data[0].user.status)
    
                            str+="<dl class='dl-horizontal'>";
                            str+="<dt>Name</dt>";

                            str+="<dd>"+data.name+"</dd>";

                            str+=" <dt>Email</dt>";

                            str+=" <dd>"+data.email+"</dd>";

                            str+=" <dt>Phone</dt>";

                            str+="<dd>"+data.phone+"</dd>";

                            str+=" <dt>Address</dt>";

                            str+="<dd>"+data.address+"</dd>";

                            str+="</dl>";
                        
                            
                    
                    $("#detailcus").html(str);
  
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
