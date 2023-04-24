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

const canTalk = {
  talk: () => {
    console.log('talking');
  },
};

const Person = function () {};
const DisabledPerson = function () {};

mixin(Person, canWalk, canSwim);
mixin(DisabledPerson, canTalk);

const p = new Person();
const dp = new DisabledPerson();
