class Calculator {
    complex(re, im) {
        return new Complex(re, im);
    }

    vector(values) {
        return new Vector(values);
    }

    matrix(values) {
        return new Matrix(values);
    }
    polynomial(members) {
        return new Polynomial(members);
    }

    getEntity(str) {
        str = str.replace(/\s/g, ''); // Исправлена опечатка в регулярном выражении (удаление пробелов)
        if (str.includes('[')) return this.getMatrix(str);
        if (str.includes('(')) return this.getVector(str);
        if (str.includes('x')) return this.getPolynomial(str); // Проверяем на наличие переменной `x`

        return this.getComplex(str);
    }
    getPolynomial(str) {
        const polyCalc = new PolynomialCalculator(); // Используем PolynomialCalculator
        return polyCalc.getPolynomial(str); // Преобразуем строку в Polynomial
    }

    getMatrix(str) {
        const arr = str.slice(1, -1) // Убираем внешние скобки
            .split('|') // Разделяем строки матрицы
            .map(elems => 
                elems.split(';') // Разделяем элементы строки
                    .map(elem => this.getEntity(elem)) // Преобразуем каждый элемент
            );
        return this.matrix(arr);
    }

    getVector(str) {
        const arr = str.slice(1, -1) // Убираем внешние скобки
            .split(',') // Разделяем элементы вектора
            .map(elem => this.getEntity(elem)); // Преобразуем каждый элемент
        return this.vector(arr);
    }

    get(elem) {
        if (elem instanceof Matrix) // Исправлена опечатка "instanseof" на "instanceof"
            return new MatrixCalculator(this.get(elem.values[0][0]));
        if (elem instanceof Vector) 
            return new VectorCalculator(this.get(elem.values[0]));
        return new ComplexCalculator();
    }

    add(a, b) {
        return this.get(a).add(a, b); // Вызываем соответствующий метод для типа объекта
    }
    sub(a, b) {
        return this.get(a).subtract(a, b); // Добавлен метод вычитания
    }

    mult(a, b) {
        return this.get(a).mult(a, b); // Добавлен метод умножения
    }

    zero(elem) {
        if (elem instanceof Matrix) 
            return this.get(elem).zero(elem.values.length);
        if (elem instanceof Vector) 
            return this.get(elem).zero(elem.values.length);
        return this.get().zero();
    }
    
}
