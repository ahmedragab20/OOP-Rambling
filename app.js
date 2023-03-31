const swCounterP = document.getElementById('sw-counter');
const startCountingBtn = document.getElementById('start-counting');
const stopCountingBtn = document.getElementById('stop-counting');
const resetCounterBtn = document.getElementById('reset-counter');
const errorMessageStrong = document.getElementById('error-message');

class StopWatch {
  constructor() {
    let interval;
    let ongoing = false;
    let timer = 0; // ms

    const errorsHandler = (err) => {
      if (!err && err !== '') throw new Error('please send an error message!');
      else if (err === '') {
        // manipulate the <strong> element
        errorMessageStrong.classList.add('d-none');
      } else if (!!err) {
        errorMessageStrong.classList.remove('d-none');
      }

      errorMessageStrong.textContent = err;
    };
    const setOngoing = (value) => {
      ongoing = value;
    };
    const setSWCounterContent = (content) => {
      swCounterP.textContent = content;
    };

    this.start = () => {
      if (ongoing) {
        errorsHandler('The StopWatch already counting!🚀');
        return;
      }

      setOngoing(true);
      interval = setInterval(() => {
        timer++;
        setSWCounterContent(`the timer is: ${timer}ms`);
      });

      // clear the error message
      errorsHandler('');
    };
    this.stop = () => {
      if (!ongoing) {
        errorsHandler('The StopWatch already stopped!🛑');

        return;
      }

      setOngoing(false);
      clearInterval(interval);

      // clear the error message
      errorsHandler('');
    };
    this.reset = () => {
      // Reset everything
      timer = 0;
      setOngoing(false);
      clearInterval?.(interval); // if it's not undefined
      setSWCounterContent('');
      errorsHandler('');
    };
  }
}

const sw = new StopWatch();

addEventListener('load', () => {
  // things to be set on page load
  startCountingBtn.onclick = sw.start;
  stopCountingBtn.onclick = sw.stop;
  resetCounterBtn.onclick = sw.reset;
});
