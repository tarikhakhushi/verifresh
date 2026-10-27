import { Leaf, Droplets, Zap, Trash2, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

interface Metric {
  label: string;
  value: string;
  comparison: string;
  better: boolean;
  details: string;
}

interface EnvironmentalImpact {
  carbonFootprint: Metric;
  waterUsage: Metric;
  energyConsumption: Metric;
  wasteReduction: Metric;
  sustainabilityScore: number;
  certifications: string[];
}

interface ImpactMetricsProps {
  metrics: EnvironmentalImpact;
}

export function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  const impactData = [
    {
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      metric: metrics.carbonFootprint,
    },
    {
      icon: Droplets,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      metric: metrics.waterUsage,
    },
    {
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      metric: metrics.energyConsumption,
    },
    {
      icon: Trash2,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      metric: metrics.wasteReduction,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Sustainability Score */}
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-emerald-900">
            <span className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-600" />
              Overall Sustainability Score
            </span>
            <span className="text-3xl text-green-600">{metrics.sustainabilityScore}/100</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={metrics.sustainabilityScore} className="h-3 mb-4" />
          <div className="flex flex-wrap gap-2">
            {metrics.certifications.map((cert, index) => (
              <div key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-200">
                {cert}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Individual Metrics */}
      <div className="grid md:grid-cols-2 gap-6">
        {impactData.map((item, index) => {
          const Icon = item.icon;
          const TrendIcon = item.metric.better ? TrendingDown : TrendingUp;
          
          return (
            <Card key={index} className="border-emerald-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`${item.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-emerald-900 mb-1">{item.metric.label}</h4>
                    <p className="text-2xl text-emerald-900 mb-2">{item.metric.value}</p>
                    <div className={`flex items-center gap-1 text-sm mb-2 ${
                      item.metric.better ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      <TrendIcon className="w-4 h-4" />
                      <span>{item.metric.comparison}</span>
                    </div>
                    <p className="text-sm text-emerald-600">{item.metric.details}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Info */}
      <Card className="border-blue-200 bg-blue-50/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Leaf className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-blue-900 mb-2">Why This Matters</h4>
              <p className="text-sm text-blue-700">
                All environmental data is independently verified and recorded on blockchain. 
                This prevents greenwashing and ensures companies are held accountable for their sustainability claims.
                Every measurement is traceable to its source.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
