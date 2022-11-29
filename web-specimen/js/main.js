window.onload = function() {
    var width = window.screen.width;
    var height = window.screen.height;
    document.body.addEventListener("mousemove", (event) => {
        if (event.x >= width/2){
            if (event.y >= height/2){
                $("#id1").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT'"+(-((30)/(height/2)*(event.y-height/2)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT'"+(-((30)/(height/2)*(event.y-height/2)))+"");
            } 

            if (event.y < height/2) {
                $("#id1").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT'"+(30 - (30/(height/2)*(event.y)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT'"+(30 - (30/(height/2)*(event.y)))+"");
            }
        }
        else if (event.x < width/2){
            if (event.y >= height/2){
                $("#id1").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT'"+(-((30)/(height/2)*(event.y-height/2)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT'"+(-((30)/(height/2)*(event.y-height/2)))+"");
            } 

            if (event.y < height/2) {
                $("#id1").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT'"+(30 - (30/(height/2)*(event.y)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT'"+(30 - (30/(height/2)*(event.y)))+"");
            }
        } 
    });
}