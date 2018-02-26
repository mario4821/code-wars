function validatePIN (pin) {
    pin = /^[0-9]{4}$|^[0-9]{6}$/.test(pin)
    return pin;
  }