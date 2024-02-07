// Variable scope = Where a avariable is recognazid
//                  ana accesible (local vs global)

// isimler aynı olduğu halde farklı kapsamlarda
// olduğu sürece kullanılması yasaldır.
// Adlandırma anlamında bir çatışma olmaz .

let x = 3; // Global anlamda heryerden erişilebilir.

function1();
function2();

function function1() {
  // let x = 1;
  console.log(x);
}

function function2() {
  // let x = 2;
  console.log(x);
}

/* Özet olarak fonksiyonları eve benzetirsek iki ayrı komşuyu local 
 scopa benzetelim bunlar birbirlerinin evinin içini göremiyor erişemiyor
 dışarıdan bakarak ama bu iki evinde pencereden baktığında dışardaki
 sokak lambasını istedikleri zaman görebiliyorlar yani erişebiliyorlar
 buda global scope dur.



*/
