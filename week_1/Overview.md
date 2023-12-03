## Details
- Date: 3/12/2023
- Week: 1
- Topic: Javascript Overview

## Topics
- `1.0` Why Languages? 
- `1.1` Interpreted vs Compiled Languages
- 1.2 Why Js >> Other languages
- 1.3 Strict vs Dynamic Languages
- 1.4 Single threaded nature of JS

# 1.0 | Why Languages?

Computers are dumb. They can only understand 1's and 0's. So how do we get from 1's and 0's to the web pages we see today? We use languages. `Languages` are a way for us to communicate with computers. They are a way for us to tell computers what to do.

### 1.0.1 | `Programming languages`: 
Converting developer's instructions into a language that computers can understand.

![Alt text](image-1.png)

### 1.0.2 | `Compilers`:
Compilers are programs that convert code written in a high-level language into a lower level language.
![Alt text](image-2.png)

![Alt text](image.png)

# 1.1 | Interpreted vs Compiled Languages
Interpreted languages are languages that are not compiled. They are executed line by line. Compiled languages are languages that are compiled. They are converted into a lower level language before execution.

![Alt text](image-3.png)

- Line by line execution conversion takes place in `Interpreted languages`.

### 1.1.1 | `Interpreted languages` | Js Hands on :

- Harkirat makes us code a Js file and run it in the terminal.
- Discussed `partial execution` of Js file (When it has errors).
    ```
    [JavaScript]

    console.log("Hello World");
    console.log(a);
    ```
- [Hands On JS File](hands_on.js)


# 1.2 | Why Js >> Other languages
- Js is the only language that can run on the browser.
- Js has been standardized by ECMA (European Computer Manufacturers Association), hence we are stuck with it.
- Js doesent have strict types, hence it is easy to learn.

- `IMP`: Runtime Error: Refers to errors that occur while a program is running. These errors are usually caused by something the programmer did wrong, such as forgetting to initialize an object before accessing it, Or when you are arbitrairily changing the type of a variable.
[Motivation for `Typescript`](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
![Alt text](image-4.png)