/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */



//your code here


    (function () {

    //  Any time someone clicks on the title at the top "feed template,"
    // make the color of the "feed template" text change from black to red
    //  *    and then from red to black when clicked again.

    let title = document.querySelector("h1");
    function changecolor() {
        if (title.style.color === "red") {
            title.style.color = "black"
        }
        else {
            title.style.color = "red"
        }
    }


    title.addEventListener("click", changecolor)
    console.log(title)

//      The links on the side of the page – "your name," "section 1," "section 2," etc. –
//      hide every odd-numbered link in the menu.

    let sectionElements = document.querySelectorAll("section");
    //console.log(sectionElements)
    sectionElements[0].remove()
    sectionElements[2].remove()
    sectionElements[4].remove()


    // Change every instance of the word "bacon" on the page to be "LASER VISION"

    let paragraphElements = document.querySelectorAll("p");
    console.log(paragraphElements);
    (function () {
        for (let i = 0; i < paragraphElements.length; i++) {
            paragraphElements[i].innerHTML = paragraphElements[i].innerHTML.replace('Bacon', 'LASER VISION');
        }
    })();

    

    // let word = document.getElementByClass("large-10 columns");
    // word.innerHTML = word.innerHTML.replace('bacon', 'LASER VISION');
    // (function () {
    //     var x = document.querySelectorAll(".post p ");
    //     if (x.length - 1 > 0) {
    //         x.remove(x.length - 1);
    //     }
    // })();




    // Delete the last two posts in the middle section (they have a CSS class "post")


    (function () {
        let postArray = document.querySelectorAll(".post")

        let lastIndex = postArray.length - 1

        postArray[lastIndex].remove()

        console.log(postArray)
        let last_Index = postArray.length - 2
        postArray[last_Index].remove()

    })();


    // Remove the images in the right column
    
    (function () {
        let imagesIFound = document.querySelectorAll(".hide-for-small p img")
        for (let image of imagesIFound) {
            image.remove()
        }
    })();





})();

