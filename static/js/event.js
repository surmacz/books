export class Event {
  constructor(data, session) {
    this.data = data;
    this.session = session;
  }

  register() {
    this.popupOpen();
    this.popupClose();
    this.sort();
    this.filter();
    this.clear();
  }

  popupOpen() {
    let container = document.querySelector('main ol'),
      popup = document.querySelector('.popup'),
      img = popup.querySelector('img');

    container.addEventListener('click', e => {
      if (e.target.nodeName === 'IMG') {
        img.setAttribute('src', e.target.getAttribute('data-large'));
        popup.style.display = 'block';
      }
    });
  }

  popupClose() {
    let container = document.querySelector('.popup .close'),
      popup = document.querySelector('.popup');

    container.addEventListener('click', () => popup.style.display = 'none');
  }

  sort() {
    let container = document.querySelector('aside .sort');
    container.addEventListener('click', e => {
      if (e.target.nodeName === 'INPUT') {
        this.refresh();
      }
    });
  }

  filter() {
    let container = document.querySelector('aside .filter input');
    container.addEventListener('input', this.refresh.bind(this));
  }

  clear() {
    let container = document.querySelector('aside > button'),
      sortInputs = document.querySelectorAll('aside .sort input'),
      filterInput = document.querySelector('aside .filter input'),
      clear = () => {
        for (let sortInput of sortInputs) {
          sortInput.checked = false;
        }
        filterInput.value = '';
        this.refresh();
      };

    container.addEventListener('click', clear);
    document.addEventListener('keydown', e => {
      if (e.altKey && e.key === 'r') {
        clear();
      }
    });
  }

  refresh() {
    this.session.save();
    this.data.refresh();
  }
}
