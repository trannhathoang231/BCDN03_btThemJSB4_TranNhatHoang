/**
 * Khoi 1:
 * Input: inputName1/2/3; inputX1/X2/X3/X4; inputY1/Y2/Y3/Y4
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị từ form
 * B2: lập công thức:
 *     
 * sum1=Math.pow(x4-x1,2)+Math.pow(y4-y1,2),
 * can1=Math.sqrt(sum1);
 * 
 * so sánh can 1 ; can 2 ; can 3
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: TimSinhVien
 */


function btnTimSinhVien(){
    
    var stu1=document.getElementById("inputName1").value,
    
    x1=document.getElementById("inputX1").value,
    
    y1=document.getElementById("inputY1").value;

    
    var stu2=document.getElementById("inputName2").value,
    
    x2=document.getElementById("inputX2").value,
    
    y2=document.getElementById("inputY2").value;

    
    var stu3=document.getElementById("inputName3").value,
    
    x3=document.getElementById("inputX3").value,
    
    y3=document.getElementById("inputY3").value,
    
    x4=document.getElementById("inputX4").value,
    
    y4=document.getElementById("inputY4").value;
    
    var sum1=Math.pow(x4-x1,2)+Math.pow(y4-y1,2),
    
    can1=Math.sqrt(sum1);
    console.log(can1);
    
    var sum2=Math.pow(x4-x2,2)+Math.pow(y4-y2,2),
    
    can2=Math.sqrt(sum2);
    console.log(can2);
    
    var sum3=Math.pow(x4-x3,2)+Math.pow(y4-y3,2),
    
    can3=Math.sqrt(sum3);
    console.log(can3);
    
    var result="";

    if (can1>can2 && can1>can3) {
        result = stu1;
    }
    else if (can2>can1 && can2>can3) {
        result = stu2;
    }
    else{
        result = stu3;
    }
    
    document.getElementById("txtSinhVien").innerHTML="Sinh viên xa trường nhất: "+result;

}