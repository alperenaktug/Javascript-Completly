// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically
//change the content, structure, and style of a web page.

// DOM = BELGE NESNE MODELİ
// Web tarayıcısında gördüğünüz sayfayı temsil eden nesne{}
// ve onunla etkileşim kurmanız için size bir API sağlar.
// Web tarayıcısı, bir HTML belgesi yüklediğinde dom'u oluşturur,
// ve tüm öğeleri ağaç benzeri bir temsilde yapılandırır.
// JavaScript dom'a dinamik olarak erişebili

const username = "john Morrison";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);
