$(document).ready(function(){
    var sParam = new URLSearchParams(window.location.search)
    var type=getCookie("Type");
    if(type!='Admin')
    {
        window.location='../../Views/Login/index.html'
    }
    else
    {
   // document.write(sParam);
    //$("#send_For").text(sParam[userid]);

    $.ajax({
        url:"http://localhost:2293//api/Admin/EditDelSignup/?"+sParam,
        headers:{
            "Authorization":"Basic "+btoa(getCookie("Type")+":"+getCookie("userid")+":"+getCookie("pass"))
        },
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                   
                    var str='';
                    var data=xmlhttp.responseJSON;
                    //document.write(data.send_For);
                    
                    
                    str+="<div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="<label for='Message' class='form-label'>Moderator Id</label>";
                    str+="<input type='text'' value="+JSON.stringify(data.delManId)+" class='form-control' id='moderatorId' aria-describedby='moderatorId'readonly>";
                      
                    str+="</div>";
                    str+="<div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="<label for='send_For' class='form-label'>Name</label>";
                    str+="  <input type='text' value="+JSON.stringify(data.name)+"class='form-control' id='name' aria-describedby='name'readonly>";
                        
                    str+=" </div>";
                    str+=" <div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="   <label for='send_By' class='form-label'>Email</label>";
                    str+="  <input type='text' class='form-control'value="+JSON.stringify(data.email)+" id='email' aria-describedby='email'readonly>";
                        
                    str+="</div>";
                    str+="<div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="<label for='Message' class='form-label'>Phone</label>";
                    str+="<input type='text'' value="+JSON.stringify(data.phone)+" class='form-control' id='phone' aria-describedby='phone'readonly>";
                      
                    str+="</div>";
                    str+="<div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="<label for='send_For' class='form-label'>Address</label>";
                    str+="  <input type='text' value="+JSON.stringify(data.address)+"class='form-control' id='addr' aria-describedby='add'readonly>";
                        
                    str+=" </div>";

                    str+=" <div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="   <label for='send_By' class='form-label'>Complete Task</label>";
                    str+="  <input type='text' class='form-control'value="+JSON.stringify(data.complete_Task)+" id='complete_Task'readonly aria-describedby='complete_Task'>";
                        
                    str+="</div>";

                    str+=" <div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="   <label for='send_By' class='form-label'>In Service</label>";
                    str+="  <input type='text' class='form-control'value="+JSON.stringify(data.in_Service)+" id='in_Service' aria-describedby='in_Service'readonly>";
                        
                    str+="</div>";

                    str+=" <div class='mb-3'style='margin-left:10%;margin-right:10%'>";
                    str+="   <label for='send_By' class='form-label'>Salary</label>";
                    str+="  <input type='text' class='form-control'value='' id='sal' aria-describedby='sal'>";
                        
                    str+="</div>";
                    str+=" <button style='margin-left:45%' onclick=update() id='updatesaldelbtn'class='btn btn-primary col-md-offset-2'>Accept</button>";
                    
               
                    $("#processDellist").html(str);
                    
                }
                else if(xmlhttp.status==400)
                {
                    window.location="../../Views/Login/index.html"
                }
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
}
});
function update(id)
    {
        var sal=$("#sal").val();
        //document.write(msg);
        if(sal===''){
            
            $("#validationerr").text("Insert Salary before Submit")
            
        }
        else {
            
    $.ajax({
        url:"http://localhost:2293//api/Admin/EditDelSignup/",
        headers:{
            "Authorization":"Basic "+btoa(getCookie("Type")+":"+getCookie("userid")+":"+getCookie("pass"))
        },
        method:"PUT",
        headers:"Content-Type:application/json",
        data:{
            "delManId":  $("#moderatorId").val(),
            "name":  $("#name").val(),
            "email": $("#email").val(),
            "phone": $("#phone").val(),
            "address":  $("#addr").val(),
            "salary": $("#sal").val(),
            "complete_Task":$("#complete_Task").val() ,
            "in_Service": $("#in_Service").val()
            
        },
        complete: function(xmlhttp,status){
            {
                
                if(xmlhttp.status==200)
                {
                    window.location.replace('../../Views/Admin/DeleveryManList.html') ;
                    //$("#msg").html(xmlhttp.status+":"+xmlhttp.statusText)
                }
                else if(xmlhttp.status==401){
                    window.location="../../Views/Login/index"
                }
                else $("#msg").html(xmlhttp.status+":"+xmlhttp.statusText);
            }
        }
    
    });
    
        }
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