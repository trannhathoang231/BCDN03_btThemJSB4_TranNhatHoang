/**
 * Khoi 1:
 * Input: num
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị từ form
 * B2: lập công thức:
 * 
 *  unit = num%100%10;
 *  hund = Math.floor(num/100);
 *  ten = Math.floor(num%100/10);
 * 
 *  a = "hund" trăm + "ten" chục + "unit";
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: txtNhapso
 */

function btnNhapSo(){
    var num = document.getElementById("num").value;
    var unit = num%100%10;
    var hund = Math.floor(num/100);
    var ten = Math.floor(num%100/10);

    var a="";

    switch(hund){
        case 1:a+="một trăm ";break;
        
        case 2:a+="hai trăm ";break;
        
        case 3:a+="ba trăm ";break;
        
        case 4:a+="bốn trăm ";break;
        
        case 5:a+="năm trăm ";break;
        
        case 6:a+="sáu trăm ";break;
        
        case 7:a+="bảy trăm ";break;
        
        case 8:a+="tám trăm ";break;
        
        case 9:a+="chín trăm ";break;
        
        default:alert("số hàng trăm không xác định được")
    }
        
    switch(ten){
        case 1:a+="mười ";break;
        
        case 2:a+="hai mươi ";break;
        
        case 3:a+="ba mươi ";break;
        
        case 4:a+="bốn mươi ";break;
        
        case 5:a+="năm mươi ";break;
        
        case 6:a+="sáu mươi ";break;
        
        case 7:a+="bảy mươi ";break;
        
        case 8:a+="tám mươi ";break;
        
        case 9:a+="chín mươi ";break;
        
        case 0:
            {
                if(unit>0){
                    a+="lẻ ";
                }else{
                    a+="";
                }
                break;
            }
    }
    switch(unit){
        case 1:a+="một";break;
        
        case 2:a+="hai";break;
        
        case 3:a+="ba";break;
        
        case 4:a+="bốn";break;
        
        case 5:a+="năm";break;
        
        case 6:a+="sáu";break;
        
        case 7:a+="bảy";break;
        
        case 8:a+="tám";break;
        
        case 9:a+="chín";break;
        
        default:a+="";
    }
    document.getElementById("txtNhapso").innerHTML=a
}