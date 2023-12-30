class AstroObject {
    constructor(mass, radius, initialVelocity, initialPosition)
    {
        this.mass = mass;
        this.radius = radius;
        this.Velocity = initialVelocity;
        this.position = initialPosition;
        
    }
    
    UpdateVelocity (astroBodies, timeStep, gravConstant)
    {
        // Need to create a global definition for the universal constant.
        for(let body = 0; body < astroBodies.length; body++)
        {
            if(astroBodies[body] != this)
            {
                const squareDistance = (this.position.subtract(astroBodies[body].position));
                const forceDirection = (astroBodies[body].position.subtract(this.position)).normalize(); // you may to use new syntax for these.
                const force = forceDirection * gravConstant * this.mass * astroBodies[body].mass / squareDistance;
                const acceleration = force / this.mass;
                this.Velocity += acceleration * timeStep;
                
            }
        }
        //console.log("--------");
    }

    updatePostion (timeStep)
    {
        this.position += currentVelocity * timeStep;
    }

    printDebugging ()
    {
    }
}


