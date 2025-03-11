import Component from './core/Component.js';
import { menuTemplate } from './templates/menuTemplate.js';
import Menu from './component.js/Menu.js';

export default class App extends Component {
    constructor(props) {
        super({
            ...props,
            template: () => '<div data-content="menu"></div><div data-content="content"></div>'
        });

        this.menu = new Menu({
            id: 'menu',
            parent: this.id,
            template: menuTemplate
        });

        this.menu.showEssePage();
    }
}
// import Component from '../ui/components/Component.js'; 
// import Menu from '../ui/components/Menu.js';
// import Esse from '../ui/components/Esse.js';
// import { menuTemplate, esseTemplate } from '../core/templates.js';
// export default class App extends Component {
//   constructor(options) {
//     super(options);
//     this.initComponents();
//   }

//   initComponents() {
//     new Menu({
//       id: 'menu',
//       parent: this.id,
//       template: menuTemplate,
//       callbacks: {
//         show: (name) => this.showContent(name),
//       },
//     });

//     new Esse({
//       id: 'esse',
//       parent: this.id,
//       template: esseTemplate,
//     });
//   }

//   showContent(name) {
//     console.log(`Показан раздел: ${name}`);
//   }
// }



// // js/core/App.js
// import Component from '/ui/components/Component.js';
// import Menu from '/ui/components/Menu.js';
// import Esse from '/ui/components/Esse.js';
// import { menuTemplate, esseTemplate } from '/ui/templates/templates.js';

// export default class App extends Component {
//   constructor(options) {
//     super(options);
//     this.initComponents();
//   }

//   initComponents() {
//     // Создание меню
//     new Menu({
//       id: 'menu',
//       parent: this.id,
//       template: menuTemplate,
//       callbacks: {
//         show: (name) => this.showContent(name),
//       },
//     });

//     // Создание контента эссе
//     new Esse({
//       id: 'esse',
//       parent: this.id,
//       template: esseTemplate,
//     });
//   }

//   showContent(name) {
//     document.querySelectorAll('[data-content]').forEach(el => {
//       el.classList.toggle('hide', el.dataset.content !== name);
//     });
//   }
// }
// class App extends Component {
//     constructor(options) {
//         const callbacks = {
//             show: (name) => this.showContent(name)
//         };
//         super({ 
//             ...options, 
//             callbacks, 
//             template: template.menuTemplate, 
//             className: 'main-container' 
//         });
//         new Esse({
//             id: 'esse',
//             parent: 'app',
//             template: template.esseTemplate,
//             callbacks
//         });
//     }

//     showContent(name) {
//         document.querySelectorAll('[data-content]').forEach(el => {
//             el.classList.toggle('hide', el.dataset.content !== name);
//         });
//     }
// }