
function cUnname(){
    var a= document.getElementById("usname").value;
    a=a.length;
    if(a<=0){
        document.getElementById("usname").style.borderColor="rgb(180, 131, 131)";
    }else{
        document.getElementById("usname").style.borderColor="rgb(174, 189, 168)";
    }
    
}
function cPass(){
    var b= document.getElementById("passw").value;
    b=b.length;
    if(b<=0){
        document.getElementById("passw").style.borderColor="rgb(180, 131, 131)";
    }else{
        document.getElementById("passw").style.borderColor="rgb(174, 189, 168)";
    }
}
function cEmail(){
    var c= document.getElementById("emai").value;
    c=c.length;
    if(c<=0){
        document.getElementById("emai").style.borderColor="rgb(180, 131, 131)";
    }else{
        document.getElementById("emai").style.borderColor="rgb(174, 189, 168)";
    }
}

function cSele(){
    var d= document.getElementById("gen").value;
    d=d.length;
    if(d<=0){
        document.getElementById("gen").style.borderColor="rgb(180, 131, 131)";
    }else{
        document.getElementById("gen").style.borderColor="rgb(174, 189, 168)";
    }
}

function ccUnname(){
    var e= document.getElementById("usname").value;
    e=e.length
    if(e<=0){
        document.getElementById("usname").style.backgroundColor="rgb(238, 194, 194)";
    }else{
        document.getElementById("usname").style.backgroundColor="rgb(215, 230, 209)";
    }
}

function ccPass(){
    var f= document.getElementById("passw").value;
    f=f.length;
    if(f<=0){
        document.getElementById("passw").style.backgroundColor="rgb(238, 194, 194)";
    }else{
        document.getElementById("passw").style.backgroundColor="rgb(215, 230, 209)";
    }
}

function ccEmail(){
    var g= document.getElementById("emai").value;
    g=g.length;
    if(g<=0){
        document.getElementById("emai").style.backgroundColor="rgb(238, 194, 194)";
    }else{
        document.getElementById("emai").style.backgroundColor="rgb(215, 230, 209)";
    }
}

function showpass(){
    var pass=document.getElementById("passw");
    if(pass.type=="password"){
        pass.type="text";
    }else{
        pass.type="password";
    }
}

function info(){
    unamee=document.getElementById("usname").value;
    upass=document.getElementById("passw").value;
    umail=document.getElementById("emai").value;
    ugen=document.getElementById("gen").value;
    document.getElementById("out").innerHTML= "Username: " + unamee + "<br>Password: " + upass
    + "<br>Email: " + umail + "<br>Gender: " + ugen;
    return false;
}

function refresh(){
    location.reload();
}