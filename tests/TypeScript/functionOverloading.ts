// define overloaded signatures
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;

// provide the implementation for the add function:The sum() function accepts either two or three numbers. 
// The third parameter is optional. If you don’t make it optional, you will get an error.
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

// use the overloaded function:
console.log(sum(1,2,3));
console.log(sum(1,2));