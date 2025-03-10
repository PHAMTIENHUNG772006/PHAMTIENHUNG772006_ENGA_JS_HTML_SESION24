let choose = "";
let menu = [
  `
    ================== MENU ===================

    
    1 - Nhập số phần tử cần nhập và giá trị các phần tử
    2 - In ra giá trị các phần tử đang quản lý
    3 - In ra giá trị lớn nhất và nhỏ nhất trong mảng
    4 - In ra giá trị các phần tử và tính tổng
    5 - Tìm số lần xuất hiện của một phần tử trong mảng
    6 - Sắp xếp mảng tăng dần
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
      let index = 0;
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
      console.log(` phần tử lớn nhất trong mảng là ${maxNumber}`);
      console.log(` phần tử lớn thứ hai trong mảng là ${lastMax}`);
      break;
    case 4:
      sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log(" Tổng các giá trị là : " + sum);
      break;
    case 5:
      count = 0;
      let seach = +prompt(" Mời bạn nhập phần tử đếm số lần xuất hiện ");
      for (let i = 0; i < arr.length; i++) {
        if (seach === arr[i]) {
          count++;
        }
      }
      if (count > 0) {
        console.log(count);
      } else {
        console.log(` không tìm thấy phần tử trong mảng`);
      }
      break;
    case 6:
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      console.log("Mảng sau khi sắp xếp tăng dần:", arr);
    case 7:
      console.log(` Đã thoát chương trình `);
      break;
    default:
        console.log(` dữ liệu sai `);
        
      break;
  }
} while (choose !== 7);
