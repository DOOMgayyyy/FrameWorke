export default class Component{
    constructor ({id, parent, template, templateParams, callbacks = {}, className}){
        this.id = id;
        this.parent = parent;
        this.callbacks = callbacks;
        this.render(template(templateParams), className);
        this.addEventListeners();
    }

    show(){
        document.getElementById(this.id).classList.remove('hide');
    }

    hide(){
        document.getElementById(this.id).classList.add('hide');
    }

    render(template, className) {
        const elem = document.createElement('div');
        elem.setAttribute('id', this.id);
        if (className) {
            elem.classList.add(className); // Добавляем класс, а не дублируем id
        }
        elem.innerHTML = template;
        const parentElem = this.parent ? document.getElementById(this.parent) : document.body;
        parentElem.appendChild(elem);
    }
    addEventListeners(){}
}