class Ball {
	constructor(x, y, d,v,LimitUp,LimitDown){
		this.x=x;
		this.y=y;
		this.d=d;
		this.speedY=v;
		this.speedX=v;
		this.LimitUp=LimitUp;
		this.LimitDown=LimitDown+225;
	}

	display(){
		fill('black');
		circle(this.x, this.y, this.d);
		this.moveY();
		this.moveX();
		this.hasCollision();

	}

	hasCollision(){
		this.collisionX();
		if(this.y>=this.LimitDown-(this.d/2) || this.y<=this.LimitUp+(this.d/2)){
			this.speedY*=-1;
		}
		
	}

	collisionX(){
		//rebote jugador 2
		if(this.x>=jugador2.getX()-(this.d/2)&&this.y>=jugador2.getY() && this.y<=(jugador2.getY()+jugador2.getAltura())){
			this.rebotePlayer(jugador2.getPlayer(),jugador2.getY(),jugador2.getAltura());
			
		
		}


		//rebote jugador 1
		if(this.x<=(jugador1.getX()+jugador1.getAncho())+(this.d/2)&&this.y>=jugador1.getY() && this.y<=(jugador1.getY()+jugador1.getAltura())){
			this.rebotePlayer(jugador2.getPlayer(),jugador1.getY(),jugador1.getAltura());

		}
	}
	
	rebotePlayer(jugador,jugadorY,jugadorAltura){
		if(this.y>=jugadorY&&this.y<=jugadorY+(jugadorAltura/3)){
			this.speedY*=-1;
			this.speedX*=-1;
		}else if(this.y>=jugadorY+(jugadorAltura/3)&&this.y<=jugadorY+((jugadorAltura/3)*2)){
			this.speedX*=-1;
		}else if(this.y>=jugadorY+((jugadorAltura/3)*2)&&this.y<=jugadorY+jugadorAltura){
			this.speedY*=-1;
			this.speedX*=-1;
		}
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

	moveY(){
		this.y+=this.speedY;
	}
	
	moveX(){
		this.x+=this.speedX;
	}


}				