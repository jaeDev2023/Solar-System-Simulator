class AstroObject {
    constructor(mass, radius, initialVelocity, initialPosition, meshHolder)
    {
        this.mass = mass;
        this.radius = radius;
        this.initialVelocity = initialVelocity;
        this.position = initialPosition;
        this.meshHolder = meshHolder
        this.mesh = meshHolder;
        this.velocity = initialVelocity.clone();
        
    }
    
    UpdateVelocity (allBodies, timeStep, gravitationalConstant)
    {
        allBodies.forEach(otherBody => {
            if (otherBody !== this) {
            const direction = otherBody.position.subtract(this.position);
            console.log(`Direction: ${direction}`);

            const distanceSquared = direction.lengthSquared();
            console.log(`distancesquared: ${distanceSquared}`);

            const forceDirection = direction.normalize();
            console.log(`forceDirection: ${forceDirection}`);

            const forceMagnitude = forceDirection.scale(gravitationalConstant * this.mass * otherBody.mass / distanceSquared);
            console.log(`forceMagnitude: ${forceMagnitude}`);

            const acceleration = forceMagnitude.scale(1 / this.mass);
            console.log(`acceleration: ${acceleration}`);

            this.velocity = this.velocity.add(acceleration.scale(timeStep));
            console.log(`velocity: ${this.velocity}`);
            }
        });
    }

    UpdatePosition (timeStep)
    {
        this.position = this.position.add(this.velocity.scale(timeStep));
        console.log(`new position: ${this.position}`);
    }
}