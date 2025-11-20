import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { mockTireDetail } from '@/lib/mockData';
import { BottomNav } from '@/components/BottomNav';
import { ArrowLeft } from 'lucide-react';

const TireDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tire = mockTireDetail;

  const [pressure, setPressure] = useState(tire.pressure || "");
  const [depth, setDepth] = useState(tire.depth || "");
  const [opinion, setOpinion] = useState(tire.opinion || "");
  const [selectedMovement, setSelectedMovement] = useState(tire.nextMovement || "");

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
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
                Digite a medida de pressão do pneu
              </label>
              <Input
                type="number"
                value={pressure}
                onChange={(e) => setPressure(e.target.value)}
                placeholder="Digite a medida"
              />
            </div>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Profundidade do sulco do pneu:</h3>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                Digite a profundidade do sulco do pneu
              </label>
              <Input
                type="number"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                placeholder="Digite a medida"
              />
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Movimentações:</h3>
            <div className="space-y-3">
              {tire.movements.map((movement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-sm">{movement.type}:</span>
                  <span className="text-sm text-muted-foreground">
                    {movement.date}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Parecer:</h3>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Parecer</label>
              <Input
                type="text"
                value={opinion}
                placeholder="Digite o parecer"
                onChange={(e) => setOpinion(e.target.value)}
              />
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Próxima movimentação:</h3>

            <div className="flex gap-2">
              <Button
                variant={selectedMovement === "none" ? "default" : "secondary"}
                className="flex-1"
                onClick={() => setSelectedMovement("none")}
              >
                Sem movimentação
              </Button>

              <Button
                variant={selectedMovement === "rotation" ? "default" : "secondary"}
                className="flex-1"
                onClick={() => setSelectedMovement("rotation")}
              >
                Para rodízio
              </Button>

              <Button
                variant={selectedMovement === "repair" ? "default" : "secondary"}
                className="flex-1"
                onClick={() => setSelectedMovement("repair")}
              >
                Para conserto
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default TireDetail;
