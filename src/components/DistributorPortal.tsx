import { useState } from 'react';
import { Truck, MapPin, Package, CheckCircle, Clock, Navigation } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

export function DistributorPortal() {
  const [shipments, setShipments] = useState([
    {
      id: 'SHIP-001',
      product: 'Canned Tomatoes',
      batchId: 'BATCH-001',
      quantity: '450 units',
      origin: 'CanPro Facility, Nashik',
      destination: 'Reliance Fresh, Mumbai',
      vehicle: 'MH-01-AB-1234',
      driver: 'Rajesh Kumar',
      status: 'in-transit',
      currentLocation: 'Pune Highway',
      estimatedDelivery: '2024-11-01 18:00',
      temperature: '20-25°C',
      distanceCovered: '45 km',
      distanceRemaining: '75 km',
      blockHash: '0x7c3f...9e4d',
    },
    {
      id: 'SHIP-002',
      product: 'Ready-to-Eat Rajma',
      batchId: 'BATCH-002',
      quantity: '600 pouches',
      origin: 'ReadyMeals Plant, Ludhiana',
      destination: 'Big Bazaar, Delhi',
      vehicle: 'PB-02-CD-5678',
      driver: 'Suresh Singh',
      status: 'delivered',
      currentLocation: 'Big Bazaar, Delhi',
      estimatedDelivery: '2024-11-01 10:00',
      temperature: 'Ambient',
      distanceCovered: '320 km',
      distanceRemaining: '0 km',
      blockHash: '0x9a2f...5c8d',
    },
  ]);

  const [showShipmentForm, setShowShipmentForm] = useState(false);
  const [newShipment, setNewShipment] = useState({
    batchId: '',
    product: '',
    quantity: '',
    destination: '',
    vehicle: '',
    driver: '',
    notes: '',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl shadow-lg">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-orange-900">Distributor Portal</h1>
              <p className="text-orange-700">Manage shipments and deliver to retailers</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-orange-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Shipments</p>
                  <p className="text-orange-900 mt-1">15</p>
                </div>
                <Truck className="w-10 h-10 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Transit</p>
                  <p className="text-blue-900 mt-1">8</p>
                </div>
                <Navigation className="w-10 h-10 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Delivered Today</p>
                  <p className="text-green-900 mt-1">32</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Distance</p>
                  <p className="text-purple-900 mt-1">2,340 km</p>
                </div>
                <MapPin className="w-10 h-10 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create Shipment Button */}
        <div className="mb-6">
          <Button
            onClick={() => setShowShipmentForm(!showShipmentForm)}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          >
            <Package className="w-4 h-4 mr-2" />
            Create New Shipment
          </Button>
        </div>

        {/* Shipment Form */}
        {showShipmentForm && (
          <Card className="mb-8 border-2 border-orange-300">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle>Create New Shipment</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="batchId">Batch ID / QR Scan</Label>
                  <Input
                    id="batchId"
                    placeholder="Scan batch from processor"
                    value={newShipment.batchId}
                    onChange={(e) => setNewShipment({ ...newShipment, batchId: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="product">Product Name</Label>
                  <Input
                    id="product"
                    placeholder="e.g., Canned Tomatoes"
                    value={newShipment.product}
                    onChange={(e) => setNewShipment({ ...newShipment, product: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    placeholder="450 units"
                    value={newShipment.quantity}
                    onChange={(e) => setNewShipment({ ...newShipment, quantity: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="destination">Destination Retailer</Label>
                  <Input
                    id="destination"
                    placeholder="Retailer name and location"
                    value={newShipment.destination}
                    onChange={(e) => setNewShipment({ ...newShipment, destination: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="vehicle">Vehicle Number</Label>
                  <Input
                    id="vehicle"
                    placeholder="MH-01-AB-1234"
                    value={newShipment.vehicle}
                    onChange={(e) => setNewShipment({ ...newShipment, vehicle: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="driver">Driver Name</Label>
                  <Input
                    id="driver"
                    placeholder="Driver name"
                    value={newShipment.driver}
                    onChange={(e) => setNewShipment({ ...newShipment, driver: e.target.value })}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="notes">Shipment Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Special handling instructions..."
                    value={newShipment.notes}
                    onChange={(e) => setNewShipment({ ...newShipment, notes: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700">
                  Create Shipment & Update Blockchain
                </Button>
                <Button variant="outline" onClick={() => setShowShipmentForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Shipments List */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
            <CardTitle>Active & Recent Shipments</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {shipments.map((shipment) => (
                <Card key={shipment.id} className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-orange-900 mb-1">{shipment.product}</h3>
                        <p className="text-sm text-gray-600">Shipment ID: {shipment.id} | Batch: {shipment.batchId}</p>
                      </div>
                      <Badge
                        className={
                          shipment.status === 'in-transit'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }
                      >
                        {shipment.status === 'in-transit' ? 'In Transit' : 'Delivered'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-600">Route</p>
                        <p className="text-sm text-gray-900">{shipment.origin}</p>
                        <div className="flex items-center gap-1 my-2">
                          <div className="flex-1 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded"></div>
                        </div>
                        <p className="text-sm text-gray-900">{shipment.destination}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Current Location</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <p className="text-sm text-gray-900">{shipment.currentLocation}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {shipment.distanceCovered} / {shipment.distanceRemaining} remaining
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Vehicle & Driver</p>
                        <p className="text-sm text-gray-900">{shipment.vehicle}</p>
                        <p className="text-xs text-gray-500">{shipment.driver}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Clock className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-gray-600">ETA: {shipment.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-xs text-gray-600">Blockchain Hash: <code className="text-emerald-600">{shipment.blockHash}</code></p>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <MapPin className="w-3 h-3 mr-1" />
                        Track Live
                      </Button>
                      <Button size="sm" variant="outline">
                        Update Status
                      </Button>
                      {shipment.status === 'in-transit' && (
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Mark Delivered
                        </Button>
                      )}
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
