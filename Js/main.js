// console.log("Hello world");
// alert("Hello");

// a = 5;
// console.log(a);

// var a = 12345;

// console.log(a);

// console.log(b);
// let b = 5;
// console.log(b);

// const c = 7;
// // c = 5;
// console.log(c);
/**
 * var: thì khai báo và sử dụng được ở toàn bộ chương trình
 * let: thì khai báo xong mới được sử dụng và chỉ sử dụng trong khoảng nhất định
 * const: và nó là hằng nên không thay đổi được giá trị
 */

// for(var i=1;i<=5;i++) {
//     console.log(i);
// }

// console.log(i);

/*
    - Các kiểu dữ liệu: number(int, float, double,...), string, dateTime, array, object, function, boolean
    - Các toán tử: +,-,..., +=, -=, ++, --,..., ?:
    - if-else, switch-case, for (for in, for of), while, do-while
    - function
*/

// let arr = [1,2,3,4,5];
// for (let key in arr) {
//     console.log(key);
// }

// for (const iterator of arr) {
//     console.log(iterator);
// }

// let a = {
//     name: 'Tung',
//     age: 20
// }

// let b = '1';
// console.log(typeof(a));
// let c = a+b;
// let d = parseInt(c);
// let e = true;
// console.log(typeof(e));
// console.log(typeof(d));

// let a = '1';
// if (a==1) {
//     console.log(1);
// } else {
//     console.log(2);
// }

// function show(a,b,c) {
//     return a+b+c;
// }

// console.log(show(1,2,3));

// let e = function (a,b) {
//     return a+b;
// }

// console.log(e(1,2));

// let d = (a,b) => (a+b);

// console.log(d(1,2));

// let d = (a,b) => {
//     function show(a,b) {
//         return a+b;
//     }
//     console.log(show(a,b));
// }

// d(1,2);

(function show(a,b) {
    console.log(a+b);
})(1,2);