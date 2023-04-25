class generalInformation {
  static api = 'https://api.github.com/users/';
  static method = 'GET';
  static headers = {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  };
  static body = null;
  static user = 'ahmedragab20';
  static url = `${this.api}${this.user}`;
}

class Fetch {
  static async get() {
    const response = await fetch(generalInformation.url, {
      method: generalInformation.method,
      headers: generalInformation.headers,
      body: generalInformation.body,
    });

    const data = await response.json();
    return data;
  }
  static getRepos() {
    console.log(this.get().then((data) => console.log(data)));
  }
}
