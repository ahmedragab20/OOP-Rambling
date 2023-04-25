class Defaults {
  constructor(options) {
    this.options = options;
  }

  get defaults() {
    return {
      ...this.options,
      version: '1.0.0',
    };
  }
}

class App extends Defaults {
  constructor(options) {
    super(options);
  }

  options = this.defaults;
}

const app = new App({ name: 'My App' });
