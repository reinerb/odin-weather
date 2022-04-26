const pubsub = {
  events: {},
  subscribe: function (event, response) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(response);
  },
  unsubscribe: function (event, response) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((r) => r != response);
    }
  },
  publish: function (event, data) {
    if (this.events[event]) {
      this.events[event].forEach((r) => {
        r(data);
      });
    }
  },
};

export default pubsub;
