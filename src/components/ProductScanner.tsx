import { useState } from 'react';
import { QrCode, Package, Coffee, Camera, Grape, Upload, Keyboard, Apple } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CameraQRScanner } from './CameraQRScanner';

interface ProductScannerProps {
  onProductSelect: (productId: string) => void;
}

const sampleProducts = [
  {
    id: 'kissan-jam-001',
    name: 'Kissan Mixed Fruit Jam',
    category: 'Food & Preserves',
    icon: Grape,
    image: 'https://images.unsplash.com/photo-1645871306587-bebaa2f1dfc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW0lMjBqYXIlMjBraXRjaGVufGVufDF8fHx8MTc2MTk4MzkzNnww&ixlib=rb-4.1.0&q=80&w=400',
    preview: 'Multi-ingredient tracking, FSSAI certified',
    qrCode: 'QR-KISSAN-JAM-001'
  },
  {
    id: 'coffee-001',
    name: 'Ethiopian Single-Origin Coffee',
    category: 'Food & Beverage',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    preview: 'Fair trade certified, organic',
    qrCode: 'QR-COFFEE-001'
  },
  {
    id: 'canned-tomato-001',
    name: 'Organic Canned Tomatoes',
    category: 'Canned Food',
    icon: Apple,
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=400',
    preview: 'Farm-to-can traceability, No preservatives',
    qrCode: 'QR-TOMATO-001'
  },
  {
    id: 'ready-meal-001',
    name: 'Ready-to-Eat Rajma Masala',
    category: 'Ready-to-Eat',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    preview: 'Complete ingredient tracking, Halal certified',
    qrCode: 'QR-RAJMA-001'
  }
];

export function ProductScanner({ onProductSelect }: ProductScannerProps) {
  const [showCamera, setShowCamera] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  const handleManualSubmit = () => {
    // Extract product ID from manual QR code
    const productId = manualCode.toLowerCase().replace('qr-', '').replace(/-001$/, '-001');
    if (productId) {
      onProductSelect(productId);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would use a QR code reader library
      // For demo, we'll simulate by selecting the first product
      setTimeout(() => {
        onProductSelect(sampleProducts[0].id);
      }, 1000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {showCamera && (
        <CameraQRScanner 
          onScanSuccess={(productId) => {
            setShowCamera(false);
            onProductSelect(productId);
          }}
          onClose={() => setShowCamera(false)}
        />
      )}

      {/* Scanner Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl mb-6 shadow-lg">
          <QrCode className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-emerald-900 mb-3">Scan Product QR Code</h2>
        <p className="text-emerald-700 max-w-2xl mx-auto">
          Instantly access complete product history, authenticity verification, and sustainability metrics. 
          Each scan reveals the full journey from origin to your hands.
        </p>
      </div>

      {/* Scanner Options */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-2 border-emerald-100">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-md aspect-square bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center border-2 border-dashed border-emerald-300">
            <div className="text-center">
              <QrCode className="w-16 h-16 text-emerald-400 mx-auto mb-3" />
              <p className="text-emerald-600">Point camera at product QR code</p>
              <p className="text-sm text-emerald-500 mt-1">or use options below</p>
            </div>
          </div>

          {/* Scanning Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
            <Button
              onClick={() => setShowCamera(true)}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              <Camera className="w-5 h-5 mr-2" />
              Scan with Camera
            </Button>

            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-emerald-300 hover:bg-emerald-50"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload QR Image
              </Button>
            </div>

            <Button
              onClick={() => setShowManualInput(!showManualInput)}
              size="lg"
              variant="outline"
              className="border-2 border-emerald-300 hover:bg-emerald-50"
            >
              <Keyboard className="w-5 h-5 mr-2" />
              Enter Code
            </Button>
          </div>

          {/* Manual Input Field */}
          {showManualInput && (
            <div className="w-full max-w-md bg-emerald-50 p-4 rounded-lg border-2 border-emerald-200">
              <p className="text-sm text-emerald-700 mb-3">Enter QR Code Manually</p>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., QR-COFFEE-001"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  className="flex-1 border-emerald-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleManualSubmit()}
                />
                <Button
                  onClick={handleManualSubmit}
                  className="bg-emerald-500 hover:bg-emerald-600"
                >
                  Submit
                </Button>
              </div>
              <p className="text-xs text-emerald-600 mt-2">
                Try: QR-COFFEE-001, QR-KISSAN-JAM-001, QR-TOMATO-001, or QR-RAJMA-001
              </p>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md">
            <p className="text-sm text-blue-900">
              <strong>How it works:</strong> Each product QR code contains a unique blockchain hash that verifies authenticity and unlocks the complete supply chain history stored on an immutable distributed ledger.
            </p>
          </div>
        </div>
      </div>

      {/* Sample Products */}
      <div>
        <h3 className="text-emerald-900 mb-6">Try Sample Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card 
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-emerald-100 cursor-pointer group"
                onClick={() => onProductSelect(product.id)}
              >
                <div className="relative h-48 overflow-hidden bg-emerald-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-emerald-700">
                    <Icon className="w-3 h-3 inline mr-1" />
                    {product.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-emerald-900">{product.name}</CardTitle>
                  <CardDescription>{product.preview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
                    <QrCode className="w-4 h-4 mr-2" />
                    View Full Provenance
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}