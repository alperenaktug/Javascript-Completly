// static = keyword that defines properties or methods thet belong
//  to a class itself rather than the object created
//  from that class (class owns anything StaticRange, not the objects)

// static = ait olan özellikleri veya yöntemleri tanımlayan anahtar kelime
// oluşturulan nesne yerine bir sınıfın kendisine
// bu sınıftan (sınıf, nesnelere değil, Statik bir Aralığa sahiptir)

// STATİC LE BİR SINIF OLUŞTURDUĞUMUZDA KURUCU METODA GEREK YOK.
// Static olarak oluşturulan bir şey sınıfın kendisine aittir.
// herhangi bir nesneye ait değildir.

// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(20));
// console.log(MathUtil.getCircumference(20));

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
}

const user1 = new User("Johnny Test");

console.log(user1.username);
console.log(User.userCount);
