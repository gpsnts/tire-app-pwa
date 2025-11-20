import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TireDiagram } from '@/components/TireDiagram';
import { TireCard } from '@/components/TireCard';
import { mockVehicles, mockTires } from '@/lib/mockData';
import { BottomNav } from '@/components/BottomNav';
import { ArrowLeft } from 'lucide-react';

const VehicleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = mockVehicles.find((v) => v.id === id);
  const tires = mockTires.filter((t) => t.vehicleId === id);

  if (!vehicle) {
    return <div>Veículo não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <div className="bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/vehicles')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">Veículo #{id}</h1>
          </div>
          <Button size="sm">{vehicle.status}</Button>
        </div>

        <div className="p-4">
          <Card className="p-4 mb-4">
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Placa:</span> {vehicle.plate}
              </p>
              <p>
                <span className="font-semibold">Última aferição:</span>{' '}
                {vehicle.lastService}
              </p>
              <p className="pt-2">
                <span className="font-semibold">Descrição:</span>
              </p>
              <p className="text-muted-foreground">
                Caminhão com eixo dianteiro e traseiro
              </p>
            </div>
          </Card>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="info">Informações</TabsTrigger>
              <TabsTrigger value="tires">Ficha</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="mt-4">
              <TireDiagram />
            </TabsContent>
            
            <TabsContent value="tires" className="mt-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Veículo #{id}</h2>
                  <Button size="sm">Enviar dados</Button>
                </div>
                
                {tires.map((tire) => (
                  <TireCard
                    key={tire.id}
                    tire={tire}
                    onDetail={(tireId) => navigate(`/tire/${tireId}`)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default VehicleDetail;
