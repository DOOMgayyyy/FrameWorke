class VectorCalculator extends RealCalculator{
	div(){
		return null;
	}
	add(a,b){
		return new Vector(a.values.map((elem,i)=>super.add(elem,b.values[i])));
	}

    sub(a, b) {
        return new Vector(a.values.map((elem, i) => super.sub(elem, b.values[i])));
    }
    prod(a, b) {
        return a.values.reduce((acc, elem, i) => super.add(acc, super.mult(elem, b.values[i])), super.zero());
    }
    pow(a, exp) {
        return new Vector(a.values.map(elem => super.pow(elem, exp)));
    }


     // Векторное произведение (для 3D-векторов)
    mult(a, b) {
        return new Vector([
            super.sub(super.mult(a.values[1], b.values[2]), super.mult(a.values[2], b.values[1])),
            super.sub(super.mult(a.values[2], b.values[0]), super.mult(a.values[0], b.values[2])),
            super.sub(super.mult(a.values[0], b.values[1]), super.mult(a.values[1], b.values[0])),
        ]);
    }




	zero(length=0){
		const values =[];
		for (let i = 0; i<length;i++){
			values.push(super.zero());
		}
		return new Vector(values);
	}
	one(length = 0){
		if (length === 0) return new Vector ([]);
		const values = [super.one()];
		for (let i = 1;i < length; i++){
			values.push(super.zero());
		}
		return new Vector(values);
	}
}