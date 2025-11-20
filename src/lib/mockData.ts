import { Vehicle, Tire, TireDetail } from '@/types/vehicle';

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    plate: 'XQY8U87',
    brand: 'Volvo',
    model: 'FH',
    lastService: '10/09/2025',
    status: 'Aguardando revisão',
  },
  {
    id: '2',
    plate: 'ABC1234',
    brand: 'Volvo',
    model: 'FH16',
    lastService: '15/09/2025',
    status: 'Revisado',
  }
];

export const mockTires: Tire[] = [
  {
    id: '1',
    fireNumber: '20240156',
    treadDepth: 58,
    position: 'Dianteiro Esquerdo',
    status: 'Preenchido',
    vehicleId: '1',
  },
  {
    id: '2',
    fireNumber: '20240216',
    treadDepth: 97,
    position: 'Dianteiro Direito',
    status: 'Preenchido',
    vehicleId: '1',
  },
];

export const mockTireDetail: TireDetail = {
  id: '1',
  fireNumber: '20240156',
  treadDepth: 58,
  position: 'Dianteiro Esquerdo',
  status: 'Preenchido',
  vehicleId: '1',
  pressureDepth: 0,
  movements: [
    { type: 'Conserto', date: '08/08/2024' },
    { type: 'Recapagem', date: '02/03/2025' },
  ],
  nextMovement: 'Para rodízio',
};

export const dashboardStats = {
  vehiclesRevisedToday: 85,
  pendingServices: 5,
  vehiclesRevisedThisWeek: 120,
  oldRevisions: mockVehicles.filter(v => {
    const serviceDate = new Date(v.lastService.split('/').reverse().join('-'));
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return serviceDate < threeMonthsAgo;
  }),
};
