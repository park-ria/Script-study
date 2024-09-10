let a = 20;
let b = 22;
let c = 19;
let d = 30;
let result;

result = b >= c || c < d || b <= d;
// t || t || t = t
console.log(result);

result = a < b || b > c || a > d;
// t || t || f = t
console.log(result);

result = a > d || b < c || a > d;
// f || f || f = f
console.log(result);

result = b >= c && c < d && b <= d;
// t && t && t = t
console.log(result);

result = a < b && b > c && a > d;
// t && t && f = f
console.log(result);

result = a > d && b < c && a > d;
// f && f && f = f
console.log(result);

result = (--a > c && a < b) || (++c > a && d > c);
// (19>19 && 19<22) || (20>19 && 30>20)
// (f && t) || (t && t)
// f || t = t
// a=19, b=22, c=20, d=30
console.log(result);

result = (--b > c++ || d <= 40) && a > b;
// (21>20 || 30<=40) && 19 >21
// (f || t) && f
// t && f = f
// a=19, b=21, c=21, d=30
console.log(result);

d -= 10;
// a=19, b=21, c=21, d=20

result = ++a >= d && b <= c && c < d;
// 20 >= 20 && 21 <= 21 && 21 < 20
// t && t && f = f
// a=20, b=21, c=21, d=20
console.log(result);
