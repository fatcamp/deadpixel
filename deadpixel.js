/*
    NAME:     DEADPIXEL.JS
    FUNCTION: PUTS AN ANNOYING RED PIXEL ON THE SCREEN
    USAGE:    INCLUDE SCRIPT JUST BEFORE THE CLOSING </BODY> TAG 
    VERSION:  1.0
    AUTHOR:   DAN HOFFMAN
    EMAIL:    DHOFFMAN@OUTLOOK.COM
*/

(function(d, undefined) {
    // Pixel x and y.
    var pixel_x, pixel_y;

    // Parse viewport width and height.
    var width = d.documentElement ? d.documentElement.clientWidth : 0;
    var height = d.documentElement ? d.documentElement.clientHeight : 0;

    // If the browser doesn't suck...
    if(width != 0 && height != 0) {
        // Grab a random x and y value from width and height
        pixel_x = Math.floor((Math.random()*width)+1);
        pixel_y = Math.floor((Math.random()*height)+1);

        // Create our dead pixel.
        var pixel = d.createElement("div");
            pixel.style.width = "1px";
            pixel.style.height = "1px";
            pixel.style.background = "red";
            pixel.style.position = "fixed";
            pixel.style.top = pixel_y + "px";
            pixel.style.right = pixel_x + "px";

            // 16-bit signed integer for old phones
            pixel.style.zIndex = "65536"; 

        // Add dead pixel to our page body.
        d.body.appendChild(pixel);
    }

// Pass in document and undefined   
})(this.document);