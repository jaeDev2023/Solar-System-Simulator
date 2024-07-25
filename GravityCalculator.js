class GravityCalculator {
    constructor() {

    }
    UpdateObjectPositions(astroBodies, timestep, gravitaionalConstant) {
        astroBodies.forEach(body => {
            body.UpdateVelocity(astroBodies, timestep, gravitaionalConstant);
            body.UpdatePosition(timestep);
            body.DetectCollision(astroBodies);
            // Might be a better position to run the code that detects collisions.

        })
    }
}