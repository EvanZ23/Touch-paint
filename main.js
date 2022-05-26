my_paint = document.getElementById("myCanvas");

ctx = my_paint.getContext('2d');

color = "Black";
width_line = 6;

var last_pos_x, last_pos_y;
var last_pos_mouse_x, last_pos_mouse_y;
var mouseEvent = "";

my_paint.addEventListener("touchstart", my_touch_start);

function my_touch_start(e){
   
    console.log(e);

    last_pos_x = e.touches[0].clientX - my_paint.offsetLeft;
    last_pos_y = e.touches[0].clientY - my_paint.offsetTop;

    color = document.getElementById("new_color").value;

   width_line = document.getElementById("new_width").value;
    
}

my_paint.addEventListener("touchmove", my_touch_move);

function my_touch_move(e){

    current_pos_x = e.touches[0].clientX - my_paint.offsetLeft;
    current_pos_y = e.touches[0].clientY - my_paint.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.moveTo(last_pos_x, last_pos_y);
        ctx.lineTo(current_pos_x, current_pos_y);
        ctx.stroke();

        last_pos_x = current_pos_x;
        last_pos_y = current_pos_y;
 
}


my_paint.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){
   
 mouseEvent = "Mouse_Down";

    last_pos_mouse_x = e.clientX - my_paint.offsetLeft;
    last_pos_mouse_y = e.clientY - my_paint.offsetTop;

    color = document.getElementById("new_color").value;

   width_line = document.getElementById("new_width").value;
    
}

my_paint.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e){

    if(mouseEvent == "Mouse_Down"){

    current_pos_mouse_x = e.clientX - my_paint.offsetLeft;
    current_pos_mouse_y = e.clientY - my_paint.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.moveTo(last_pos_mouse_x, last_pos_mouse_y);
        ctx.lineTo(current_pos_mouse_x, current_pos_mouse_y);
        ctx.stroke();

        last_pos_mouse_x = current_pos_mouse_x;
        last_pos_mouse_y = current_pos_mouse_y;
    }
}

my_paint.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e){
   
 mouseEvent = "Mouse_Up";

}

my_paint.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){
   
 mouseEvent = "Mouse_Leave";

}

function clearPaint(){

    ctx.clearRect(0,0, my_paint.width, my_paint.height);
}







