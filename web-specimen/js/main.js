window.onload = function() {
    var width = window.screen.width;
    var height = window.screen.height;
    document.body.addEventListener("mousemove", (event) => {
        if (event.x >= width/2){
            if (event.y >= height/2){
                $("#id1").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT'"+(-((30)/(height/2)*(event.y-height/2)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT' 0");
            } 

            if (event.y < height/2) {
                $("#id1").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT'"+(30 - (30/(height/2)*(event.y)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+30/(width/2)*(event.x-width/2)+",'VROT' 0");
            }
        }
        else if (event.x < width/2){
            if (event.y >= height/2){
                $("#id1").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT'"+(-((30)/(height/2)*(event.y-height/2)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT' 0");
            } 

            if (event.y < height/2) {
                $("#id1").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT'"+(30 - (30/(height/2)*(event.y)))+"");
                $("#id2").css( "font-variation-settings", "'HROT'"+(- (30/(width/2)*(width/2 - event.x)))+",'VROT' 0");
            }
        } 
    });
}


var colors = ['#ff1f1f', '#001eff', '#0bff01', '#f47835', '#a200ff', '#0013de', '#0013de', '#ff8000'];

function randomize(values) {
    let index = values.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (index != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;
  
      // And swap it with the current element.
      [values[index], values[randomIndex]] = [
        values[randomIndex], values[index]];
    }
  
    return values;
  }



function colorize() {
    for(i = 0; i < 7; i++) {
        $("#id"+i+"").css( "color", ""+colors[i]+"");
        $("#id"+i+"").css( "border-color", ""+colors[i]+"");
    }
  }