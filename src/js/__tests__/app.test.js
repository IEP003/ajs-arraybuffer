import { Deamon, Magican } from "../app";

test('Урон', () => {
  const deamon = new Deamon;
  deamon.distance = 2;
  deamon.attack = 100;
  expect(deamon.attack).toEqual(90)
  const magican = new Magican;
  magican.distance = 3;
  magican.attack = 110;
  expect(magican.attack).toEqual(88)
})

test('Урон c ослаблением', () => {
  const deamon = new Deamon;
  deamon.distance = 2;
  deamon.attack = 100;
  deamon.stoned = true
  expect(deamon.attack).toEqual(85)
  const magican = new Magican;
  magican.distance = 5;
  magican.attack = 100;
  magican.stoned = true;
  expect(magican.attack).toEqual(48.39035952556319)
})