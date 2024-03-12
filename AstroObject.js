class AstroObject {
    constructor(mass, radius, initialVelocity, initialPosition, meshHolder)
    {
        this.mass = mass;
        this.radius = radius;
        this.initialVelocity = initialVelocity;
        this.position = initialPosition;
        this.meshHolder = meshHolder
        this.mesh = meshHolder;
        this.velocity = initialVelocity;
        
    }
    
    UpdateVelocity (allBodies, timeStep, gravitationalConstant)
    {
        allBodies.forEach(otherBody => {
            if (otherBody !== this) {
            const direction = otherBody.position.subtract(this.position);
            const distanceSquared = direction.lengthSquared();
            const forceDirection = direction.normalize();
            const forceMagnitude = forceDirection.scale(gravitationalConstant * this.mass * otherBody.mass / distanceSquared);
            const acceleration = forceMagnitude.scale(1 / this.mass);
            this.velocity = this.velocity.add(acceleration.scale(timeStep));}
        });
    }

    UpdatePosition (timeStep)
    {
        this.position = this.position.add(this.velocity.scale(timeStep));
    }
}