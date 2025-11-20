import { Vehicle } from '@/types/vehicle';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="p-4 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <X className="h-4 w-4" />
      </Button>
      
      <div className="cursor-pointer" onClick={() => navigate(`/vehicle/${vehicle.id}`)}>
        <h3 className="font-semibold text-lg mb-2">Veículo #{vehicle.id}</h3>
        <div className="space-y-1 text-sm">
          <p>
            <span className="text-muted-foreground">Placa:</span> {vehicle.plate}
          </p>
          <p>
            <span className="text-muted-foreground">Marca:</span> {vehicle.brand}
          </p>
          <p>
            <span className="text-muted-foreground">Modelo:</span> {vehicle.model}
          </p>
          <p>
            <span className="text-muted-foreground">Última Aferição:</span>{' '}
            {vehicle.lastService}
          </p>
          <div className="pt-2">
            <span className="text-muted-foreground">Status:</span>{' '}
            <Badge
              variant={vehicle.status === 'Revisado' ? 'default' : 'secondary'}
              className={
                vehicle.status === 'Revisado'
                  ? 'bg-success text-success-foreground'
                  : ''
              }
            >
              {vehicle.status}
            </Badge>
          </div>
        </div>
        <Button className="w-full mt-4" size="sm">
          Adicionar revisão
        </Button>
      </div>
    </Card>
  );
};
