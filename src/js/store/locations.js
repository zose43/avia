import api from "../services/apiService";
import { formatDate } from "../helpers/date";

class Locations {
  constructor(api, helpers) {
    this.api = api;
    this.countries = null;
    this.cities = null;
    this.shortCitiesList = null;
    this.airlines = {};
    this.lastSearch = {};
    this.formatDate = helpers.formatDate;
  }
  async init() {
    const response = await Promise.all([
      (this.countries = api.countries()),
      (this.cities = api.cities()),
      (this.airlines = api.airlines()),
    ]);

    const [countries, cities, airlines] = response;

    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    this.airlines = this.serializeAirlines(airlines);
    this.shortCitiesList = this.createShortCitiesList(this.cities);

    return response;
  }

  getCityCodeByKey(key) {
    const city = Object.values(this.cities).find((item) => {
      return item.full_name === key;
    });
    return city.code;
  }

  getCityNameByCode(code) {
    return this.cities[code].name;
  }

  getAirlineNameByCode(code) {
    return this.airlines[code] ? this.airlines[code].name : "";
  }

  getAirlineLogoByCode(code) {
    return this.airlines[code] ? this.airlines[code].logo : "";
  }

  createShortCitiesList(cities) {
    // entries --> [key, value]
    /* entries -> [, city] */
    // {`City, Country`: null}

    return Object.entries(cities).reduce((acc, [, city]) => {
      acc[city.full_name] = null;
      return acc;
    }, {});
  }

  serializeCountries(countries) {
    // {'Country_code': {...}}

    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      return acc;
    }, {});
  }

  serializeCities(cities) {
    //{'City_name, Country_name': {...}}

    return cities.reduce((acc, city) => {
      const country_name = this.getCountryNameByCode(city.country_code);
      const full_name = `${
        city.name || city.name_translations.en
      }, ${country_name}`;
      acc[city.code] = { ...city, full_name, country_name };
      return acc;
    }, {});
  }

  serializeAirlines(airlines) {
    return airlines.reduce((acc, item) => {
      item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
      item.name = item.name || item.name_translations.en;
      acc[item.code] = item;
      return acc;
    }, {});
  }

  getCountryNameByCode(code) {
    // {'Country_code': {...}}

    return this.countries[code].name;
  }

  serializeTickets(tickets) {
    return Object.values(tickets).map((ticket) => {
      return {
        ...ticket,
        origin_name: this.getCityNameByCode(ticket.origin),
        destination_name: this.getCityNameByCode(ticket.destination),
        airline_logo: this.getAirlineLogoByCode(ticket.airline),
        airline_name: this.getAirlineNameByCode(ticket.airline),
        departure_at: this.formatDate(ticket.departure_at, "dd MMM yyyy hh:mm"),
        return_at: this.formatDate(ticket.return_at, "dd MMM yyyy hh:mm"),
      };
    });
  }

  async fetchTickets(params) {
    const response = await this.api.prices(params);
    this.lastSearch = this.serializeTickets(response.data);
    // серилизовать поиск так, чтобы внутри было название города и страны
  }
}

const locations = new Locations(api, { formatDate });
export default locations;
