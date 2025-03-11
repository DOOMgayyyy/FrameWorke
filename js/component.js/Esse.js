class Esse extends Component {
    constructor(options) {
      super(options);
      this.bindEvents();
    }
  
    bindEvents() {
      document.getElementById(this.id).addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
          this.handleButtonClick(e.target.textContent.trim());
        }
      });
    }
  
    handleButtonClick(action) {
      const actions = {
        'circle': () => alert('Круг!'),
        'sqare': () => alert('Квадрат!'),
        'romb': () => alert('Ромб!'),
        'star': () => alert('Звезда!')
      };
      actions[action]?.();
    }
  }