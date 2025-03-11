class Matrix {
  constructor(values = [[]]) {
    this.values = [];
    values.forEach((rowA, i) => {
      this.values.push([]);
      rowA.forEach(el => this.values[i].push(el))
    });
  }

  toString() {
    return this.values.map(
      rowA => rowA.map(el => el.toString()).join(',')
    ).join('\n');
  }
}
