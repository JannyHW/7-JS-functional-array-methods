// answer 1
let avg = items.reduce(function (a, b) {
    return a + b.price;
  }, 0) / items.length;

document.querySelector("#answer1").innerHTML = `The average price is $${avg.toFixed(2)}`;

// answer2
let chceker = items.filter(function (product) {
    return product.price > 14 && product.price < 18;
  })
  .map(function (who) {
    return who.title;
  })
  .join("\n");
document.querySelector("#answer2").innerHTML = chceker;

// answer3
let gbn = items.filter(function (money) {
    return money.currency_code === "GBP";
  })
  .map(function (x) {
    return x.title + " costs £" + x.price;
  });

document.querySelector("#answer3").innerHTML = gbn;

// answer4
let madeOfWood = items
  .filter(function (item) {
    return item.materials.includes("wood");
  })
  .map(function (all) {
    return all.title + " is made of wood.";
  })
  .join("\n");

document.querySelector("#answer4").innerHTML = madeOfWood;

// answer5

let eightUp = items.filter(function (product) {
    return product.materials.length >= 8;
  })
  .map(function (m) {
    return m.title + " has " + m.materials.length + " materials: \n" + m.materials.join("\n");
  }).join("\n\n")

document.querySelector("#answer5").innerHTML = eightUp;

// answer6
let sellerMade = items.filter(function (makers) {
  return makers.who_made === "i_did";
}).length

document.querySelector("#answer6").innerHTML = `${sellerMade} were made by their sellers`;
