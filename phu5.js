let choose = "";
let menu = [
  `
    ================== MENU ===================


    1 - Nhập mảng 2 chiều
    2 - In ra giá trị các phần tử đang quản lý
    3 - Tính tổng các phần tử trong mảng
    4 - Tính tổng đường chéo chính
    5 - Tính tổng đường chéo phụ
    6 -  Tính trung bình cộng các phần tử trong một hàng hoặc một cột 
         (Người dùng chọn hàng hoặc cột cần tính toán)
    7 - Thoát chương trình


    =============================================
    `,
];

let arr = [];
let sum = 0;
let col ,row;
do {
  for (let element of menu) {
    console.log(`Lựa chọn:`, element);
  }
  choose = +prompt("Mời bạn nhập lựa chọn");

  switch (choose) {
    case 1:
      row = +prompt("Mời bạn nhập row trong mảng");
      col = +prompt("Mời bạn nhập col trong mảng");
      arr = [];
      for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
          arr[i][j] = +prompt(`Nhập phần tử tại [${i}][${j}]:`);
        }
      }
      break;
    case 2:
      if(arr.length === 0){
        console.log("Mảng chưa được nhập!");
      }else{
      let output = "Mảng 2 chiều:\n";
      for (let row of arr) {
        output += row.join(" ") + "\n";
      }
      console.log(output);
    }
      break;
    case 3:
      sum = 0;
      for (let rows of arr) {
        for (let num of rows) {
          sum += num;
        }
      }
      console.log(` Tổng các phần tử trong mảng là ${sum}`);

      break;
    case 4:
        if (arr.length === 0) {
            console.log("Mảng chưa được nhập!");
          } else if (row !== col) {
            console.log("Không thể tính tổng đường chéo chính vì mảng không vuông!");
          } else {
            let sumMainDiagonal = 0;
            for (let i = 0; i < row; i++) {
              sumMainDiagonal += arr[i][i];
            }
            console.log(`Tổng các phần tử đường chéo chính là: ${sumMainDiagonal}`);
          }
      break;
    case 5:
        if (arr.length === 0) {
            console.log("Mảng chưa được nhập!");
          } else if (row !== col) {
            console.log("Không thể tính tổng đường chéo phụ vì mảng không vuông!");
          } else {
            let sumSecondDiagonal = 0;
            for (let i = 0; i < row; i++) {
              sumSecondDiagonal += arr[i][col - i - 1];
            }
            console.log(`Tổng các phần tử đường chéo phụ là: ${sumSecondDiagonal}`);
          }
      break;
    case 6:
        if (arr.length === 0) {
            console.log("Mảng chưa được nhập!");
          } else {
            let choice = prompt("Bạn muốn tính trung bình cộng theo hàng (h) hay cột (c)?").toLowerCase();
          
            switch (choice) {
              case "h": {
                let indexRow = +prompt("Mời bạn nhập số hàng cần tính trung bình:");
                if (indexRow < 0 || indexRow >= row) {
                  console.log("Hàng không hợp lệ!");
                } else {
                  let rowSum = arr[indexRow].reduce((sum, num) => sum + num, 0);
                  let avg = rowSum / col;
                  console.log(`Trung bình cộng của hàng ${indexRow} là: ${avg}`);
                }
                break;
              }
              case "c": {
                let indexCol = +prompt("Mời bạn nhập số cột cần tính trung bình:");
                if (indexCol < 0 || indexCol >= col) {
                  console.log("Cột không hợp lệ!");
                } else {
                  let colSum = 0;
                  for (let i = 0; i < row; i++) {
                    colSum += arr[i][indexCol];
                  }
                  let avg = colSum / row;
                  console.log(`Trung bình cộng của cột ${indexCol} là: ${avg}`);
                }
                break;
              }
              default:
                console.log("Lựa chọn không hợp lệ!");
            }
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
