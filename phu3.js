let choose = "";
let menu = [
  `
    ================== MENU ===================


    1 - Nhập số phần tử cần nhập và giá trị các phần tử
    2 - In ra giá trị các phần tử đang quản lý
    3 - Tìm phần tử lớn nhất trong mảng
    4 - Tính tổng các số dương và trung bình cộng của mảng
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
        console.log(` phần tử lớn nhất trong mảng là ${maxNumber} với chỉ số là ${index}`);
      break;
    case 4:
      sum = 0;
      count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
            count++;
        }
      }
      let tbc = sum / count;
      console.log(` Tổng các giá trị dương là ${sum}`);
      console.log(" Tổng các giá trị sau khi tính trung bình cộng là : ", tbc);
      break;
    case 5:
      arr.reverse();
      console.log(` Mảng sau khi đảo ngược là ${arr}`);
       break;
    case 6:
      let checkSymmetry = true;
      for( let i=0;i<Math.floor(arr.length / 2);i++){
        if(arr[i] !== arr[arr.length-i-1]){
            checkSymmetry = false;
            break;
        }
      }
      if(checkSymmetry){
        console.log(` Mảng là mảng đối xứng`);
      }else{
        console.log(` Mảng không phải là mảng đối xứng`);
      }
       break;
    case 7:
      console.log(` Đã thoát chương trình `);
      break;
    default:
        console.log(` dữ liệu sai `);
      break;
  }
} while (choose !== 7);
