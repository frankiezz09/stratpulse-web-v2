import '../sass/home.scss';
export default class HomeController {
  constructor($location) {
    this.$location = $location;
    this.title = 'Stratpulse Web App';
    this.description = 'Lesgeriron Josh';
  }
}

HomeController.$inject = ['$location'];
