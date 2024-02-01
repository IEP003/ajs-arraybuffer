export class Match {
  constructor () {
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(value) {
    this.stonedStatus = value;
  }

  get distance() {
    return this.attackDistance;
  }

  set distance(value) {
    this.attackDistance = value;
  }

  get attack() {
    let attackPower = this.attackPower * (1 - (this.attackDistance - 1) / 10);
    if (this.stoned) {
      attackPower -= Math.log2(this.distance) * 5;
    }
    return attackPower;
  }

  set attack(value) {
    if (value <= 0) {
      throw new Error('Не возможно атаковать противника');
    }
    this.attackPower = value;
  }

}

export class Deamon extends Match {
  constructor() {
    super();
  } 
}

export class Magican extends Match {
  constructor() {
    super();
  } 
}