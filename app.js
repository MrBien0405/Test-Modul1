//Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// in ra kết quả. (1đ)
// ● Đầu vào: str
// ● Đầu ra: đảo ngược chuỗi và in ra kết quả
// ● Ví dụ:
// ○ Cho: str = &quot;program&quot;; in ra: &quot;margorp&quot;
// ○ Cho: str = &quot;data&quot;; in ra: &quot;atad&quot;
// ● Lưu ý: không sử dụng hàm reverse()
// let str = prompt("nhập 1 chuỗi vào đây")
// let a = ""
// for(let i = str.length-1; i >= 0; i= i - 1){
//     a= a + str[i];
// }console.log(`${a}`)

//Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
// chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// (1đ)
// ● Đầu vào: str
// ● Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ● Ví dụ
// ○ Cho &quot;this is A Test&quot;; In ra &quot;This Is A Test&quot;
// ○ Cho &quot;hello rikkei academy&quot;; In ra &quot;Hello Rikkei Academy”

// let str = prompt("Nhạp vao day").toLowerCase().split(" ")
// let newStrArr = [];
// for (let i = 0; i <= str.length - 1; i++){
//     a = str[i].split("")
//     a[0] = a[0].toUpperCase();
//     a = a.join("");
//     newStrArr.push(a);
// }
// console.log(newStrArr.join(" "));



//Bài 3 : Viết một chương trình xóa các phần tử trùng của một
// mảng và in ra kết quả. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// ● Ví dụ
// ○ Cho
// Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”fi
// ve”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// ○ Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]
// let arr= [ 1,2,3,4,5,5,3,5,6,7,4]
// let miniArr = [...new Set(arr)];

// console.log(miniArr);

// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong
// mảng theo thứ tự tăng dần. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ● Ví dụ
// ○ Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// ● Lưu ý: Không dùng hàm sort()
// arr = [6, 4, 3, 7, 8, 2]
// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//    for (let j = i + 1; j <= arr.length - 1; j = j + 1) {
//       if (arr[i] > arr[j]) {
//          b = arr[i]
//          arr[i] = arr[j]
//          arr[j] = b
//       }
//    }
// }
// console.log(`Thứ tự tăng dần la ${arr}`);

// Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên
// nhân viên). Xây dựng chương trình quản lý nhân viên với các
// chức năng (Read, Create, Update, Delete). (2đ)
// arr = ["Bien", "Dung", "Bach"];
// state = true;
// while(state){
// let userInput = prompt("Thao tác theo R/C/U/D/E").toUpperCase()
// if (userInput === "R") {
//    alert(`Nhân viên của Rikkei Academy là[${arr}]`)
// } else if (userInput === "C") {
//    let item = prompt("nhập tên nhân viên mới")
//    arr.push(item)
//    for (let i = 0; i <= arr.length - 1; i = i + 1) {
//       console.log(i + 1, arr[i]);
//    }

// } else if (userInput === "U") {
//    let updatearr = prompt("nhân viên muốn update");
//    let arrvitri = prompt("vị trí muốn update")
//    arr[arrvitri] = updatearr
//    for (let i = 0; i <= arr.length - 1; i = i + 1) {
//       console.log(i + 1, arr[i]);
//    }

// } else if (userInput === "D") {
//    let deletearrvitri = prompt("vị trí muốn xóa")
//    arr.splice(deletearrvitri,1)
//    for (let i = 0; i <= arr.length - 1; i = i + 1) {
//       console.log(i + 1, arr[i]);
//    }
// } else if (userInput === "E"){ 
// state = false;
// break;
// }
// }

//Bài 6 : Viết chương trình cho phép người dùng nhập vào ngày
// tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// ● Ví dụ
// ○ Ngày 30/4/2019 là ngày hợp lệ
// ○ Ngày 29/2/2019 là ngày không hợp lệ
// ● Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30]
// và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2
// năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// ● Ví dụ
// ○ Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// ○ Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021


let userInput = Number(prompt("nhập ngày bất kỳ vào đây"))
// state = true;
// while(state)
   switch(month){
      case 1:  
      if( date >= 1 && date <=31 ){
         alert(`Ngày ${date} là ngày hợp lệ`)
      }else{
         alert(`Ngày ${date} là ngày không hợp lệ`)
      }
      case 2:  
      if( date >= 1 && date <=28 ){
         alert(`Ngày ${date} là ngày hợp lệ`)
      }else{
         alert(`Ngày ${date} là ngày không hợp lệ`)
      }
      case 3:  
      if( date >= 1 && date <=30 ){
         alert(`Ngày ${date} là ngày hợp lệ`)
      }else{
         alert(`Ngày ${date} là ngày không hợp lệ`)
      }
   }













