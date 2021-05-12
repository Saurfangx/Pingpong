class player{
    constructor(player,yInicial,x1,x2,LimitUp,LimitDown){
        
        this.player=player;
        this.mov=5;
        this.altura=100;
        this.ancho=10;
        this.yInicial=yInicial;
        this.x1=x1;
        this.x2=x2;
        this.posicion();
        this.puntaje=0;
        this.LimitUp=LimitUp;
        this.LimitDown=LimitDown+225;
    }
    

    moveY(){
        if(this.player==1){
            if (keyIsDown(87)) {
                this.y+=-this.mov;
            } 
            if (keyIsDown(83)) {
                this.y+=this.mov;
            }
	    }else{
            if(this.player==2){
                if (keyIsDown(UP_ARROW)) {
                    this.y+=-5;
                } 
                if (keyIsDown(DOWN_ARROW)) {
                    this.y+=5;
                }
                
            } 
        }
    }

    posicion(){
        if(this.player==1){
            this.x=475;
            this.y=490;
            
        }else{
            if(this.player==2){
                this.x=1355;
                this.y=490;

            }
        }
    }

    collision(){
        if(this.y>=this.LimitDown-this.altura){
			this.y=this.LimitDown-this.altura;
		}
        if(this.y<=this.LimitUp){
            this.y=this.LimitUp;
        }
    }

    display(){
        fill('cyan');
        rect(this.x, this.y, 10,100);
        this.moveY();
        this.collision();
        
    }
    

    getX(){
		return this.x;
	}

	setX(x){
		this.x=x;
	}
	
	getY(){
		return this.y;
	}

	setY(y){
		this.y=y;
	}

    getAltura(){
        return this.altura;
    }
    getAncho(){
        return this.ancho;
    }

    getPuntaje(){
        return this.puntaje;
    }

    setPuntaje(punto){
        this.puntaje+=punto;
    }
    getPlayer(){
        return this.player;
    }
}