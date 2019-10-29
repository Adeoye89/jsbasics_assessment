/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function() {

    //your code here
    
    console.log(artArray)

    for (let a=1; a <= artArray.length; a++){
        artArray.splice(a, 1)
        
    }
    writeAscii(artArray)
    ;



    

}());


