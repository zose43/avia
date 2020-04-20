import locations from "./store/locations";
import "../css/style.css";
import "./plugins";
import formUI from "./views/form";
import currencyUI from "./views/currency";
import ticketsUI from "../js/views/tickets";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUI.form;
  //Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  //Handlers

  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    //собрать данные из инпутов
    const origin = locations.getCityCodeByKey(formUI.OriginValue);
    const destination = locations.getCityCodeByKey(formUI.DestinationValue);
    const depart_date = formUI.DateDepartValue;
    const return_date = formUI.DateReturnValue;
    //currency
    const currency = currencyUI.CurrencyValue;
    // code depart city, code return city, 2019-09, 2019-10

    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    console.log(locations.lastSearch);

    ticketsUI.renderTickets(locations.lastSearch);
  }
});
