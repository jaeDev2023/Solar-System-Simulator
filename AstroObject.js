class AstroObject {
    constructor(mass, diameter, initialVelocity, initialPosition, meshHolder)
    {
        this.mass = mass;
        this.diameter = diameter;
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
                const buffer = 100;

                // Threshold is the distance between the centers of two objects.
                // Because it measures from center-to-center, we divide the diameter by 2
                const threshold = (this.diameter + otherBody.diameter)/2;
                const distanceSquared = direction.lengthSquared();
                if(distanceSquared < threshold*threshold - buffer) {
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