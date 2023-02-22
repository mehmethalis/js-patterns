let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error("Only one connection can exist!");
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

const connection = Object.freeze(new DBConnection("Mongo://....."));

export default connection;
