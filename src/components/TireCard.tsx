import { Tire } from '@/types/vehicle';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';

interface TireCardProps {
  tire: Tire;
  onDetail: (tireId: string) => void;
}

export const TireCard = ({ tire, onDetail }: TireCardProps) => {
  return (
    <Card className="p-4 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6"
      >
        <X className="h-4 w-4" />
      </Button>
      
      <h3 className="font-semibold text-lg mb-3">Pneu #{tire.id}</h3>
      
      <div className="space-y-2 text-sm mb-4">
        <p>
          <span className="text-muted-foreground">Número de fogo:</span>{' '}
          {tire.fireNumber}
        </p>
        <p>
          <span className="text-muted-foreground">Última pressão medida:</span>{' '}
          {tire.treadDepth} psi
        </p>
        <p>
          <span className="text-muted-foreground">Posição:</span> {tire.position}
        </p>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Checkbox id={`tire-${tire.id}`} />
        <label
          htmlFor={`tire-${tire.id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {tire.status}
        </label>
      </div>

      <Button 
        className="w-full" 
        size="sm"
        onClick={() => onDetail(tire.id)}
      >
        Preencher
      </Button>
    </Card>
  );
};
