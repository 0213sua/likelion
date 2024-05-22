// let id = prompt("아이디를 입력하세요");
// ("l");
// let pw = prompt("비번을 입력하세요");

// if (id != "likelion") {
//   document.write("아이디가 일치하지 않습니다");
// } else if (pw != "lovefrontend") {
//   document.write("비밀번호가 일치하지 않습니다.");
// } else {
//   document.write("user_id님 반갑습니다!");
// }

var nums = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;

for (num of nums) {
  if (nums[i] % 2 != 0) {
    sum += nums[i];
  }
}

var min = Math.min(...nums);

console.log(
  `홀수의 합은 ${sum} 입니다! 그릐고 가장 작은 홀수는 ${min} 입니다!!`
);
