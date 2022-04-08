
function add()
{ var n1=Number(document.getElementById("n1").value);
var n2=Number(document.getElementById("n2").value);
     var a=n1+n2;
    //window.alert(a);
    document.getElementById("n3").innerHTML=a;
}

    function sub()
    {
        var n1=Number(document.getElementById("n1").value);
        var n2=Number(document.getElementById("n2").value);
        var b=n1-n2;
       // window.alert(b);
       document.getElementById("n3").innerHTML=b;
    }
    function mult()
    {  var n1=Number(document.getElementById("n1").value);
       var n2=Number(document.getElementById("n2").value);
       var c=n1*n2;
       //window.alert(c);
       document.getElementById("n3").innerHTML=c;
    }
    function div()
    {
        var n1=Number(document.getElementById("n1").value);
        var n2=Number(document.getElementById("n2").value);
        var d=n1/n2;
        //window.alert(d);
        document.getElementById("n3").innerHTML=d;
    }

