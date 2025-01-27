class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId =null;
    // ... your code goes here
  }

  start(printTimeCallback) {

    // this.intervalId=setInterval(printTimeCallback,1000);
    // return this.intervalId++

    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 1000);

  }


  getMinutes() {
    return Math.floor(this.currentTime / 60)
}

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {

      if(value<10){
        return `0${value}` 
      }
      
      else {
        return String(value);
      }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
        this.currentTime =0;
  }

  split() {

    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
    
  }
}
