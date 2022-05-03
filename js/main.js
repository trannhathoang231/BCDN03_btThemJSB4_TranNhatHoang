


document.getElementById("btnTomorrow").onclick=function(){var e=parseInt(document.getElementById("inputDay").value),t=parseInt(document.getElementById("inputMonth").value),n=parseInt(document.getElementById("inputYear").value),a="";switch(t){case 1:case 3:case 5:case 7:case 8:case 10:a=e>0&&e<31?e+1+"/"+t+"/"+n:31==e?"1/"+(t+1)+"/"+n:"Ngày không xác định";break;case 2:a=e>0&&e<28?e+1+"/"+t+"/"+n:28==e?"1/"+(t+1)+"/"+n:"Ngày không xác định";break;case 4:case 6:case 9:case 11:a=e>0&&e<30?e+1+"/"+t+"/"+n:30==e?"1/"+(t+1)+"/"+n:"Ngày không xác định";break;case 12:a=e>0&&e<31?e+1+"/"+t+"/"+n:31==e?"1/1/"+(n+1):"Ngày không xác định";break;default:a="Tháng không xác định"}document.getElementById("txtDate").innerHTML=a},

document.getElementById("btnYesterday").onclick=function(){var e=parseInt(document.getElementById("inputDay").value),t=parseInt(document.getElementById("inputMonth").value),n=parseInt(document.getElementById("inputYear").value),a="";switch(t){case 1:a=e>1&&e<=31?e-1+"/"+t+"/"+n:1==e?"31/12/"+(n-1):"Ngày không xác định";break;case 2:a=e>1&&e<=28?e-1+"/"+t+"/"+n:1==e?"31/"+(t-1)+"/"+n:"Ngày không xác định";break;case 3:a=e>1&&e<31?e-1+"/"+t+"/"+n:1==e?NaN+(t-1)+"/"+n:"Ngày không xác định";break;case 5:case 7:case 8:case 10:case 12:a=e>1&&e<31?e-1+"/"+t+"/"+n:1==e?"30/"+(t-1)+"/"+n:"Ngày không xác định";break;case 4:case 6:case 9:case 11:a=e>1&&e<=30?e-1+"/"+t+"/"+n:1==e?"31/"+(t-1)+"/"+n:"Ngày không xác định"}document.getElementById("txtDate").innerHTML=a}

,document.getElementById("btnCalcDay").onclick=function(){var e=parseInt(document.getElementById("inputMonth2").value),t=parseInt(document.getElementById("inputYear2").value),n=!1,a=0;switch((t%4==0&&t%100!=0||t%400==0)&&(n=!0),e){case 1:case 3:case 5:case 7:case 8:case 10:case 12:a=31;break;case 4:case 6:case 9:case 11:a=30;break;case 2:a=n?29:28;break;default:a=0}document.getElementById("txtCalcDay").innerHTML="Tháng "+e+" năm "+t+" có "+a+" ngày"},

document.getElementById("btnReadInt").addEventListener("click",function(){var e=document.getElementById("inputReadInt").value,t=Math.floor(e/100),n=Math.floor(e%100/10),a="";switch(t){case 1:a+="một trăm ";break;case 2:a+="hai trăm ";break;case 3:a+="ba trăm ";break;case 4:a+="bốn trăm ";break;case 5:a+="năm trăm ";break;case 6:a+="sáu trăm ";break;case 7:a+="bảy trăm ";break;case 8:a+="tám trăm ";break;case 9:a+="chín trăm ";break;default:alert("số hàng trăm không xác định được")}switch(n){case 1:a+="một mươi ";break;case 2:a+="hai mươi ";break;case 3:a+="ba mươi ";break;case 4:a+="bốn mươi ";break;case 5:a+="năm mươi ";break;case 6:a+="sáu mươi ";break;case 7:a+="bảy mươi ";break;case 8:a+="tám mươi ";break;case 9:a+="chín mươi ";break;default:alert("Số hàng chục không xác định được")}switch(e%100%10){case 1:a+="một";break;case 2:a+="hai";break;case 3:a+="ba";break;case 4:a+="bốn";break;case 5:a+="năm";break;case 6:a+="sáu";break;case 7:a+="bảy";break;case 8:a+="tám";break;case 9:a+="chín";break;default:alert("Số hàng đơn vị không xác định được.")}document.getElementById("txtReadInt").innerHTML=a})





function(){
    
    var e=document.getElementById("inputName1").value,
    
    t=document.getElementById("inputX1").value,
    
    n=document.getElementById("inputY1").value;
    
    var a=document.getElementById("inputName2").value,
    
    c=document.getElementById("inputX2").value,
    
    u=document.getElementById("inputY2").value;
    
    var m=document.getElementById("inputName3").value,
    
    d=document.getElementById("inputX3").value,
    
    o=document.getElementById("inputY3").value,
    
    l=document.getElementById("inputX4").value,
    
    r=document.getElementById("inputY4").value,
    
    s=Math.pow(l-t,2)+Math.pow(r-n,2),
    
    i=Math.sqrt(s);
    console.log(i);
    
    var g=Math.pow(l-c,2)+Math.pow(r-u,2),
    
    h=Math.sqrt(g);
    console.log(h);
    
    var y=Math.pow(l-d,2)+Math.pow(r-o,2),
    
    k=Math.sqrt(y);
    console.log(k);
    
    var b="";
    
    b=i>h&&i>k?e:h>i&&h>k?a:m,
    
    document.getElementById("txtSearch").innerHTML="Sinh viên xa trường nhất: "+b
};