import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';
import { dashboardStats, mockVehicles } from '@/lib/mockData';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const oldRevisions = mockVehicles.filter((v) => {
    const serviceDate = new Date(v.lastService.split('/').reverse().join('-'));
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return serviceDate < threeMonthsAgo;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Dashboard Geral</h1>

        <div className="space-y-6">
          {/* Chart placeholder */}
          <Card className="p-4">
            <h3 className="text-sm font-semibold mb-4">
              Veículos Revisados x Dia
            </h3>
            <div className="h-40 flex items-end justify-around gap-2">
              {[30, 45, 35, 50, 40, 55, 48].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </Card>

          {/* Pie chart placeholder */}
          <Card className="p-4">
            <h3 className="text-sm font-semibold mb-4 text-center">
              Situação Geral
            </h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="20"
                    strokeDasharray="180 251.2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="20"
                    strokeDasharray="62.8 251.2"
                    strokeDashoffset="-180"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="20"
                    strokeDasharray="8.4 251.2"
                    strokeDashoffset="-242.8"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-around text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded" />
                <span>Revisados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded" />
                <span>Aguardando</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded" />
                <span>Atrasados</span>
              </div>
            </div>
          </Card>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-primary text-primary-foreground">
              <div className="text-3xl font-bold">
                {dashboardStats.vehiclesRevisedToday}
              </div>
              <div className="text-sm mt-1">Veículos Revisados Hoje</div>
            </Card>
            <Card className="p-4 bg-primary text-primary-foreground">
              <div className="text-3xl font-bold">
                {dashboardStats.pendingServices}
              </div>
              <div className="text-sm mt-1">Atendimentos para Hoje</div>
            </Card>
          </div>

          <Card className="p-4 bg-primary text-primary-foreground">
            <div className="text-3xl font-bold">
              {dashboardStats.vehiclesRevisedThisWeek}
            </div>
            <div className="text-sm mt-1">Veículos Revisados esta semana</div>
          </Card>

          {/* Alert section */}
          {oldRevisions.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Veículos Revisados há mais de 3 meses
              </h2>
              <div className="space-y-3">
                {oldRevisions.map((vehicle) => (
                  <Card key={vehicle.id} className="p-4 relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <h3 className="font-semibold mb-2">
                      Veículo #{vehicle.id}
                    </h3>
                    <div className="text-sm space-y-1 mb-3">
                      <p>
                        <span className="text-muted-foreground">Placa:</span>{' '}
                        {vehicle.plate}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Marca:</span>{' '}
                        {vehicle.brand}
                      </p>
                      <p>
                        <span className="text-muted-foreground">
                          Última Aterição:
                        </span>{' '}
                        {vehicle.lastService}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Status:</span>{' '}
                        {vehicle.status}
                      </p>
                    </div>
                    <Button
                      className="w-full"
                      size="sm"
                      onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                    >
                      Agendar nova Revisão
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Dashboard;
