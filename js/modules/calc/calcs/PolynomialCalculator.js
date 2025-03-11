class PolynomialCalculator {
    add(a, b) {
        const members = [];

        // Добавляем все члены из `a`, объединяя их с членами `b` с одинаковыми степенями
        a.members.forEach(elemA => {
            const member = b.members.find(elemB => elemB.power === elemA.power);
            if (member) {
                members.push(new Member(elemA.value + member.value, elemA.power));
            } else {
                members.push(new Member(elemA.value, elemA.power));
            }
        });

        // Добавляем оставшиеся члены из `b`, которые отсутствуют в `a`
        b.members.forEach(elemB => {
            if (!members.find(elem => elem.power === elemB.power)) {
                members.push(new Member(elemB.value, elemB.power));
            }
        });

        return new Polynomial(members);
    }

    sub(a, b) {
        // Вычитаем все члены `b` из `a`
        const negativeB = b.members.map(elemB => new Member(-elemB.value, elemB.power));
        const bNegated = new Polynomial(negativeB);
        return this.add(a, bNegated);
    }

    mult(a, b) {
        let polynomial = new Polynomial();

        // Умножаем каждый член `a` на все члены `b` и складываем результаты
        a.members.forEach(elemA => {
            const members = [];
            b.members.forEach(elemB => {
                members.push(new Member(elemA.value * elemB.value, elemA.power + elemB.power));
            });
            polynomial = this.add(polynomial, new Polynomial(members));
        });

        return polynomial;
    }
    div(a, b) {
        if (b.members.length === 0 || b.members.every(member => member.value === 0)) {
            throw new Error("Division by zero polynomial is not allowed.");
        }
    
        let dividend = new Polynomial([...a.members]); // Копируем делимый полином
        const divisor = new Polynomial([...b.members]); // Копируем делитель
        const quotientMembers = []; // Сюда добавим члены частного
    
        while (dividend.members.length > 0 && dividend.members[0].power >= divisor.members[0].power) {
            // Старший член делимого делим на старший член делителя
            const leadDividend = dividend.members[0];
            const leadDivisor = divisor.members[0];
            const newMember = new Member(
                leadDividend.value / leadDivisor.value,
                leadDividend.power - leadDivisor.power
            );
    
            quotientMembers.push(newMember);
    
            // Вычитаем произведение (делитель * newMember) из делимого
            const subtrahend = new Polynomial(
                divisor.members.map(member => 
                    new Member(member.value * newMember.value, member.power + newMember.power)
                )
            );
            dividend = this.sub(dividend, subtrahend);
    
            // Убираем нулевые члены
            dividend.members = dividend.members.filter(member => member.value !== 0);
        }
    
        return {
            quotient: new Polynomial(quotientMembers),
            remainder: dividend
        };
    }
    


    getPolynomial(str) {
        // Разделяем строку на части, учитывая возможные знаки "-"
        const arr = str.split('-');
        if (arr.length > 1) {
            arr.forEach((elem, index) => {
                if (index === 0 && elem === '') {
                    // Обрабатываем случай, когда первый член отрицательный
                    arr[index + 1] = `-${arr[index + 1]}`;
                } else if (index > 0) {
                    // Добавляем знак "-" к остальным членам
                    arr[index] = `-${arr[index]}`;
                }
            });
        }

        // Обрабатываем все члены, включая "+" между ними
        const newArray = arr
            .filter(elem => elem !== '')
            .reduce((S, elem) => {
                const parts = elem.split('+');
                parts.forEach(part => S.push(part));
                return S;
            }, []);

        // Преобразуем каждую часть строки в объект Member
        return new Polynomial(newArray.map(elem => this.getMember(elem)));
    }

    getMember(str) {
        // Проверяем наличие `x` в строке
        if (!str.includes('x')) {str += 'x^0'; // Если `x` отсутствует, добавляем `x^0`
        } 
        else if (!str.includes('^')) {str += '^1'; // Если степень отсутствует, добавляем `^1`
        }

        // Разделяем строку на коэффициент и степень
        const [value, power] = str.split('x^');
        return new Member(parseFloat(value), parseInt(power));
    }
}
// Экспортируем класс PolynomialCalculator
window.PolynomialCalculator = PolynomialCalculator;