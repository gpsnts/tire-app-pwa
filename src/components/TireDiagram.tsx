export const TireDiagram = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="relative w-full max-w-[200px]">
        {/* Pneus superiores */}
        <div className="flex justify-between mb-1">
          <div className="w-12 h-16 border-2 border-foreground rounded-sm flex items-center justify-center text-xs">
            1
          </div>
          <div className="w-12 h-16 border-2 border-foreground rounded-sm flex items-center justify-center text-xs">
            2
          </div>
        </div>
        
        {/* Corpo do veículo - aumentado verticalmente */}
        <div className="mx-auto w-20 h-48 border-2 border-foreground rounded-sm" />
        
        {/* Pneus inferiores - colados ao corpo */}
        <div className="flex justify-between mt-1">
          <div className="w-12 h-16 border-2 border-foreground rounded-sm flex items-center justify-center text-xs">
            3
          </div>
          <div className="w-12 h-16 border-2 border-foreground rounded-sm flex items-center justify-center text-xs">
            4
          </div>
        </div>
      </div>
    </div>
  );
};
