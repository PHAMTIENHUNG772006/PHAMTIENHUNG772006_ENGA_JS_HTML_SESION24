let choose = "";
let menu = [
  `
    ================== MENU ===================

    1 - Nhập chuỗi
    2 - in chuỗi
    3 - Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
    4 - Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
    5 - Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
    6 - Chuyển đổi chuỗi ký tự thành dạng snake_case
    7 - Thoát chương trình


    =============================================
    `,
];
let words = [];
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
      let wordCount = new Map();
      let maxCountString = 0;
      let mostFrequentWords = [];
      words = string.toLowerCase().split(" ");
      for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
        maxCountString = Math.max(maxCountString, wordCount.get(word));
      }
      for (let [word, count] of wordCount) {
        if (count === maxCountString) {
          mostFrequentWords.push(word);
        }
      }
      console.log(
        `Từ xuất hiện nhiều nhất: ${mostFrequentWords.join(
          ", "
        )} với ${maxCountString} lần xuất hiện`
      );

      break;
    case 4:
        words = string.split(" ");
        let longWords = [words[0]];
        let shortWords = [words[0]];
        for (let word of words) {
          if (word.length > longWords[0].length) {
            longWords = [word]; 
          } else if (word.length === longWords[0].length) {
            longWords.push(word); 
          }
        }
       console.log(`Từ dài nhất: ${longWords.join(", ")} (${longWords[0].length} ký tự)`);
       console.log(`Từ ngắn nhất: ${shortWords.join(", ")} (${shortWords[0].length} ký tự)`);
      break;
    case 5:
      let charCount = {};
      let maxCount = 0;
      let mostChars = [];
      for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
        maxCount = Math.max(maxCount, charCount[char]);
      }
      for (let char in charCount) {
        if (charCount[char] === maxCount) {
          mostChars.push(char);
        }
      }
      console.log(
        `Ký tự xuất hiện nhiều nhất: ${mostChars.join(", ")}`
      );
      console.log(`Số lần xuất hiện: ${maxCount}`);

      break;
    case 6:
        let newStr = string.replaceAll(" ", "_");
        console.log("Chuỗi sau khi thay thế: " + newStr);
      break;
    case 7:
      console.log(` Đã thoát chương trình `);
      break;
    default:
      console.log(` dữ liệu sai `);

      break;
  }
} while (choose !== 7);
