
// 2.Natural son berilgan,uning oxirgi raqamini toping.

// let sampleNumber = 123456789,
//   lastDigit = sampleNumber % 10;
// console.log(lastDigit);


// 4.Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.
// function swapEnds(nums){
//     if (nums.length === 1) {
//       return nums;
//     } else if (nums.length === 2) {
//       return nums.reverse();
//     } else {
//       let firstPosition = nums.shift();
//       let lastPosition = nums.pop();
//       return [lastPosition, ...nums, firstPosition];
//     }
//   }

    // swapEnds([1, 2, 3, 4]) → 4,2,3,1
    // swapEnds([1, 2, 3]) → 3,2,1
    // swapEnds([8, 6, 7, 9, 5]) → 5,9,7,6,8


// 5.n raqami berilgan bo'lsa, 0, 1, 2, ... n-1 raqamlarini o'z ichiga olgan n uzunlikdagi yangi massivni yarating va qaytaring. Berilgan n 0 bo'lishi mumkin, bu holda faqat 0 uzunlikdagi massivni qaytaring. Uzunlik-0 holati uchun alohida if-iborasi kerak emas; for-loop bu holda tabiiy ravishda 0 marta bajarilishi kerak, shuning uchun u faqat ishlaydi. Yangi massiv yaratish sintaksisi myArray = [];
// function fizzArray2(n){
//     let newArr=[]
//     for (let i = 0; i<n; i++){
//         newArr.push(i+ '')
//     }

//     return newArr
// }

// fizzArray(4) → 0,1,2,3
// fizzArray(1) → 0
// fizzArray(10) → 0,1,2,3,4,5,6,7,8,9



// 6.Boshlanish va tugatish raqamlarini hisobga olgan holda, boshidan oxirigacha, lekin oxirigacha bo'lmagan butun sonlar ketma-ketligini o'z ichiga olgan yangi massivni qaytaring, shuning uchun start=5 va end=10 {5, 6, 7, 8, 9} hosil qiladi. Yakuniy raqam boshlang'ich raqamdan kattaroq yoki teng bo'ladi. E'tibor bering, uzunlik-0 massivi haqiqiydir.

// function fizzArray3(start, end){
//     let newArr=[]
//     for(let i=start; i<end; i++){
//      newArr.push(i)
//     }

//     return newArr
// }

// fizzArray3(5, 10) → 5,6,7,8,9
// fizzArray3(11, 18) → 11,12,13,14,15,16,17
// fizzArray3(1, 3) → 1,2



// 7.Return the number of times that the string "hi" appears anywhere in the given string.

// function countHi(str){
//     let ourHiArray = [];
//     for (let i = 0; i < str.length; i++){
//       if (str[i] + str[i+1] === 'hi') {
//        ourHiArray.push(str[i]);
//       }
//     }
//     return ourHiArray.length;
//   }

// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

