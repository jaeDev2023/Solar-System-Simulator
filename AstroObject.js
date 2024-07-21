<<<<<<< HEAD
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
                
                const threshold = this.radius + otherBody.radius;
                const distanceSquared = direction.lengthSquared();
                if(distanceSquared < threshold) {
                    console.log("Collision detected. Delete the colliding objects");
                }                
                const forceDirection = direction.normalize();
                const forceMagnitude = forceDirection.scale(gravitationalConstant * this.mass * otherBody.mass / distanceSquared);
                const acceleration = forceMagnitude.scale(1 / this.mass);
                this.velocity = this.velocity.add(acceleration.scale(timeStep));}
        });
    }

    UpdatePosition (timeStep)
    {
        this.position = this.position.add(this.velocity.scale(timeStep));
        this.meshHolder.position = this.position;
    }
=======
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
                
                const threshold = this.radius + otherBody.radius;
                const distanceSquared = direction.lengthSquared();
                if(distanceSquared < threshold) {
                    console.log("Collision detected. Delete the colliding objects");
                }                
                const forceDirection = direction.normalize();
                const forceMagnitude = forceDirection.scale(gravitationalConstant * this.mass * otherBody.mass / distanceSquared);
                const acceleration = forceMagnitude.scale(1 / this.mass);
                this.velocity = this.velocity.add(acceleration.scale(timeStep));}
        });
    }

    UpdatePosition (timeStep)
    {
        this.position = this.position.add(this.velocity.scale(timeStep));
        this.meshHolder.position = this.position;
    }
>>>>>>> 01c5ce9379f26d77738421141d1ddf5dbb5bb654
}