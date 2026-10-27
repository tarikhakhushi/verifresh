import { useState, useEffect } from 'react';
import { Radio, MapPin, Thermometer, Clock, Package, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { db, LiveUpdate } from '../services/mockDatabase';

export function LiveTracking() {
  const [liveUpdates, setLiveUpdates] = useState<LiveUpdate[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    loadUpdates();
    
    if (autoRefresh) {
      const interval = setInterval(() => {
        loadUpdates();
        // Simulate new updates
        simulateNewUpdate();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const loadUpdates = () => {
    const updates = db.getLiveUpdates();
    setLiveUpdates(updates);
  };

  const simulateNewUpdate = () => {
    const products = [
      { id: 'coffee-001', name: 'Ethiopian Coffee' },
      { id: 'kissan-jam-001', name: 'Kissan Mixed Fruit Jam' },
      { id: 'pharma-001', name: 'Essential Vaccine' },
    ];
    
    const statuses = ['Processing', 'In Transit', 'Quality Check', 'Packaging', 'Dispatched'];
    const locations = [
      'Processing Facility',
      'Quality Lab',
      'Packaging Unit',
      'Distribution Center',
      'Regional Hub',
      'Final Mile Delivery'
    ];

    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    if (Math.random() > 0.7) { // 30% chance of new update
      const newUpdate: LiveUpdate = {
        id: `update-${Date.now()}`,
        productId: randomProduct.id,
        productName: randomProduct.name,
        status: randomStatus,
        location: randomLocation,
        timestamp: new Date().toISOString(),
        temperature: `${Math.floor(Math.random() * 20) + 5}°C`,
        coordinates: `${(Math.random() * 90).toFixed(4)}°N, ${(Math.random() * 180).toFixed(4)}°E`
      };
      
      db.addLiveUpdate(newUpdate);
      loadUpdates();
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Registered': 'bg-blue-500',
      'Processing': 'bg-yellow-500',
      'Manufacturing': 'bg-orange-500',
      'Quality Check': 'bg-purple-500',
      'Packaging': 'bg-indigo-500',
      'In Transit': 'bg-cyan-500',
      'Dispatched': 'bg-green-500',
      'Delivered': 'bg-emerald-500',
    };
    return colors[status] || 'bg-gray-500';
  };

  const getRelativeTime = (timestamp: string) => {
    const now = new Date().getTime();
    const time = new Date(timestamp).getTime();
    const diff = now - time;
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (seconds < 60) return `${seconds}s ago`;
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-600 p-3 rounded-xl relative">
              <Radio className="w-7 h-7 text-white" />
              {autoRefresh && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              )}
            </div>
            <div>
              <h1 className="text-cyan-900">Live Tracking</h1>
              <p className="text-cyan-600">Real-time updates from the supply chain</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={autoRefresh ? 'bg-green-500' : 'bg-gray-500'}>
              {autoRefresh ? 'Live' : 'Paused'}
            </Badge>
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 transition-colors"
            >
              {autoRefresh ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Shipments</p>
                <p className="text-gray-900">{liveUpdates.length}</p>
              </div>
              <div className="bg-cyan-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">In Transit</p>
                <p className="text-gray-900">
                  {liveUpdates.filter(u => u.status.includes('Transit')).length}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Updates Today</p>
                <p className="text-gray-900">
                  {liveUpdates.filter(u => {
                    const updateDate = new Date(u.timestamp).toDateString();
                    return updateDate === new Date().toDateString();
                  }).length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Locations</p>
                <p className="text-gray-900">
                  {new Set(liveUpdates.map(u => u.location)).size}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Updates Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-cyan-600" />
            Live Updates Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {liveUpdates.map((update, index) => (
              <div
                key={update.id}
                className="p-4 border rounded-lg hover:shadow-md transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900">{update.productName}</p>
                      <p className="text-sm text-gray-500">ID: {update.productId}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(update.status)}>
                    {update.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{update.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{getRelativeTime(update.timestamp)}</span>
                  </div>
                  {update.temperature && (
                    <div className="flex items-center gap-2 text-sm">
                      <Thermometer className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{update.temperature}</span>
                    </div>
                  )}
                  {update.coordinates && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 text-xs">{update.coordinates}</span>
                    </div>
                  )}
                </div>

                {/* Progress bar for visual tracking */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Supply Chain Progress</span>
                    <span>
                      {update.status === 'Delivered' ? '100%' : 
                       update.status === 'Dispatched' ? '85%' :
                       update.status === 'In Transit' ? '60%' :
                       update.status === 'Packaging' ? '45%' :
                       update.status === 'Quality Check' ? '30%' :
                       update.status === 'Manufacturing' ? '20%' : '10%'}
                    </span>
                  </div>
                  <Progress 
                    value={
                      update.status === 'Delivered' ? 100 : 
                      update.status === 'Dispatched' ? 85 :
                      update.status === 'In Transit' ? 60 :
                      update.status === 'Packaging' ? 45 :
                      update.status === 'Quality Check' ? 30 :
                      update.status === 'Manufacturing' ? 20 : 10
                    } 
                    className="h-2"
                  />
                </div>
              </div>
            ))}

            {liveUpdates.length === 0 && (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <Radio className="w-16 h-16 mb-4" />
                <p>No live updates available</p>
                <p className="text-sm">Updates will appear here in real-time</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
