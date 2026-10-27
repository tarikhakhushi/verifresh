import { useState } from 'react';
import { Package, MapPin, Thermometer, Scale, CheckCircle, Upload, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';

export function CollectorPortal() {
  const [collections, setCollections] = useState([
    {
      id: 'COL-001',
      product: 'Organic Tomatoes',
      farmer: 'Ramesh Patil',
      farmerId: 'farmer-201',
      quantity: '500 kg',
      location: 'Nashik Collection Center',
      temperature: '15°C',
      status: 'collected',
      date: '2024-11-01 08:30',
      blockHash: '0x2f9c...7e3d',
    },
    {
      id: 'COL-002',
      product: 'Red Kidney Beans',
      farmer: 'Suresh Kumar',
      farmerId: 'farmer-301',
      quantity: '300 kg',
      location: 'Kangra Collection Point',
      temperature: 'Ambient',
      status: 'in-transit',
      date: '2024-11-01 09:15',
      blockHash: '0x7a2f...9c8e',
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCollection, setNewCollection] = useState({
    farmerId: '',
    product: '',
    quantity: '',
    quality: '',
    temperature: '',
    location: '',
    notes: '',
  });

  const handleAddCollection = () => {
    const collection = {
      id: `COL-${String(collections.length + 1).padStart(3, '0')}`,
      product: newCollection.product,
      farmer: 'Farmer Name', // Would come from farmer ID lookup
      farmerId: newCollection.farmerId,
      quantity: newCollection.quantity,
      location: newCollection.location,
      temperature: newCollection.temperature,
      status: 'collected',
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      blockHash: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
    };
    
    setCollections([collection, ...collections]);
    setShowAddForm(false);
    setNewCollection({
      farmerId: '',
      product: '',
      quantity: '',
      quality: '',
      temperature: '',
      location: '',
      notes: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-4 rounded-2xl shadow-lg">
              <Package className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-amber-900">Collector Portal</h1>
              <p className="text-amber-700">Collect produce from farmers and update blockchain</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-amber-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Collections</p>
                  <p className="text-amber-900 mt-1">12</p>
                </div>
                <Package className="w-10 h-10 text-amber-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Weight</p>
                  <p className="text-green-900 mt-1">2,450 kg</p>
                </div>
                <Scale className="w-10 h-10 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Transit</p>
                  <p className="text-blue-900 mt-1">5</p>
                </div>
                <MapPin className="w-10 h-10 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Delivered</p>
                  <p className="text-purple-900 mt-1">45</p>
                </div>
                <CheckCircle className="w-10 h-10 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Collection Button */}
        <div className="mb-6">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
          >
            <Upload className="w-4 h-4 mr-2" />
            Add New Collection
          </Button>
        </div>

        {/* Add Collection Form */}
        {showAddForm && (
          <Card className="mb-8 border-2 border-amber-300">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
              <CardTitle>Record New Collection</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="farmerId">Farmer ID / QR Scan</Label>
                  <Input
                    id="farmerId"
                    placeholder="Enter Farmer ID or Scan QR"
                    value={newCollection.farmerId}
                    onChange={(e) => setNewCollection({ ...newCollection, farmerId: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="product">Product Name</Label>
                  <Input
                    id="product"
                    placeholder="e.g., Organic Tomatoes"
                    value={newCollection.product}
                    onChange={(e) => setNewCollection({ ...newCollection, product: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity (kg)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="500"
                    value={newCollection.quantity}
                    onChange={(e) => setNewCollection({ ...newCollection, quantity: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="quality">Quality Grade</Label>
                  <select
                    id="quality"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newCollection.quality}
                    onChange={(e) => setNewCollection({ ...newCollection, quality: e.target.value })}
                  >
                    <option value="">Select Grade</option>
                    <option value="A">Grade A - Premium</option>
                    <option value="B">Grade B - Good</option>
                    <option value="C">Grade C - Standard</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="temperature">Temperature (°C)</Label>
                  <Input
                    id="temperature"
                    placeholder="15"
                    value={newCollection.temperature}
                    onChange={(e) => setNewCollection({ ...newCollection, temperature: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="location">Collection Location</Label>
                  <Input
                    id="location"
                    placeholder="Collection Center Name"
                    value={newCollection.location}
                    onChange={(e) => setNewCollection({ ...newCollection, location: e.target.value })}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional observations..."
                    value={newCollection.notes}
                    onChange={(e) => setNewCollection({ ...newCollection, notes: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={handleAddCollection}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save to Blockchain
                </Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Collections List */}
        <Card className="border-2 border-amber-200">
          <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
            <CardTitle>Recent Collections</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {collections.map((collection) => (
                <Card key={collection.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Collection ID</p>
                        <p className="text-amber-900">{collection.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Product</p>
                        <p className="text-gray-900">{collection.product}</p>
                        <p className="text-xs text-gray-500">from {collection.farmer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Quantity</p>
                        <p className="text-gray-900">{collection.quantity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="text-gray-900 text-sm">{collection.location}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Thermometer className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-gray-600">{collection.temperature}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <Badge
                          className={
                            collection.status === 'collected'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }
                        >
                          {collection.status === 'collected' ? 'Collected' : 'In Transit'}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{collection.date}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-xs text-gray-600">Blockchain Hash: <code className="text-emerald-600">{collection.blockHash}</code></p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
