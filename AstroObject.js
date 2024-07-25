class AstroObject {
    constructor(mass, radius, initialVelocity, initialPosition, meshHolder)
    {
        this.mass = mass;
        this.radius = radius;
        this.initialVelocity = initialVelocity;
        this.position = initialPosition;
        this.meshHolder = meshHolder
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
                this.velocity = this.velocity.add(acceleration.scale(timeStep));   
            }     
        });
    }

    UpdatePosition (timeStep)
    {
        this.position = this.position.add(this.velocity.scale(timeStep));
        this.meshHolder.position = this.position;
    }

    DetectCollision(allBodies, otherBody) {
        allBodies.forEach(otherBody => {
            if (otherBody !== this) {
                const direction = otherBody.position.subtract(this.position);
                const threshold = this.radius + otherBody.radius;
                const distanceSquared = direction.lengthSquared();
                if(distanceSquared < threshold*threshold) {
                    console.log("collision detected");
                    if(this.meshHolder) {
                        this.meshHolder.dispose();
                    }

                    if(otherBody.meshHolder) {
                        otherBody.meshHolder.dispose();
                    }

                    const thisIndex = allBodies.indexOf(this);
                    const otherIndex = allBodies.indexOf(otherBody);

                    if(thisIndex > -1) {
                        allBodies.splice(thisIndex, 1);
                    }

                    if (otherIndex > -1) {
                        allBodies.splice(otherIndex, 1);
                    }
                }
            }     
        });

    }
}