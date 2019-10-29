(function () {


  /**
   * Use the built in function setTimeout to add a random image to the page every 2.5 seconds.
   * The function setInterval would be easier but figuring out how to do this with setTimeout is
   * more rewarding. Good luck and remember to google all the things.
   * 
   * Use the addImage function to add the image. There are several images in this directory
   * for you to use
   *
   * To point you in the right direction: check out
   * the getRandomInt function on this page:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * 
   * This link may help as well:
   * 
   * https://stackoverflow.com/questions/729921/settimeout-or-setinterval
   * 
   */


  /**
   * this function adds an image to the page
   * @param {String} name an image filename
   */
  function addImage(name) {
    var imageElement = document.createElement('img');
    imageElement.src = name;
    console.log(imageElement)
    let imageBoxElement = document.getElementById('image-box')
    imageBoxElement.appendChild(imageElement);
  }

  //your code here


  let images = ["assets/images/cats.jpg", "assets/images/hugger.jpg", "assets/images/internet.jpg", "assets/images/jackson.jpg", "assets/images/washington.jpg"]

 

  

  // addImage(images[0])
  

  function myTimeoutFunction() {
    let randomNumber = Math.round(Math.random() * 4)
    addImage(images[randomNumber])
    setTimeout(myTimeoutFunction, 2500);
  }

  myTimeoutFunction();

  
  

})();