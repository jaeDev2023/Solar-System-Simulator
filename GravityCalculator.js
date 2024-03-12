class GravityCalculator {
    constructor() {

    }
    UpdateObjectPositions(astroBodies, timestep, gravitaionalConstant) {
        astroBodies.forEach(body => {
            body.UpdateVelocity(astroBodies, timestep, gravitaionalConstant);
            body.UpdatePosition(timestep);
        })
    }
}