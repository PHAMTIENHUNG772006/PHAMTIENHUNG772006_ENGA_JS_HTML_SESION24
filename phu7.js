let choose = "";
let menu = [
  `
    ================== MENU ===================

    1 - Nhập chuỗi
    2 - in chuỗi
    3 - Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
    4 - Đảo ngược chuỗi ký tự
    5 - Đếm số lượng từ trong chuỗi ký tự
    6 - Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. 
    7 - Thoát chương trình


    =============================================
    `,
];

let string = "";
do {
  for (let element of menu) {
    console.log(`lựa chọn:`, element);
  }
  choose = +prompt("mời bạn nhập lựa chọn");

  switch (choose) {
    case 1:
      string = prompt(` Mời bạn nhập chuỗi kí tự`);
      break;
    case 2:
      console.log(string);
      break;
    case 3:
        let trimmedString = string.trim();
      console.log(` chuỗi sau khi loại bỏ khoảng trắng đầu cuối là ${trimmedString}`);
      break;
    case 4:
      let reversedString = string.split(" ").reverse().join(" ");
      console.log(` Chuỗi sau khi đảo ngược là ${reversedString}`);
      break;
    case 5:
      let countString = string.split(" ");
      if (string.length > 0) {
        console.log(` Số lượng từ trong chuỗi là ${string.length}`);
      } else {
        console.log(" không có chuỗi để thực hiện đếm");
      }
      break;
    case 6:
      let searchChar = prompt("Nhập ký tự cần tìm:");
      if (string.includes(searchChar)) {
        console.log("Tìm thấy ký tự trong chuỗi!");
        let replaceChar = prompt("Nhập ký tự thay thế:");
        let newStr = string.replaceAll(searchChar, replaceChar);
        console.log("Chuỗi sau khi thay thế: " + newStr);
      } else {
        console.log("Không tìm thấy ký tự trong chuỗi!");
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
