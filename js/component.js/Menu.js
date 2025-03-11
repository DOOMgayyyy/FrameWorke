// js/ui/components/Menu.js
import Component from './Components.js';

export default class Menu extends Component {
  addEventListeners() {
    document.querySelectorAll('.menu-item').forEach(button => {
      button.addEventListener('click', (e) => {
        this.callbacks.show(e.target.dataset.name);
      });
    });
  }
}
// class Menu extends Component {
//     addEventListeners(){
//         document.querySelectorAll('.menu-item').forEach(button=>
//             button.addEventListener("click", (event)=>
//             this.callbacks.show(event.target.dataset.name))
//         )
//     }
// }