let total = document.querySelector(".bottom-total-price");
let shipping = document.querySelector(".bottom-shipping-price");
let tax = document.querySelector(".bottom-tax-price");
let subtotal = document.querySelector(".bottom-subtotal-price");

let productPrice;
let productTotalPrice;
let remove;
let decrease;
let increase;

// var elements = document.getElementsByClassName("deneme");
// for (var i = 0; i < elements.length; i++) {
//   elements[i].addEventListener("click", function () {
//     alert("Hello World!");
//   });
// }

// document.getElementsByClassName("deneme")[0].addEventListener("click", function () {
//     alert("Hello World!");
// });

document.querySelectorAll(".deneme")[2].addEventListener("click", function () {
  console.log("merhaba");
});

// function increaseItem(event) {
//   let quantity = event.currentTarget.previousElementSibling.innerText;
//   quantity++;
//   event.currentTarget.previousElementSibling.innerText = quantity;

//   productPrice = event.currentTarget
//     .closest("div")
//     .previousElementSibling.querySelector(".price").innerText;

//   let totalProductPrice = Number(quantity * productPrice).toFixed(2);
//   event.currentTarget.closest(
//     "span"
//   ).nextElementSibling.nextElementSibling.lastElementChild.lastElementChild.innerText =
//     totalProductPrice;
// }

// function decreaseItem(event) {
//   let quantity = event.currentTarget.nextElementSibling.innerText;
//   if (quantity > 1) {
//     quantity--;
//     event.currentTarget.nextElementSibling.innerText = quantity;
//   }
// }

// function removeItem(event) {
//   let item = event.currentTarget.closest(".products");
//   item.remove();
// }

//   let sumofProductPrices = document.querySelectorAll(".product-price");
//   let total = 0;
//   for (let price of sumofProductPrices) {
//     console.log(price);
//     // total += Number(price.innerText).toFixed(2);
//   }
// //   console.log(total);
// }

// let totalProductPrices = document.querySelectorAll(".product-price").values;
// console.log(totalProductPrices);

// totalProductPrices.forEach(span => {
// total += span
// })

// const totalPrice = document.querySelector(".bottom-total-price");

// let bottomTotalPrice = document.querySelector(".bottom-total-price").innerText;

// console.log(bottomTotalPrice);

// let subTotalPrice = document.querySelector(".bottom-subtotal-price").innerText;
// console.log(subTotalPrice);

// let totalProductPrices = document.querySelectorAll(".product-price").innerText;
// console.log(totalProductPrices);

// function subTotalCalc() {
//   subTotalPrice.innerText = 500;
//   console.log(subTotal);
// }

// console.log(subTotal);

// function subTotalPrice(deger) {
//   let subTotalPrice = Number(
//     subtotalArea.innerText + deger
//   ).toFixed(2);
//   subtotalArea.innerText = subTotalPrice;
//   console.log(subTotalPrice);
// }
