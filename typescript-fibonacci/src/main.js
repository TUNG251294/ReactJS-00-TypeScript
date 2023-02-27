function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var n = 10; // số lượng số fibonacci cần tính và tính tổng
var sum = 0;
var fibSeries = '';
for (var i = 0; i < n; i++) {
    var fib = fibonacci(i);
    fibSeries += fib + ', ';
    sum += fib;
}
fibSeries = fibSeries.slice(0, -2); // loại bỏ dấu phẩy cuối cùng
console.log("S\u1ED1 Fibonacci: ".concat(fibSeries));
console.log("T\u1ED5ng c\u00E1c s\u1ED1 Fibonacci: ".concat(sum));
