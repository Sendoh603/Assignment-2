if ('serviceWorker' in navigator) {
    // the page loads 
    // that means that the 'load' event fired 
    // and becasue the service worker is some sort of script that runds in the background
    // we want to make the browser aware of it
    // so need to register it
    // we know the page is loaded thanks to the 'load' event
    self.addEventListener('load', (event) => {
      window.navigator.serviceWorker
      .register('sw.js')
      .then((swRegObj) => console.log('the load event was fired by the browser %0' + swRegObj))
      .catch((error) => console.log('whoops, %0' + error));
    })
  }