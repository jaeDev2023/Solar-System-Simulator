class AstroObject {
    constructor(mass, radius, initialVelocity, initialPosition)
    {
        this.mass = mass;
        this.radius = radius;
        this.velocity = initialVelocity;
        this.position = initialPosition;
        
    }
    
    UpdateVelocity (astroBodies, timeStep, gravConstant)
    {
        for(let i = 0; i < astroBodies.length; i++)
        {
            let otherBody = astroBodies[i];
            if(otherBody != this)
            {
                // for some reason, the position when called here is undefined. Before the math
                // console.log("Update velocity before math happens, baby");
                // console.log(`Mass:${this.mass} | Radius:${this.radius} | velocity:${this.velocity} | position:${this.position}`);
                let sqrDst = BABYLON.Vector3.DistanceSquared(otherBody.position, this.position);
                let forceDir = otherBody.position.subtract(this.position).normalize();
                let force = forceDir.scale(gravConstant * this.mass * otherBody.mass / sqrDst);
                let acceleration = force.scale(1 / this.mass);
                this.velocity = this.velocity.add(acceleration.scale(timeStep));
                //this.velocity = this.velocity.add(acceleration.scale(timeStep)); // Very unsure if this is a typo or the proper b.j.s implementation of updating velocity.
                // console.log("Update velocity values");
                // console.log(`Mass:${this.mass} | Radius:${this.radius} | velocity:${this.velocity} | position:${this.position}`);
            }            
        }
    }

    UpdatePosition (timeStep)
    {
        this.position = this.position.add(this.velocity.scale(timeStep));
    }
}