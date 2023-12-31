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
        for(let i = 0; i < astroBodies.length; i++)
        {
            let otherBody = astroBodies[i];
            let sqrDst = BABYLON.Vector3.DistanceSquared(otherBody.position, this.position);
            let forceDir = otherBody.position.subtract(this.position).normalize();
            let force = forceDir.scale(gravConstant * this.mass * otherBody.mass / sqrDst);
            let acceleration = force.scale(1 / this.mass);
            this.velocity = this.velocity.add(acceleration);
            //this.velocity = this.velocity.add(acceleration.scale(timeStep));
        }
    }

    updatePosition (timeStep)
    {
        this.position += this.velocity * timeStep;
    }

    printDebugging ()
    {
    }
}