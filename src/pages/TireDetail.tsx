import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockTireDetail } from '@/lib/mockData';
import { BottomNav } from '@/components/BottomNav';
import { ArrowLeft, X } from 'lucide-react';

const TireDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tire = mockTireDetail;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <div className="bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">
              Veículo #{tire.vehicleId} - Pneu #{id}
            </h1>
          </div>
          <Button size="sm">Enviar</Button>
        </div>

        <div className="p-4 space-y-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Medida de pressão:</h3>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                Profundidade do sulco dos pneus
              </label>
              <Input
                type="number"
                value={tire.pressureDepth}
                placeholder="Digite a medida"
              />
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Movimentações:</h3>
            <div className="space-y-3">
              {tire.movements.map((movement, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <span className="text-sm">{movement.type}:</span>
                    <span className="text-sm text-muted-foreground">
                      {movement.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Parecer:</h3>
            {tire.nextMovement && (
              <Badge
                variant="secondary"
                className="bg-accent text-accent-foreground"
              >
                {tire.nextMovement}
                <Button variant="ghost" size="icon" className="h-5 w-5 ml-2">
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Próxima movimentação:</h3>
            <div className="space-y-2">
              <Badge variant="secondary">Sem movimentação</Badge>
              <Badge variant="secondary" className="ml-2">
                Para rodízio
              </Badge>
            </div>
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default TireDetail;
