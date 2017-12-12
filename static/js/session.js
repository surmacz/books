export class Session {
  constructor() {
    this.key = 'filters-settings';
    this.sortContainer = document.querySelector('aside .sort');
    this.filterInput = document.querySelector('aside .filter input');
  }

  save() {
    const sort = this.sortContainer.querySelector('input:checked');
    sessionStorage.setItem(this.key, JSON.stringify([sort ? sort.value : null, this.filterInput.value]));
  }

  load() {
    let item = JSON.parse(sessionStorage.getItem(this.key));
    if (!item) {
      return;
    }
    let [sort, filter] = item;
    if (sort) {
      this.sortContainer.querySelector(`input[value="${sort}"]`).checked = true;
    }
    if (filter) {
      this.filterInput.value = filter;
    }
  }
}
