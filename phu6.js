let choose = "";
let menu = [
  `
    ================== MENU ===================

    1 - Nhập chuỗi
    2 - in chuỗi
    3 - tính độ dài chuỗi
    4 - Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
    5 - Kiểm tra chuỗi có phải là chuỗi đối xứng không
    6 - Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
    7 - Thoát chương trình


    =============================================
    `,
];

let string ='';
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
     console.log(` Độ dài chuỗi là ${string.length}`);
      break;
      case 4:
        let char = prompt("Nhập ký tự cần đếm: ");
        let count = string.split("").filter(c => c === char).length;
        console.log(`Ký tự '${char}' xuất hiện ${count} lần trong chuỗi.`);
        break;
    case 5:
        let reversedString = string.split("").reverse().join("");
        if(string === reversedString){
            console.log("Chuỗi là chuỗi đối xứng")
        } else {
            console.log("Chuỗi không phải là chuỗi đối xứng")
        }
        break;
    case 6:
        let words = string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
        string = words.join(" ");
        console.log(`Chuỗi sau khi chuyển đổi: ${string}`);
        break;
    case 7:
      console.log(` Đã thoát chương trình `);
      break;
    default:
        console.log(` dữ liệu sai `);
        
      break;
  }
} while (choose !== 7);
