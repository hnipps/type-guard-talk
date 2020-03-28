import { VehicleController, Car } from './types';

const myCar = new Car();
const vehicleController = new VehicleController(myCar);

vehicle.turnSteeringWheel('left'); // Error: Property 'turnSteeringWheel' does not exist on type 'Vehicle'

export const { vehicle } = vehicleController;