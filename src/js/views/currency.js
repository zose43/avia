class CurrencyUI {
  constructor() {
    this.currency = document.getElementById("currency");
    this.dictionary = {
      USD: "$",
      EUR: "€",
    };
  }
  get CurrencyValue() {
    return this.currency.value;
  }

  getСurrencySymbol() {
    return this.dictionary[this.CurrencyValue];
  }
}
const currencyUI = new CurrencyUI();
export default currencyUI;
