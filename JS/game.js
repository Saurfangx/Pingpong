    LimitUp=innerHeight/4;
    LimitDown=innerHeight-300;  
    let b = new Ball(innerWidth/2, innerHeight/2,50,4,LimitUp,LimitDown);
    let jugador1 = new player(1,LimitDown/2,900,1000,LimitUp,LimitDown);
    let jugador2 = new player(2,LimitDown/2,900,1000,LimitUp,LimitDown);
class Game{
    constructor(){
       
    }

    display(){
        fill('#FFFFFF');
        rect(470,LimitUp,900,LimitDown-10);
        fill('black');

        this.mostrarPuntaje();
        this.mostrarControles();
        b.display();
		jugador1.display();
		jugador2.display();
        this.puntuacion();
    }

    mostrarPuntaje(){
        textSize(30);
        text(jugador1.getPuntaje(), 660, 150);
        text(jugador2.getPuntaje(), 1150, 150);
    }

    puntuacion(){
        if(b.getX()<jugador1.getX()){
            jugador2.setPuntaje(1);
            this.reiniciar();
        }
        if(b.getX()>jugador2.getX()){
            jugador1.setPuntaje(1);
            this.reiniciar();
        }    
    }

    mostrarControles(){
        textSize(25);
        text('Jugador 1',180,150);
        textSize(20);
        text('Controles:',100,250);
        text('W',250,250);
        text('S',250,300);

        textSize(25);
        text('Jugador 2',1550,150);
        textSize(20);
        text('Controles:',1500,250);
        text('Flecha arriba',1700,250);
        text('Flecha abajo',1700,300);

        textSize(30);
        text('Puntaje', 870, 60);


    }

   
    reiniciar(){
    b.setX(innerWidth/2);
    b.setY(innerHeight/2);
    jugador1.posicion();
    jugador2.posicion();
    }   
}