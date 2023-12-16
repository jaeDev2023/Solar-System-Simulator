class AstroObject {
    constructor(mass, radius, initialVelocity, currentVelocity, initialPosition)
    {
        this.mass = mass;
        this.radius = radius;
        this.initialVelocity = new BABYLON.Vector3(initialVelocity.x, initialVelocity.y,initialVelocity.z);
        this.currentVelocity = new BABYLON.Vector3(currentVelocity.x, currentVelocity.y,currentVelocity.z);
        this.initialPosition = new BABYLON.Vector3(initialPosition.x, initialPosition.y, initialPosition.z);
    }
}