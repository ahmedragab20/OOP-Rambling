const mixin = (target, ...sources) => {
  Object.assign(target.prototype, ...sources);
};

const canWalk = {
  walk: () => {
    console.log('walking');
  },
};

const canSwim = {
  swim: () => {
    console.log('swimming');
  },
};

const Person = function () {};

mixin(Person, canWalk, canSwim);

const p = new Person();

console.log(p);
