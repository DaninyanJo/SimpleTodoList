class Data {
  constructor() {
    if (this.getData() === null) {
      this.clearData();
    }
  }
  getData() {
    const data = localStorage.getItem("data");
    return JSON.parse(data);
  }
  setData(newData) {
    localStorage.setItem("data", JSON.stringify(newData));
  }
  clearData() {
    const arr = [];
    localStorage.setItem("data", JSON.stringify(arr));
  }
}

export default Data