import { Shield, Award, Leaf, Heart, CheckCircle2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface Certification {
  name: string;
  type: 'authentic' | 'organic' | 'fairtrade' | 'sustainable' | 'ethical' | 'quality';
  verified: boolean;
  verifiedBy: string;
}

interface VerificationBadgesProps {
  certifications: Certification[];
}

const iconMap = {
  authentic: Shield,
  organic: Leaf,
  fairtrade: Heart,
  sustainable: Leaf,
  ethical: Award,
  quality: Award,
};

const colorMap = {
  authentic: 'bg-blue-100 text-blue-700 border-blue-300',
  organic: 'bg-green-100 text-green-700 border-green-300',
  fairtrade: 'bg-pink-100 text-pink-700 border-pink-300',
  sustainable: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  ethical: 'bg-purple-100 text-purple-700 border-purple-300',
  quality: 'bg-amber-100 text-amber-700 border-amber-300',
};

export function VerificationBadges({ certifications }: VerificationBadgesProps) {
  return (
    <div className="mt-6">
      <p className="text-sm text-emerald-600 mb-3">Certifications & Verifications</p>
      <div className="flex flex-wrap gap-2">
        <TooltipProvider>
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.type] || Shield;
            const colorClass = colorMap[cert.type] || 'bg-gray-100 text-gray-700 border-gray-300';
            
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">
                    <Badge 
                      variant="outline" 
                      className={`${colorClass} px-3 py-2 flex items-center gap-2`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{cert.name}</span>
                      {cert.verified && <CheckCircle2 className="w-3 h-3" />}
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Verified by: {cert.verifiedBy}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.verified ? 'Blockchain verified' : 'Pending verification'}
                  </p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </div>
  );
}
