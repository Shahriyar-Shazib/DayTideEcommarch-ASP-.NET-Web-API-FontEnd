$(document).ready(function(){
    var sParam = new URLSearchParams(window.location.search)
    
   // document.write(sParam);
    //$("#send_For").text(sParam[userid]);

    $.ajax({
        url:"http://localhost:2293//api/Admin/Notify/?"+sParam+"&id=shah-12",
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                   
                    var str='';
                    var data=xmlhttp.responseJSON;
                    //document.write(data.send_For);
                    
                    
                    str+="<div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="<label for='Message' class='form-label'><h3>Message</h3></label>";
                    str+="<input type='text'style ='height: 80px;' class='form-control' id='Message' aria-describedby='massege'>";
                      
                    str+="</div>";
                    str+="<div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="<label for='send_For' class='form-label'>Send For</label>";
                    str+="  <input type='text' value="+JSON.stringify(data.send_For)+"class='form-control' id='send_For' aria-describedby='send_For'readonly>";
                        
                    str+=" </div>";
                    str+=" <div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="   <label for='send_By' class='form-label'>Send By</label>";
                    str+="  <input type='text' class='form-control'value="+JSON.stringify(data.send_by)+" id='send_By' aria-describedby='send_By'readonly>";
                        
                    str+="</div>";
                    str+=" <button style='margin-left:45%' onclick=post() id='insertnotice'class='btn btn-primary col-md-offset-2'>Post</button>";
                    
               
                    $("#notify").html(str);
                    
                }
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    
    
    });

  /*$("#insertnotice").onclick(function () { 
     document.write($("#send_For").val());
      if($("#Message").val()===null){
        window.location = '../../Views/Admin/Notify.html?userid='+$("#send_For").val();
        $("#validationerr").val("Insert some message before Submit")
       
      }
      
      
  });*/
  function post()
    {
        var msg=$("#Message").val();
        //document.write(msg);
        if(msg===''){
            
            $("#validationerr").text("Insert some message before Submit")
            
        }
        else {
            
    $.ajax({
        url:"http://localhost:2293//api/Admin/Notify",
        method:"POST",
        headers:"Content-Type:application/json",
        data:{
            "massage": $("#Message").val(),
            "send_For":  $("#send_For").val(),
            "send_by":  $("#send_By").val(),
            "status": "Unread"
        },
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==201)
                {
                    $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText)
                }
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    
        }
    }
    /*function valid()
    {
        var msg=document.getElementById("#Message");
        document.write(msg);
    }*/