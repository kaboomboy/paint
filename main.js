canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

mouse_x = 10;

mouse_y = 10;

var mouseEvent = "empty";

function my_mousedown(e){

    console.log(e);

    mouse_x = e.clientX - canvas.offsetLeft;

    mouse_y = e.clientY - canvas.offsetTop+10;

mouseEvent = "mousedown";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

mouseEvent = "mouseleave";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);

var lastmousex;

var lastmousey;

function my_mousemove(e){

    currentmouse_x = e.clientX - canvas.offsetLeft;

    currentmouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){

    ctx.arc(currentmouse_x, currentmouse_y, 30, 0, 2 * Math.PI);

    ctx.stroke();

    }

    lastmousex = currentmouse_x;
    lastmousey = currentmouse_y;

}
