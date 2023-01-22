// let subtotalArea = document.querySelector(".bottom-subtotal-price"); //getElementClassName çalışmadı
// subtotalArea.innerText = 0;
// let taxArea = document.querySelector(".bottom-tax-price");
// taxArea.innerText = 0;
// let shippingArea = document.querySelector(".bottom-shipping-price");
// shippingArea.innerText = 0;
// let totalPriceArea = document.querySelector(".bottom-total-price");
// totalPriceArea.innerText = 0;
// let totalProductPrice = document.querySelector(".product-price");
// totalProductPrice.innerText = 0;

function increaseItem(event) {
  let quantity = event.currentTarget.previousElementSibling.innerText;
  quantity++;
  event.currentTarget.previousElementSibling.innerText = quantity;

  let itemPrice = event.currentTarget
    .closest("div")
    .previousElementSibling.querySelector(".price").innerText;

  let totalProductPrice = Number(quantity * itemPrice).toFixed(2);
  event.currentTarget.closest(
    "span"
  ).nextElementSibling.nextElementSibling.lastElementChild.lastElementChild.innerText =
    totalProductPrice;
  subTotalCalc();
}

function decreaseItem(event) {
  let quantity = event.currentTarget.nextElementSibling.innerText;
  if (quantity > 1) {
    quantity--;
    event.currentTarget.nextElementSibling.innerText = quantity;
  }
}

function removeItem(event) {
  let item = event.currentTarget.closest(".products");
  item.remove();
}

// let totalProductPrices = document.querySelectorAll(".product-price").values;
// console.log(totalProductPrices);

// totalProductPrices.forEach(span => {
// total += span
// })

const totalPrice = document.querySelector(".bottom-total-price");

let bottomTotalPrice = document.querySelector(".bottom-total-price").innerText;

console.log(bottomTotalPrice);

// function subTotalCalc() {
//   let subTotalPrice = document.querySelector(
//     ".bottom-subtotal-price"
//   ).innerText;
//   console.log(subTotalPrice);
//   let subTotal = Number(subTotalPrice + 2).toFixed(2);
//   return subTotal;
// }

// console.log(subTotal);

// function subTotalPrice(deger) {
//   let subTotalPrice = Number(
//     subtotalArea.innerText + deger
//   ).toFixed(2);
//   subtotalArea.innerText = subTotalPrice;
//   console.log(subTotalPrice);
// }
