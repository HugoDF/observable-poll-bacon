const Bacon = require('baconjs');
const axios = require('axios');

const POLLING_INTERVAL = 100;
const stream = Bacon
  .interval(POLLING_INTERVAL, undefined)
  .flatMap(_ =>
    Bacon.fromPromise(
      axios.get('http://localhost:3000/count')
    )
  )
  .map(response => response.data)
  .takeWhile(({ count }) => count <= 50)
  .subscribe((i) => console.log(i));
