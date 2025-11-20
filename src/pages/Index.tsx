import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BottomNav } from '@/components/BottomNav';
import { Truck, TrendingUp, AlertCircle } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold mb-2">Sistema de Pneus</h1>
          <p className="text-muted-foreground">
            Gestão completa de frota e manutenção
          </p>
        </div>

        <div className="space-y-4">
          <Card
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate('/vehicles')}
          >
            <Truck className="h-12 w-12 text-primary mb-3" />
            <h2 className="text-xl font-semibold mb-2">Veículos</h2>
            <p className="text-muted-foreground text-sm">
              Gerencie sua frota e acompanhe revisões
            </p>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate('/dashboard')}
          >
            <TrendingUp className="h-12 w-12 text-primary mb-3" />
            <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
            <p className="text-muted-foreground text-sm">
              Visualize estatísticas e relatórios
            </p>
          </Card>

          <Card className="p-6 bg-warning/10 border-warning">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-warning mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Atenção</h3>
                <p className="text-sm text-muted-foreground">
                  Existem veículos com revisões pendentes há mais de 3 meses
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
