let choose = "";
let menu = [
  `
    ================== MENU ===================


    1 - Nhập mảng 2 chiều
    2 - In ra giá trị các phần tử đang quản lý
    3 - Tính tổng các phần tử trong mảng
    4 - Tìm phần tử lớn nhất trong mảng và chỉ số của nó
    5 - Tính trung bình cộng các phần tử của một hàng cụ thể
    6 - Đảo ngược các hàng trong mảng
    7 - Thoát chương trình


    =============================================
    `,
];

let arr = [];
let sum = 0;
do {
  for (let element of menu) {
    console.log(`Lựa chọn:`, element);
  }
  choose = +prompt("Mời bạn nhập lựa chọn");

  switch (choose) {
    case 1:
      let row = +prompt("Mời bạn nhập row trong mảng");
      let col = +prompt("Mời bạn nhập col trong mảng");
      for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
          arr[i][j] = +prompt(`Nhập phần tử tại [${i}][${j}]:`);
        }
      }
      break;
    case 2:
      let output = "Mảng 2 chiều:\n";
      for (let row of arr) {
        output += row.join(" ") + "\n";
      }
      console.log(output);
      break;
    case 3:
      sum = 0;
      for (let row of arr) {
        for (let num of row) {
          sum += num;
        }
      }
      console.log(` Tổng các phần tử trong mảng là ${sum}`);

      break;
    case 4:
      if (arr.length === 0) {
        console.log("Mảng chưa được nhập!");
      } else {
        let maxVal = arr[0][0];
        let maxRow = 0,
          maxCol = 0;

        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxVal) {
              maxVal = arr[i][j];
              maxRow = i;
              maxCol = j;
            }
          }
        }
        console.log(
          `Phần tử lớn nhất trong mảng là ${maxVal} tại vị trí [${maxRow}][${maxCol}]`
        );
      }
      break;
    case 5:
      if (arr.length === 0) {
        console.log("Mảng chưa được nhập!");
      } else {
        let indexRow = +prompt(` Mời bạn nhập dòng cần tính tbc `);
        if (indexRow < 0 || indexRow >= arr.length) {
          console.log(` Không có phần tử nào trong mảng `);
        } else {
          let rowSum = arr[indexRow].reduce((sum, num) => sum + num, 0);
          let avg = rowSum / arr[indexRow].length;
          console.log(` Trung binh cộng của ${indexRow} là ${avg}`);
        }
      }
      break;
    case 6:
      if (arr.length === 0) {
        console.log("Mảng chưa được nhập!");
      } else {
        arr = arr.map((row) => row.reverse())
        console.log("Mảng sau khi đảo ngược hàng:");
        let output = "";
        for (let row of arr) {
          output += row.join(" ") + "\n";
        }
        console.log(output);
      }
      break;
    case 7:
      console.log(` Đã thoát chương trình `);
      break;
    default:
      console.log(` Dữ liệu sai `);
      break;
  }
} while (choose !== 7);
