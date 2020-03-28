export interface Vehicle {
  move: (distance: number) => void;
}

export class Car implements Vehicle {
  move = (distance: number) => {
    // Move car…
  };

  turnSteeringWheel = (direction: string) => {
    // Turn wheel…
  };
}

export class VehicleController {
  vehicle: Vehicle;
  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }
}
