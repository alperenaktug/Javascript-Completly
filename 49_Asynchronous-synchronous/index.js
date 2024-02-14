/*
Senkron = Executes line by line consecutively in a sequential manner code that waits for an aoperation to complete


Asenkron = Allows multiple operations to be performend cocurrently
without waiting doesn't the execution flow and allows the programs to continue (I/O operations , network request , fetching Data)
handle with : callbacks , Promise , Asyn/Await

Senkron = Bir işlemin tamamlanmasını bekleyen sıralı bir şekilde ardışık olarak satır satır yürütür


Asenkron = Birden çok işlemin aynı anda gerçekleştirilmesine izin verir beklemeden yürütme akışı olmaz ve programların devam etmesine izin verir (G / Ç işlemleri, ağ isteği, veri getirme)
*/

setTimeout(() => console.log("Task1"), 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
