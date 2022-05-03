/**
 * Khoi 1:
 * Input: day, month, year
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị từ form
 * B2: lập công thức:
 *     
 * 
 * (DieuKien Ngày tháng )
 *  1<= month <=12
 *  1 <= day
 *  Nếu month = 1/3/5/7/8/10/12 thì 1<= day <=31
 *  Nếu month = 2 thì 1<= day <=28
 *  Nếu month = 4/6/9/11 thì 1<= day <=30
 * 
 * (NgayHomQua)
 * Nếu day = 1 , month = 2/4/6/8/9/11 thì ngayHomQua = 31/(1/3/5/7/8/10)/Year
 * Nếu day = 1, month = 1 thì ngayHomQua = 31/12/(Year - 1)
 * Nếu day = 1, month = 5/7/10/12 thì ngayHomQua = 30/(4/6/9/11)/Year
 * Nếu day = 1, month =3 thì ngayHomQua = 28/2/Year
 * Còn lại(else): ngayHomQua = day-1/month/year 
 * 
 * (NgayMai)
 * Nếu day = 31, month = 1/3/5/7/8/10 thì ngayMai = 1/ (2/4/6/8/8/11) /Year
 * Nếu day = 31, month = 12 thì ngayMai = 1/1/(Year+1)
 * Nếu day = 28, month = 2 thì ngayMai = 1/3/Year
 * Nếu day = 30, month = 4/6/9/11 thì ngayMai = 1/(5/7/10/12)/Year
 * Còn lại(else): ngayMai = day+1/month/year
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: ngayHomQua ; ngayMai
 */


function btnTomorrow() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var date = "";
    switch (month) {
        case 1: case 3: case 5:case 7:case 8:case 10:
            date = day >0 && day<31? day+1 +"/" +month+"/"+year : 31==day?"1/"+(month+1)+"/"+year : "Ngày không xác định";
            break;

        case 2:
            date = day>0&&day<28?day+1+"/"+month+"/"+year:28==day?"1/"+(month+1)+"/"+year:"Ngày không xác định";
            break;
        
        case 4:case 6:case 9:case 11:
            date = day>0&&day<30?day+1+"/"+month+"/"+year : 30==day?"1/"+(month+1)+"/"+year:"Ngày không xác định";
            break;
            
        case 12:
            date = day>0&&day<31?day+1+"/"+month+"/"+year : 31==day?"1/1/"+(year+1):"Ngày không xác định";
            break;
        default:
            date ="Tháng không xác định"
            break;
    }
    document.getElementById("txtTomorrow").innerHTML=date;

}

function btnYesterday() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);

    var date = "";
    switch (month) {
        case 1:
            date=day>1&&day<=31?day-1+"/"+month+"/"+year:1==day?"31/12/"+(year-1):"Ngày không xác định";
            break;
        
        case 2:
            date=day>1&&day<=28?day-1+"/"+month+"/"+year:1==day?"31/"+(month-1)+"/"+year:"Ngày không xác định";
            break;
        
        case 3:
            date=day>1&&day<=31?day-1+"/"+month+"/"+year:1==day?"28"+"/"+(month-1)+"/"+year:"Ngày không xác định";
        break;
        
        case 5:case 7:case 10:case 12:
            date=day>1&&day<=31?day-1+"/"+month+"/"+year:1==day?"30/"+(month-1)+"/"+year:"Ngày không xác định";
            break;
        case 8:
            date=day>1&&e<=31?day-1+"/"+month+"/"+year:1==day?"31/"+(month-1)+"/"+year:"Ngày không xác định";
            break;
        
        case 4:case 6:case 9:case 11:
            date=day>1&&day<=30?day-1+"/"+month+"/"+year:1==day?"31/"+(month-1)+"/"+year:"Ngày không xác định";
    }
    document.getElementById("txtYesterday").innerHTML=date;
}