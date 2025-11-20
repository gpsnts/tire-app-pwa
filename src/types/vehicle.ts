export interface Vehicle {
  id: string;
  plate: string;
  brand: string;
  model: string;
  lastService: string;
  status: 'Aguardando revisão' | 'Revisado';
}

export interface Tire {
  id: string;
  fireNumber: string;
  treadDepth: number;
  position: 'Dianteiro Esquerdo' | 'Dianteiro Direito' | 'Traseiro Esquerdo' | 'Traseiro Direito';
  status: 'Preenchido' | 'Pendente';
  vehicleId: string;
}

export interface TireMovement {
  type: 'Conserto' | 'Recapagem' | 'Para rodízio';
  date: string;
}

export interface TireDetail extends Tire {
  pressureDepth: number;
  movements: TireMovement[];
  nextMovement?: string;
}
