function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 10; // số lượng số fibonacci cần tính và tính tổng
let sum = 0;
let fibSeries = '';
for (let i = 0; i < n; i++) {
    const fib = fibonacci(i);
    fibSeries += fib + ', ';
    sum += fib;
}
fibSeries = fibSeries.slice(0, -2); // loại bỏ dấu phẩy cuối cùng
console.log(`Số Fibonacci: ${fibSeries}`);
console.log(`Tổng các số Fibonacci: ${sum}`);
