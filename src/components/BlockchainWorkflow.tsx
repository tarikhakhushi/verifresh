{ Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Shield, Database, Lock, CheckCircle2, Hash, Network, Server, Smartphone } from 'lucide-react';
import { Separator } from './ui/separator';

export function BlockchainWorkflow() {
  const workflowSteps = [
    {
      icon: Database,
      title: 'Data Collection',
      description: 'IoT sensors and verified parties collect real-time data at each supply chain checkpoint',
      technical: 'Sensor data, GPS coordinates, temperature logs, certifications',
      color: 'blue'
    },
    {
      icon: Hash,
      title: 'Cryptographic Hashing',
      description: 'Each data point is converted to a unique cryptographic hash using SHA-256',
      technical: 'Hash example: 0x7f3c4a9e2d1b8f6e5a4c3d2e1f0a9b8c7d6e5f4a',
      color: 'purple'
    },
    {
      icon: Lock,
      title: 'Block Creation',
      description: 'Data hashes are bundled into blocks with timestamp and previous block reference',
      technical: 'Merkle tree structure ensures data integrity',
      color: 'orange'
    },
    {
      icon: Network,
      title: 'Distributed Consensus',
      description: 'Multiple validator nodes verify and approve the transaction using Proof of Authority',
      technical: 'Requires 2/3 majority from authorized validators',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Immutable Storage',
      description: 'Verified block is permanently added to the distributed ledger across all nodes',
      technical: 'Cannot be altered or deleted - cryptographically linked to chain',
      color: 'red'
    },
    {
      icon: Smartphone,
      title: 'Consumer Verification',
      description: 'QR scan triggers smart contract to retrieve and verify complete product history',
      technical: 'Real-time blockchain query returns authenticated data',
      color: 'emerald'
    }
  ];

  const technicalDetails = [
    {
      label: 'Blockchain Type',
      value: 'Permissioned Consortium Chain',
      description: 'Private network of verified supply chain participants'
    },
    {
      label: 'Consensus Mechanism',
      value: 'Proof of Authority (PoA)',
      description: 'Trusted validators ensure speed and efficiency'
    },
    {
      label: 'Smart Contracts',
      value: 'Solidity-based (EVM Compatible)',
      description: 'Automated verification and data retrieval'
    },
    {
      label: 'Data Storage',
      value: 'Hybrid On/Off Chain',
      description: 'Critical hashes on-chain, detailed data in IPFS'
    },
    {
      label: 'Average Block Time',
      value: '3-5 seconds',
      description: 'Near real-time transaction confirmation'
    },
    {
      label: 'Network Validators',
      value: '47 Global Nodes',
      description: 'Distributed across certification bodies and auditors'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    red: 'bg-red-50 border-red-200 text-red-700',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  };

  const iconColorMap = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    green: 'text-green-600',
    red: 'text-red-600',
    emerald: 'text-emerald-600',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-900">
            <Network className="w-6 h-6" />
            How VeriFresh Blockchain Works
          </CardTitle>
          <p className="text-sm text-emerald-600">
            Complete technical workflow from data collection to consumer verification
          </p>
        </CardHeader>
      </Card>

      {/* Workflow Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          const bgColor = colorMap[step.color as keyof typeof colorMap];
          const iconColor = iconColorMap[step.color as keyof typeof iconColorMap];
          
          return (
            <Card key={index} className="border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-transparent opacity-50 rounded-bl-full" />
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className={`${bgColor} p-3 rounded-lg border`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-emerald-900">{step.title}</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-emerald-700 mb-3">{step.description}</p>
                <div className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs font-mono">
                  {step.technical}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Technical Specifications */}
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-900">
            <Server className="w-5 h-5" />
            Technical Specifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalDetails.map((detail, index) => (
              <div key={index}>
                <div className="flex items-start justify-between mb-1">
                  <span className="text-sm text-emerald-600">{detail.label}</span>
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-emerald-900 mb-1">{detail.value}</p>
                <p className="text-xs text-emerald-600">{detail.description}</p>
                {index < technicalDetails.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real Example */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Hash className="w-5 h-5" />
            Real Blockchain Transaction Example
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="mb-2">
              <span className="text-slate-400">// Block Header</span>
            </div>
            <div>Block Height: <span className="text-yellow-400">1,247,893</span></div>
            <div>Timestamp: <span className="text-yellow-400">2025-10-30T14:23:17Z</span></div>
            <div>Previous Hash: <span className="text-blue-400">0x9a2b5c8f1e3d7a6f4b9c2e5d8a1f3b7c...</span></div>
            <div>Merkle Root: <span className="text-purple-400">0x3f7b2c9a5e1d8f4b6c3a9e7d2f5b8c1a...</span></div>
            <div className="mt-3 mb-2">
              <span className="text-slate-400">// Transaction Data</span>
            </div>
            <div>Product ID: <span className="text-yellow-400">coffee-001</span></div>
            <div>Event: <span className="text-green-400">QUALITY_TESTED</span></div>
            <div>Location: <span className="text-yellow-400">Addis Ababa Processing Facility</span></div>
            <div>Verified By: <span className="text-blue-400">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</span></div>
            <div>Signature: <span className="text-purple-400">Valid ✓</span></div>
            <div className="mt-3 mb-2">
              <span className="text-slate-400">// Validator Consensus</span>
            </div>
            <div>Validators Approved: <span className="text-green-400">32/47 (68%)</span></div>
            <div>Status: <span className="text-green-400">CONFIRMED & IMMUTABLE</span></div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-blue-200">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-blue-900 mb-1">Why This Prevents Fraud</h4>
              <p className="text-sm text-blue-700">
                Each transaction is cryptographically signed by the authorized party, timestamped, and linked to previous transactions. 
                Any attempt to alter historical data would break the cryptographic chain and be immediately detected by validator nodes. 
                The distributed nature means no single entity can manipulate records.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Features */}
      <Card className="border-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-900">
            <Lock className="w-5 h-5" />
            Security & Integrity Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-green-900 mb-1">Tamper-Proof Records</h4>
                <p className="text-sm text-green-700">
                  Once written to blockchain, data cannot be modified or deleted. Any tampering attempt invalidates the cryptographic signatures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-blue-900 mb-1">Decentralized Verification</h4>
                <p className="text-sm text-blue-700">
                  47 independent validator nodes globally ensure no single point of failure or control. Majority consensus required.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-purple-900 mb-1">Cryptographic Signing</h4>
                <p className="text-sm text-purple-700">
                  Each supply chain participant has unique private keys. All data entries are digitally signed for authenticity proof.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-orange-900 mb-1">Audit Trail</h4>
                <p className="text-sm text-orange-700">
                  Complete chronological history with exact timestamps. Every change, verification, and movement is permanently logged.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-red-900 mb-1">Real-Time Validation</h4>
                <p className="text-sm text-red-700">
                  IoT sensors automatically submit data to blockchain. Temperature breaches or delays trigger instant alerts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-emerald-900 mb-1">Permissioned Access</h4>
                <p className="text-sm text-emerald-700">
                  Only verified supply chain participants can write data. Consumers have read-only access to ensure transparency.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
