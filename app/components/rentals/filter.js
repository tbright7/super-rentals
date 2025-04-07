import Component from '@glimmer/component';

export default class RentalsFilter extends Component {
  get results() {
    let { rentals, query } = this.args;
    console.log(rentals);
    if (query) {
      rentals = rentals.filter((rental) =>
        rental.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return rentals;
  }
}
