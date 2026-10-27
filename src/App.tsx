import { useState } from 'react';
import { Shield, Leaf, Heart, Home, ShoppingCart, Sprout, Blocks, Radio, BookOpen, Package, Factory, Truck, LogOut } from 'lucide-react';
import { LoginPortal } from './components/LoginPortal';
import { ConsumerPortal } from './components/ConsumerPortal';
import { FarmerPortal } from './components/FarmerPortal';
import { CollectorPortal } from './components/CollectorPortal';
import { ProcessorPortal } from './components/ProcessorPortal';
import { DistributorPortal } from './components/DistributorPortal';
import { BlockExplorer } from './components/BlockExplorer';
import { LiveTracking } from './components/LiveTracking';
import { OnboardingGuide } from './components/OnboardingGuide';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

type Portal = 'home' | 'consumer' | 'farmer' | 'collector' | 'processor' | 'distributor' | 'blocks' | 'tracking' | 'guide';

export default function App() {
  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [currentPortal, setCurrentPortal] = useState<Portal>('home');

  const handleLogin = (role: string) => {
    setCurrentRole(role);
    // Map role to portal
    const rolePortalMap: Record<string, Portal> = {
      'consumer': 'consumer',
      'farmer': 'farmer',
      'collector': 'collector',
      'processor': 'processor',
      'distributor': 'distributor',
      'retailer': 'consumer', // Retailers use consumer portal for verification
    };
    setCurrentPortal(rolePortalMap[role] || 'home');
  };

  const handleLogout = () => {
    setCurrentRole(null);
    setCurrentPortal('home');
  };

  // Show login portal if not logged in
  if (!currentRole) {
    return <LoginPortal onLogin={handleLogin} />;
  }

  const portals = [
    {
      id: 'consumer' as Portal,
      name: 'Consumer',
      description: 'Scan and verify products',
      icon: ShoppingCart,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600',
      roles: ['consumer', 'retailer'],
    },
    {
      id: 'farmer' as Portal,
      name: 'Farmer/Producer',
      description: 'Register harvested products',
      icon: Sprout,
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-600',
      roles: ['farmer'],
    },
    {
      id: 'collector' as Portal,
      name: 'Collector',
      description: 'Collect from farms',
      icon: Package,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-600',
      roles: ['collector'],
    },
    {
      id: 'processor' as Portal,
      name: 'Processor',
      description: 'Process & manufacture',
      icon: Factory,
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-600',
      roles: ['processor'],
    },
    {
      id: 'distributor' as Portal,
      name: 'Distributor',
      description: 'Ship to retailers',
      icon: Truck,
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
      roles: ['distributor'],
    },
    {
      id: 'blocks' as Portal,
      name: 'Block Explorer',
      description: 'View blockchain records',
      icon: Blocks,
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-600',
      roles: ['all'],
    },
    {
      id: 'tracking' as Portal,
      name: 'Live Tracking',
      description: 'Real-time factory status',
      icon: Radio,
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-600',
      roles: ['all'],
    },
    {
      id: 'guide' as Portal,
      name: 'How to Use',
      description: 'Tutorial and onboarding',
      icon: BookOpen,
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600',
      roles: ['all'],
    },
  ];

  // Filter portals based on current role
  const availablePortals = portals.filter(
    portal => portal.roles.includes('all') || portal.roles.includes(currentRole)
  );

  const renderPortal = () => {
    switch (currentPortal) {
      case 'consumer':
        return <ConsumerPortal />;
      case 'farmer':
        return <FarmerPortal />;
      case 'collector':
        return <CollectorPortal />;
      case 'processor':
        return <ProcessorPortal />;
      case 'distributor':
        return <DistributorPortal />;
      case 'blocks':
        return <BlockExplorer />;
      case 'tracking':
        return <LiveTracking />;
      case 'guide':
        return <OnboardingGuide />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl mb-8 shadow-2xl">
          <Shield className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-emerald-900 mb-4">VeriFresh</h1>
        <p className="text-emerald-700 text-xl max-w-3xl mx-auto mb-6">
          Blockchain-Powered Food Supply Chain Tracking
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Building trust in the food supply chain through immutable blockchain records, complete transparency, 
          and verified authenticity from farm to table.
        </p>
        <div className="mt-6 inline-block bg-emerald-100 px-6 py-3 rounded-full border-2 border-emerald-300">
          <p className="text-emerald-900">
            Logged in as: <strong className="capitalize">{currentRole}</strong>
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-emerald-900 mb-2">Verified Authenticity</h3>
            <p className="text-sm text-gray-600">
              Every product backed by immutable blockchain records, eliminating counterfeits
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-green-900 mb-2">Sustainable Sourcing</h3>
            <p className="text-sm text-gray-600">
              Track environmental impact and verify sustainability claims with real data
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-rose-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-rose-900 mb-2">Ethical Standards</h3>
            <p className="text-sm text-gray-600">
              Ensure fair wages, safe conditions, and ethical practices throughout the supply chain
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Portal Selection */}
      <div className="mb-16">
        <h2 className="text-center text-gray-900 mb-8">Available Portals for {currentRole}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {availablePortals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Card
                key={portal.id}
                className="cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-400 group"
                onClick={() => setCurrentPortal(portal.id)}
              >
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-br ${portal.gradient} p-4 rounded-2xl w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{portal.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{portal.description}</p>
                  <Button 
                    className={`w-full bg-gradient-to-r ${portal.gradient} hover:opacity-90`}
                  >
                    Enter Portal
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Supply Chain Flow */}
      <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 mb-16">
        <CardContent className="p-8">
          <h2 className="text-center text-gray-900 mb-8">Complete Supply Chain Tracking</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { icon: Sprout, label: 'Farmer', color: 'from-green-500 to-emerald-600' },
              { icon: Package, label: 'Collector', color: 'from-amber-500 to-orange-600' },
              { icon: Factory, label: 'Processor', color: 'from-purple-500 to-indigo-600' },
              { icon: Truck, label: 'Distributor', color: 'from-orange-500 to-red-600' },
              { icon: ShoppingCart, label: 'Consumer', color: 'from-blue-500 to-cyan-600' },
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-center">
                  <div className={`bg-gradient-to-br ${step.color} p-4 rounded-2xl w-16 h-16 mx-auto mb-2 flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-700">{step.label}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-emerald-300 to-teal-300 rounded"></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            Each step is recorded on the blockchain, creating an unbreakable chain of trust
          </p>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-blue-50">
        <CardContent className="p-8">
          <h2 className="text-center text-gray-900 mb-8">Featured: Multi-Ingredient Tracking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1645871306587-bebaa2f1dfc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW0lMjBqYXIlMjBraXRjaGVufGVufDF8fHx8MTc2MTk4MzkzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kissan Jam"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-emerald-900 mb-4">Kissan Mixed Fruit Jam</h3>
              <p className="text-gray-700 mb-4">
                Experience complex product tracking with multiple ingredients, each with complete supply chain history:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-gray-700">Strawberries from Mahabaleshwar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-gray-700">Apples from Shimla</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-gray-700">Grapes from Nashik</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-gray-700">Mangoes from Ratnagiri</span>
                </li>
              </ul>
              <Button 
                onClick={() => setCurrentPortal('consumer')}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                Try It Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b-2 border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentPortal('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-emerald-900">VeriFresh</h1>
                <p className="text-sm text-emerald-600">Food Supply Chain Tracking</p>
              </div>
            </button>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              {currentPortal !== 'home' && (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentPortal('home')}
                  className="text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              )}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Verified</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <Leaf className="w-4 h-4" />
                  <span className="text-sm">Sustainable</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Ethical</span>
                </div>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderPortal()}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t-2 border-emerald-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-emerald-900 mb-3">About VeriFresh</h3>
              <p className="text-sm text-gray-600">
                Building trust through blockchain technology. Every food product, fully transparent from farm to table.
              </p>
            </div>
            <div>
              <h3 className="text-emerald-900 mb-3">Technology</h3>
              <p className="text-sm text-gray-600">
                Permissioned blockchain with smart contracts, IoT sensors, and IPFS storage for complete traceability.
              </p>
            </div>
            <div>
              <h3 className="text-emerald-900 mb-3">Support</h3>
              <p className="text-sm text-gray-600">
                Need help? Visit our guide portal or contact our support team for assistance.
              </p>
            </div>
          </div>
          <div className="text-center text-emerald-600 pt-6 border-t border-emerald-100">
            <p className="text-sm">Powered by immutable blockchain technology for transparent food tracking</p>
            <p className="text-xs mt-2">Every scan verifies authenticity through cryptographic proof</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
