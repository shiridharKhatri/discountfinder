let loadingDisplay = document.querySelector(".loader");
const loadingDisp = () => {
  loadingDisplay.style.display = "none";
};
let btn = document.getElementById("calculate");
btn.addEventListener("click", (e) => {
  let inpPrice = document.getElementById("realPrice");
  let inpDiscount = document.getElementById("discountPercent");
  let screen = document.querySelectorAll(".screen");
  if (inpPrice.value == "" || inpDiscount.value == "") {
    alert("Please Enter price and discount");
  } else {
    class Calculations {
      constructor(price, discount) {
        this.price = price;
        this.discount = discount;
      }
      afterDiscountPrice() {
        return (this.price * this.discount) / 100;
      }
    }
    class newCal extends Calculations {
      constructor(price, discount) {
        super(price, discount);
      }
      discountPrice() {
        return this.price - cal.afterDiscountPrice();
      }
    }
    const cal = new Calculations(inpPrice.value, inpDiscount.value);
    screen[1].innerHTML = `You have saved ${cal.afterDiscountPrice()} <i class="fa-solid fa-yen-sign"></i>`;
    screen[1].style.backgroundColor = "#445";
    screen[1].style.color = "#fff";
    const disCal = new newCal(inpPrice.value, inpDiscount.value);
    screen[0].innerHTML = `${disCal.discountPrice()} <i class="fa-solid fa-yen-sign"></i>`;
    screen[0].style.backgroundColor = "#445";
    screen[0].style.color = "#fff";
  }
  inpPrice.value = "";
  inpDiscount.value = "";
});