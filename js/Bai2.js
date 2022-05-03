/**
 * Khoi 1:
 * Input: month, year
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị từ form
 * B2: lập công thức:
 *     
 * Nhập vào tháng và năm. Kiểm tra xem tháng đó có bao nhiêu ngày tương ứng với năm.
 * -Tháng có 30 ngày: 4 6 9 11
 * -Tháng có 31 ngày: 1 3 5 7 8 10 12
 * -Tháng 2:
 *   + Có 29 ngày: nếu năm là năm nhuận.
 *   + Có 28 ngày: nếu năm là năm không nhuận.
 * Năm nhuận là năm chia hết cho 4 và không chia hết cho 100 hoặc chia hết cho 400
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: btnTinhNgay
 */
function btnTinhNgay() {
    var month = parseInt(document.getElementById("month2").value);
    var year = parseInt(document.getElementById("year2").value);

    var date = 0;

    switch(month){
        
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:
            date=31;
            break;
        case 4:case 6:case 9:case 11:
            date=30;
            break;
        case 2:
            { 
                if(year%4==0 && year%100!=0 || year%400==0){
                    date = 29;
                }
                else{
                    date = 28;
                }
            break;
            }
        default:
            date=0;
    }
        
        document.getElementById("txtNamNhuan").innerHTML="Tháng "+month+" năm "+year+" có "+date+" ngày"

}
