class Member {
    constructor(value = 0, power = 0) {
        this.value = value;
        this.power = power;
    }

    toString() {
        // Убираем нулевые члены
        if (this.value === 0) return '';

        // Форматируем строку в зависимости от степени
        if (this.power === 0) return `${this.value}`;
        if (this.power === 1) return (this.value === 1) ? 'x' : `${this.value}x`;
        
        return `${this.value}x^${this.power}`;
    }
}

// Экспортируем класс Member
window.Member = Member;
