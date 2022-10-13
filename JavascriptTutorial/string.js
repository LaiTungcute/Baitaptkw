let myName = 'HoangTungne';

//string.charAt(index): Hiển thị phần tử thứ n trong chuỗi
console.log(myName.charAt(4));

let a = 'Hoàng'
let b = 'Tùng'

//string.concat(string2). Nối 2 chuỗi vào với nhau
console.log(a.concat(b));

let fullName = "Lai Hoang Tung";
//string.includes(a,b): Tìm kiếm xem phần tử đó có tồn tại hay ko? (a là chuỗi cần tìm kiếm, b là vị trí bắt đầu tìm kiếm)
console.log(fullName.includes('Tung', 15));

let subject = 'Javascript';
//string.indexOf(a): Phần tử này xuất hiện lần đầu tiên ở đâu? (a là chuỗi cần xét)
console.log(subject.indexOf('a'));
console.log(subject.lastIndexOf('a'));

let myFullName = 'Lai Hoang Tung';
//string.slice(start, (end)): Lấy các phần tử từ start tới end (ko lấy end), nếu ko có end thì lấy từ start tới hết chuỗi
console.log(myFullName.slice(3,5));
myFullName = 'Lai Hoang Tung';
//string.substring(start, (end)): Giống như slice nhưng start có thể lớn hơn end
console.log(myFullName.substring(1,5));
myFullName = 'Lai Hoang Tung';
// string.substr(start, (length)): Lấy các phần tử từ start và lấy số lượng phần tử là length
console.log(myFullName.substr(3,2));

let world = "            Hello world       ";
//string.trim(): Bỏ các khoảng trắng ở đầu và cuối mảng
console.log(world.trim());

//eval(string): Trả về kết quả 1 phép tính
console.log(eval('a+2'));

/*
    templates string: `jhdaudhauduayfg ${a}`
*/
let string = `My name is ${b}`;
console.log(string);
let html = `<ul>
    <li>Hello</li>
</ul>`;
console.log(html);     

/*
    split: Chia string thành các mảng
*/
let x = '1,2,3,4,5';
let y = x.split(',');
console.log(y);
console.log(y.toString());