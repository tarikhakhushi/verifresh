import { Users, DollarSign, Shield, Heart, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

interface WorkerRights {
  fairWages: boolean;
  safeConditions: boolean;
  noChildLabor: boolean;
  unionRights: boolean;
  details: string;
}

interface Transparency {
  supplierInfo: string;
  audits: string[];
  certifications: string[];
}

interface EthicalData {
  workerRights: WorkerRights;
  fairTradePremium: string;
  communityImpact: string;
  transparency: Transparency;
  concerns: string[];
}

interface EthicalSourcingProps {
  data: EthicalData;
}

export function EthicalSourcing({ data }: EthicalSourcingProps) {
  const workerRightsChecks = [
    { key: 'fairWages', label: 'Fair Living Wages', checked: data.workerRights.fairWages },
    { key: 'safeConditions', label: 'Safe Working Conditions', checked: data.workerRights.safeConditions },
    { key: 'noChildLabor', label: 'No Child Labor', checked: data.workerRights.noChildLabor },
    { key: 'unionRights', label: 'Union Rights Protected', checked: data.workerRights.unionRights },
  ];

  return (
    <div className="space-y-6">
      {/* Worker Rights */}
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-900">
            <Users className="w-5 h-5" />
            Worker Rights & Protection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {workerRightsChecks.map((check) => (
              <div 
                key={check.key} 
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  check.checked 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-orange-50 border border-orange-200'
                }`}
              >
                {check.checked ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                )}
                <span className={check.checked ? 'text-green-900' : 'text-orange-900'}>
                  {check.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-emerald-600 p-3 bg-emerald-50 rounded-lg">
            {data.workerRights.details}
          </p>
        </CardContent>
      </Card>

      {/* Fair Trade & Community Impact */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-emerald-100">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-pink-50 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h4 className="text-emerald-900 mb-2">Fair Trade Premium</h4>
                <p className="text-2xl text-emerald-900 mb-2">{data.fairTradePremium}</p>
                <p className="text-sm text-emerald-600">
                  Additional premium paid directly to farming communities for development projects
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-100">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-50 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-emerald-900 mb-2">Community Impact</h4>
                <p className="text-sm text-emerald-700">{data.communityImpact}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transparency & Audits */}
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-900">
            <Shield className="w-5 h-5" />
            Transparency & Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-emerald-900 mb-2">Supplier Information</h4>
            <p className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
              {data.transparency.supplierInfo}
            </p>
          </div>

          <div>
            <h4 className="text-emerald-900 mb-2">Independent Audits</h4>
            <div className="space-y-2">
              {data.transparency.audits.map((audit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>{audit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-emerald-900 mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {data.transparency.certifications.map((cert, index) => (
                <div key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Concerns/Issues */}
      {data.concerns.length > 0 ? (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="w-4 h-4 text-orange-600" />
          <AlertDescription className="text-orange-900">
            <strong>Areas for Improvement:</strong>
            <ul className="mt-2 space-y-1">
              {data.concerns.map((concern, index) => (
                <li key={index} className="text-sm">• {concern}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <AlertDescription className="text-green-900">
            <strong>No ethical concerns identified.</strong> This product meets all fair trade and ethical sourcing standards.
          </AlertDescription>
        </Alert>
      )}

      {/* Blockchain Verification Note */}
      <Card className="border-blue-200 bg-blue-50/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-blue-900 mb-2">Blockchain-Verified Ethics</h4>
              <p className="text-sm text-blue-700">
                All ethical sourcing data is verified by independent third-party auditors and permanently recorded on blockchain.
                This creates an immutable record that prevents false claims and ensures accountability throughout the supply chain.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
