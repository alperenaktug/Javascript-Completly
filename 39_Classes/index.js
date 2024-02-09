// class = (ES6 feature) provides a more structered and cleaner way to
//         work with objects compared to trditional constructor functions
//         ex. static keywords , encapsulation , inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("hat", 23.67);
const product2 = new Product("trousers", 19.99);
const product3 = new Product("underwear", 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax) $${total.toFixed(2)}`);
