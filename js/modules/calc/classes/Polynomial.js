class Polynomial {
    constructor(members = []) {
        this.members = members;
        // Сортируем члены многочлена по убыванию степени
        this.members.sort((a, b) => b.power - a.power);
    }

    toString() {
        return this.members.map(member => {
                const value = member.value.toString();
                const power = member.power;

                // Форматируем каждый член
                if (power === 0) return `${value}`;
                if (power === 1) return `${value}x`;
                return `${value}x^${power}`;
            })
            .join(' + ') // Объединяем члены через " + "
            .replace(/\+\s-\s/g, '- '); // Убираем лишние плюсы перед отрицательными числами
    }

    getValue(x) {
        const calc = new Calculator();
        // Вычисляем значение многочлена для заданного x
        return this.members.reduce((S, elem) =>calc.add(S,calc.prod(calc.pow(x, elem.power), elem.value)),calc.zero(x));
    }
}
// Экспортируем класс Polynomial
window.Polynomial = Polynomial;