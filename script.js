new Vue({
  data(){
    return{
      input: '',
      mode: 'insira a sequência',
      range: 'insira a sequência'
    }
  },
  methods:{
    sort_array_number(a, b) {
      return a - b;
    },
    calculate(form) {
      var form = this
      var x = form.input;
      if (x == "") {
        alert("Por favor insira uma sequencia de numeros separados por virgulas");
        return;
      }
      x = x.replace(" ", "");
      var arr = x.split(",");
      var lcm = 0;
      var flag = false;
      var total = 0;
      for (var j = 0; j < arr.length; j++) {
        arr[j] = parseFloat(arr[j]);
        total += arr[j];
      }
      var mean = total / arr.length;
      arr.sort(form.sort_array_number);
      var median = 0;
      median =
        parseFloat(arr[parseInt(arr.length / 2)]) +
        parseFloat(arr[parseInt(arr.length / 2) - 1]);
      median = median / 2;
      if (arr.length % 2 != 0) median = arr[parseInt(arr.length - 1) / 2];
      var maxValue = 0;
      var maxCount = 0;
      var lastValue = "";
      for (var i = 0; i < arr.length; ++i) {
        if (lastValue == arr[i]) continue;
        lastValue = arr[i];
        var count = 0;
        for (var j = 0; j < arr.length; ++j) {
          if (arr[j] == arr[i]) ++count;
        }
        if (count > maxCount) {
          maxCount = count;
          maxValue = arr[i];
        } else if (count == maxCount) {
          maxValue += "," + arr[i];
        }
      }
      var minimum = arr[0];
      var maximum = arr[arr.length - 1];
      form.mode = maxValue;
      form.range = maximum - minimum;
    }
  }
}).$mount('#app')