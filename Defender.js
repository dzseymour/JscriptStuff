const cMass = 10;
const cForce = 1;
const cDefenderVelocity = 100;
const cDefenderMinVelocity = 1;
const cDefenderMaxVelocity = 100;
const cDefenderDropDistance = 0;       			 


class Game{

  constructor(Name,lives) {
     this.name = Name;
  }
}


class Player {
	constructor (name){
		this.name = name;
	}
}

class Position {

	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}

class Acceleration{
	
	constructor(Force,Mass){
		this.Force = Force;
		this.Mass = Mass;

	}

	getAcceleration(){
		return this.force * this.mass;
	}

	setMass(Mass){
		this.Mass = mass;
	}

	setForce(force){
		this.force = force;
	}
}

class Movement {

  constructor(	Position,   /*position class */
  	            MinVelocity,
  				MaxVelocity,
  	            Velocity ,
        		Acceleration , /*acceleration class */
       			DropDistance){

  	this.Position = Position;
  	this.Acceleration = Acceleration;
  	this.Velocity = Velocity;
  	this.MinVelocity = MinVelocity;
  	this.MaxVelocity = MaxVelocity
  	this.DropDistance = DropDistance;
  }

}

class Weapon{

	constructor(Name){
	  this.Name = Name;
 	  this.Acceleration;  /*rate of fire*/
	}
}

class ScoreBoard{
	constructor(Player){
		this.Player = Player;
		this.Score = 0;
	}
}

class Collision{
  

   getCollision(a,b){
   	/* put code in here to determine a collision algorithm */
   }
}

class Ship {
  
  constructor(Name){
  	this.Name = Name;
  }	

  setWeapon(Weapon){
  	this.Weapon = Weapon;
  }

  setMovement(Movement){
  	this.Movement = Movement;
  }
}

class SpaceInvader extends Ship {
   constructor(Name){
     super(Name);
   }
  
}

class Defender extends Ship{
   
   constructor(Name){
     super(Name);
   }
	 
} 
