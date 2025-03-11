class PolynomialUI {
    constructor(calculator) {
        this.calc = calculator;
        this.initUI();
    }

    // Инициализация интерфейса
    initUI() {
        const container = document.getElementById("controls");

        // Добавляем кнопки операций
        this.createButton(container, "Add", () => this.performOperation("add"));
        this.createButton(container, "Sub", () => this.performOperation("sub"));
        this.createButton(container, "Mult", () => this.performOperation("mult"));
        this.createButton(container, "Div", () => this.performOperation("div"));

    }

    // Создание кнопки
    createButton(container, label, onClick) {
        const button = document.createElement("button");
        button.innerText = label;
        button.onclick = onClick;
        container.appendChild(button);
    }

    // Выполнение операций
    performOperation(operation) {
        const poly1Str = document.getElementById("poly1").value;
        const poly2Str = document.getElementById("poly2").value;

        const poly1 = this.calc.getPolynomial(poly1Str);
        const poly2 = this.calc.getPolynomial(poly2Str);

        let result;
        switch (operation) {
            case "add":
                result = this.calc.add(poly1, poly2);
                break;
            case "sub":
                result = this.calc.sub(poly1, poly2);
                break;
            case "mult":
                result = this.calc.mult(poly1, poly2);
                break;
            case "div":
                result = this.calc.div(poly1, poly2); 
                break;
            default:
                result = "Invalid operation";
        }

        document.getElementById("result").innerText = result.toString();
    }
}

// Инициализация интерфейса
window.onload = () => {
    const calc = new PolynomialCalculator();
    new PolynomialUI(calc);
};
