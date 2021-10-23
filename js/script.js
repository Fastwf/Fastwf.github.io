var homeApplication = new Vue({
  el: '#home',
  data: {
    versions: [],
  },
  created: function () {
    var self = this;
    axios.get('versions.json')
      .then(function (res) {
        self.versions = res.data.versions;
      });
  }
});
