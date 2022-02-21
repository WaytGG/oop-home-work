class Freightwagon {
  constructor() {
    this.volm3 = volm3;
    this.wagon = 'close';
    this.cargo = cargo;
  }

  unload() {
    return null;
  }

  load() {
    
  }
}


class Locomotive {
  constructor(maxplaces, people, typeengine, powerengine, startedengine) {
    this.maxplaces = maxplaces;
    this.people = [people];
    this.typeengine = typeengine;
    this.powerengine = powerengine;
    this.startedengine = startedengine;
  }

  startengine() {
    if(this.people === undefined) {
      throw new Error('Кабина пустая!')
    } else return console.log('Engine started');
  }

  placepeople() {

  }
}

const test = new Locomotive(5, undefined, 'disel', 400,);

console.log(test);

test.startengine();