// A simple TypeScript Hello World program

function sayHello(name: string = "World"): string {
    return `Hello, ${name}!`;
}

// Print the greeting
console.log(sayHello());

// You can also greet a specific name
console.log(sayHello("TypeScript"));