let choose = "";
let menu = [
  `
    ================== MENU ===================

    1 - Nhập số phần tử cần nhập và giá trị các phần tử
    2 - In ra giá trị các phần tử đang quản lý
    3 - Tìm các phần tử chẵn và lẻ
    4 - Tính trung bình cộng của mảng
    5 - Xóa phần tử tại vị trí chỉ định
    6 - Tìm phần tử lớn thứ hai trong mảng
    7 - Thoát chương trình


    =============================================
    `,
];

let arr = [];
let sum = 0;
do {
  for (let element of menu) {
    console.log(`lựa chọn:`, element);
  }
  choose = +prompt("mời bạn nhập lựa chọn");

  switch (choose) {
    case 1:
      let n = +prompt("Mời bạn nhập số lượng phần tử trong mảng");

      for (let i = 1; i <= n; i++) {
        let item = +prompt(`Mời bạn nhập phần tử thứ ${i} của mảng :`);
        if (!isNaN(item)) {
          arr.push(item);
        }
      }
      break;
    case 2:
      console.log(` Các phần tử trong mảng là :`, arr);
      break;
    case 3:
      let arrEven = [];
      let arrOdd = [];
      for (let i = 0;i< arr.length;i++) {
        if(arr[i] % 2 === 0){
            arrEven.push(arr[i]);
        }else{
            arrOdd.push(arr[i]);
        }
      }
      console.log(` Mảng với những giá trị chẵn ${arrEven}`);
      console.log(` Mảng với những giá trị lẻ ${arrOdd}`);

      break;
    case 4:
      sum = 0;
      count = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
      }
      let tbc = sum / count;
      console.log(" Tổng các giá trị sau khi tính trung bình cộng là : ", tbc);
      break;
    case 5:
        let index = +prompt("Nhập giá vị trí cần xóa: ");
        let flag = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i === index) {
                arr.splice(index,1);
                flag++;
            }
        }
        if(flag > 0){
            console.log(" Mảng sau khi xoá :",arr);
        }else{
            console.log(` không có giá trị đó trong mảng`);
            
        }
        
      break;
    case 6:
        let maxNumber = 0;
        let lastMax = 0;
        index = 0;
        if (arr.length === 0) {
          console.log("Mảng đang rỗng.");
          break;
        }
        maxNumber = arr[0];
        lastMax = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > maxNumber) {
            maxNumber = arr[i];
            index = i;
          }
        }
        arr.splice(index, 1);
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > lastMax) {
            lastMax = arr[i];
          }
        }
        console.log(` phần tử lớn thứ hai trong mảng là ${lastMax}`);
    case 7:
      console.log(` Đã thoát chương trình `);
      break;
    default:
        console.log(` dữ liệu sai `);
        
      break;
  }
} while (choose !== 7);
