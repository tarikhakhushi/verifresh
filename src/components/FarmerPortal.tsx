import { useState } from 'react';
import { Sprout, Package, QrCode, TrendingUp, AlertCircle, CheckCircle2, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { db } from '../services/mockDatabase';

export function FarmerPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    quantity: '',
    origin: '',
    description: '',
    harvestDate: '',
  });
  const [generatedQR, setGeneratedQR] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);

  const farmerStats = [
    { label: 'Products Listed', value: '24', icon: Package, color: 'emerald' },
    { label: 'Active Batches', value: '8', icon: TrendingUp, color: 'blue' },
    { label: 'QR Codes Generated', value: '156', icon: QrCode, color: 'purple' },
    { label: 'Verified Deliveries', value: '142', icon: CheckCircle2, color: 'green' },
  ];

  const recentProducts = [
    { id: 'strawberry-batch-001', name: 'Strawberries', status: 'Delivered', date: 'Oct 5, 2024' },
    { id: 'apple-batch-001', name: 'Shimla Apples', status: 'In Transit', date: 'Sep 28, 2024' },
    { id: 'mango-batch-001', name: 'Alphonso Mangoes', status: 'Delivered', date: 'Oct 1, 2024' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateQRCode = async (productId: string) => {
    try {
      const qrData = db.generateQRData(productId);
      
      // Generate QR code using canvas
      const canvas = document.createElement('canvas');
      const size = 300;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Simple QR code visualization (in production, use a proper QR library)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, size, size);
        
        ctx.fillStyle = '#047857';
        const gridSize = 29;
        const cellSize = size / gridSize;
        
        // Create a simple pattern (not a real QR code, for demo purposes)
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            if (Math.random() > 0.5) {
              ctx.fillRect(i * cellSize, j * cellSize, cellSize - 1, cellSize - 1);
            }
          }
        }
        
        // Add corner markers
        const markerSize = cellSize * 7;
        ctx.strokeStyle = '#047857';
        ctx.lineWidth = cellSize;
        ctx.strokeRect(0, 0, markerSize, markerSize);
        ctx.strokeRect(size - markerSize, 0, markerSize, markerSize);
        ctx.strokeRect(0, size - markerSize, markerSize, markerSize);
        
        const qrCodeUrl = canvas.toDataURL();
        setGeneratedQR(qrCodeUrl);
        return qrCodeUrl;
      }
      return '';
    } catch (error) {
      console.error('QR generation error:', error);
      return '';
    }
  };

  const handleSubmitProduct = async () => {
    const productId = `farmer-${Date.now()}`;
    
    // Record blockchain transaction
    const txHash = db.recordBlockchainTransaction(
      productId,
      formData.productName,
      'Product Registered',
      formData.origin,
      'Farmer Portal'
    );

    // Generate QR code
    await generateQRCode(productId);

    // Add live update
    db.addLiveUpdate({
      id: `update-${Date.now()}`,
      productId,
      productName: formData.productName,
      status: 'Registered',
      location: formData.origin,
      timestamp: new Date().toISOString(),
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);

    // Reset form
    setFormData({
      productName: '',
      category: '',
      quantity: '',
      origin: '',
      description: '',
      harvestDate: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-emerald-600 p-3 rounded-xl">
            <Sprout className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-emerald-900">Farmer Portal</h1>
            <p className="text-emerald-600">Manage your products and track your supply chain</p>
          </div>
        </div>
      </div>

      {showSuccess && (
        <Alert className="mb-6 border-emerald-500 bg-emerald-50">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <AlertDescription className="text-emerald-800">
            Product successfully registered on blockchain! QR code generated.
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="register">Register Product</TabsTrigger>
          <TabsTrigger value="qr-generator">QR Generator</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {farmerStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                        <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recent Products */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Package className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.date}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={product.status === 'Delivered' ? 'default' : 'secondary'}
                      className={product.status === 'Delivered' ? 'bg-emerald-500' : ''}
                    >
                      {product.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register New Product</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    placeholder="e.g., Organic Strawberries"
                    value={formData.productName}
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleInputChange('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="grains">Grains</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 250kg"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="harvestDate">Harvest Date</Label>
                  <Input
                    id="harvestDate"
                    type="date"
                    value={formData.harvestDate}
                    onChange={(e) => handleInputChange('harvestDate', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="origin">Origin Location</Label>
                <div className="flex gap-2">
                  <MapPin className="w-5 h-5 text-gray-400 mt-2" />
                  <Input
                    id="origin"
                    placeholder="e.g., Mahabaleshwar, Maharashtra"
                    value={formData.origin}
                    onChange={(e) => handleInputChange('origin', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product, farming practices, certifications..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                />
              </div>

              <Alert>
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>
                  Once registered, this product will be recorded on the blockchain with a unique identifier and cannot be altered.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={handleSubmitProduct}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                disabled={!formData.productName || !formData.origin}
              >
                Register Product on Blockchain
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qr-generator">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate QR Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Product to Generate QR</Label>
                  <Select onValueChange={(value) => generateQRCode(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {recentProducts.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Alert>
                  <QrCode className="w-4 h-4" />
                  <AlertDescription>
                    QR codes are cryptographically linked to blockchain records and cannot be forged.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                {generatedQR ? (
                  <div className="space-y-4">
                    <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
                      <img src={generatedQR} alt="Generated QR Code" className="w-64 h-64" />
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1" onClick={() => {
                        const link = document.createElement('a');
                        link.download = 'verifresh-qr.png';
                        link.href = generatedQR;
                        link.click();
                      }}>
                        Download QR
                      </Button>
                      <Button variant="outline" onClick={() => window.print()}>
                        Print QR
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      Attach this QR code to your product packaging
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                    <QrCode className="w-16 h-16 mb-4" />
                    <p>Select a product to generate QR code</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
