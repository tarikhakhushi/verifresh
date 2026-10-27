import { MapPin, Calendar, Truck, Package, CheckCircle2, Clock, Hash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface JourneyStep {
  location: string;
  date: string;
  status: string;
  description: string;
  verifiedBy: string;
  coordinates?: string;
  temperature?: string;
  blockchainHash?: string;
}

interface ProductJourneyProps {
  journey: JourneyStep[];
}

export function ProductJourney({ journey }: ProductJourneyProps) {
  return (
    <Card className="border-emerald-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-900">
          <Truck className="w-5 h-5" />
          Complete Supply Chain Journey
        </CardTitle>
        <p className="text-sm text-emerald-600">
          Every step tracked and verified on blockchain
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-200" />
          
          {/* Journey steps */}
          <div className="space-y-8">
            {journey.map((step, index) => {
              const isLast = index === journey.length - 1;
              const isFirst = index === 0;
              
              return (
                <div key={index} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className={`absolute left-3 w-6 h-6 rounded-full flex items-center justify-center ${
                    isLast 
                      ? 'bg-green-500' 
                      : 'bg-emerald-500'
                  }`}>
                    {isLast ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className={`bg-white border rounded-lg p-4 shadow-sm ${
                    isLast ? 'border-green-300 bg-green-50/30' : 'border-emerald-100'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-emerald-900">{step.status}</h4>
                        <div className="flex items-center gap-4 mt-1 text-sm text-emerald-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {step.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {step.date}
                          </span>
                        </div>
                      </div>
                      {isFirst && (
                        <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          Origin
                        </div>
                      )}
                      {isLast && (
                        <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                          Current
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-emerald-700 mb-3">{step.description}</p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-emerald-600">
                        Verified by: <strong>{step.verifiedBy}</strong>
                      </span>
                      {step.temperature && (
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {step.temperature}
                        </span>
                      )}
                      {step.coordinates && (
                        <span className="text-emerald-500">
                          GPS: {step.coordinates}
                        </span>
                      )}
                    </div>
                    
                    {/* Blockchain Hash */}
                    {step.blockchainHash && (
                      <div className="mt-3 pt-3 border-t border-emerald-100">
                        <div className="flex items-center gap-2 text-xs">
                          <Hash className="w-3 h-3 text-purple-600" />
                          <span className="text-purple-600">Blockchain:</span>
                          <code className="bg-slate-900 text-green-400 px-2 py-0.5 rounded font-mono">
                            {step.blockchainHash}
                          </code>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}