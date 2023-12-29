class AstroObject {
    constructor(mass, radius, initialVelocity, initialPosition)
    {
        this.mass = mass;
        this.radius = radius;
        this.Velocity = initialVelocity;
        this.position = initialPosition;
        
    }
    
    UpdateVelocity (astroBodies, timeStep)
    {
        for(let body = 0; body < astroBodies.length; body++)
        {
            if(astroBodies[body]!= this)
            {

                let squareDistance = (this.position.subtract(body.position));
            }
        }
        //console.log("--------");
    }

    updatePostion (timeStep)
    {
        this.position += currentVelocity * timeStep;
    }
}

