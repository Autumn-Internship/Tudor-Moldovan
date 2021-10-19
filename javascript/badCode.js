// Refactored code

// let > var
var customerInfo = {
  address: "Calea X 26",
};

function processOrder(customerInfo, basket, options) {
  // validateAddress > vldAddr
  const isAddressValid = vldAddr(customerInfo.address);

  // isAddressValid (BOOLEAN) > validateAddress




  // !isAddressValid = (isAddressValid === false)

  if (isAddressValid === false) {
    return;
  }

  applyDiscount(basket.totalPrice);

  if (options.paymentMethod.creditCard) {
    // payment method creditCard instead of cash
    pay(customerInfo.creditCard);
  }
  // use template literals
  return `Dear ${customerInfo.name} your order has been placed successfully. Carrier service: ${options.carrier}`;
}

function pay(cardDetails) {
  // functions should be written in camel case
  validateCardDetails(cardDetails);

  const status = makePayment();

  // use strict equality operator
  if (status === "ok") {
    return true;
  } else if (status === "wrong input") {
    throw new Error("You entered a wrong input. Please try again");
  } else if (status === "network err") {
    throw new Error("Check your internet connection");
  }
}

// use camelCase when writing functions
function validateCardDetails(card) {
  // card.expiryDate < Date.now()
  if (card.expiryDate < Date.now()) {
    validateName();
    validateCardNumber();
    validateIssuer();
    validateMerchant();

    // some random code, don't mind
    maxLength = Math.max.apply(null, cardType.lengths);
    if (options.maxLength) {
      maxLength = Math.min(options.maxLength, maxLength);
    }
  } else {
    return false;
  }
}

// validateAddress > vldAddress
function isAddressValid(address) {
  // Changed the condition to be tested from postalCode to address. Also added a 'd' to 'adress'
  return address ? postalCode : address.line1;
}

function applyDiscount(basket) {
  // Modified if statements
  if (basket.price > 200 && basket.coupons && basket.coupons.tenOff) {
    // Modified formula
    totalPrice = basket.price - basket.price * 0.1;
  } else {
    return basket.price;
  }
}
