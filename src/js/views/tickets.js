import CurrencyUI from "../views/currency";
class TicketsUI {
  constructor(currency) {
    this.container = document.querySelector(".tickets-sections .row");
    this.getCurrencySymb = currency.getСurrencySymbol.bind(currency);
  }
  renderTickets(tickets) {
    this.clearContainer();

    if (!tickets.length) {
      this.showEmptyMsg();
      return;
    }

    let fragment = "";

    const currencySymb = this.getCurrencySymb();

    tickets.forEach((el) => {
      const template = TicketsUI.ticketTemplate(el, currencySymb);
      fragment += template;
    });
    this.container.insertAdjacentHTML("afterbegin", fragment);
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  showEmptyMsg() {
    const template = TicketsUI.emptyMsgTemplate();
    return this.container.insertAdjacentHTML("afterbegin", template);
  }

  static emptyMsgTemplate() {
    return `
      <div class="tickets-empty-res-msg">
      По вашему запросу билетов не найдено.
      </div>
      `;
  }

  static ticketTemplate(el, currencySymb) {
    return `
    <div class="col s12 m6">
        <div class="card ticket-card">
          <div class="ticket-airline d-flex align-items-center">
            <img
              src='${el.airline_logo}'
              class="ticket-airline-img"
            />
            <span class="ticket-airline-name"
              >'${el.airline_name}'</span
            >
          </div>
          <div class="ticket-destination d-flex align-items-center">
            <div class="d-flex align-items-center mr-auto">
              <span class="ticket-city">'${el.origin_name}' </span>
              <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
              <i class="medium material-icons">flight_land</i>
              <span class="ticket-city">'${el.destination_name}' </span>
            </div>
          </div>
          <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">'${el.departure_at}'</span>
            <span class="ticket-price ml-auto">'${currencySymb}${el.price}'</span>
          </div>
          <div class="ticket-additional-info">
            <span class="ticket-transfers">Пересадок: '${el.transfers}'</span>
            <span class="ticket-flight-number">Номер рейса: '${el.flight_number}'</span>
          </div>
        </div>
      </div>
    `;
  }
}
const ticketsUI = new TicketsUI(CurrencyUI);

export default ticketsUI;
