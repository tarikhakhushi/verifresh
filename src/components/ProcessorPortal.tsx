import { useState } from 'react';
import { Factory, Thermometer, Clock, CheckCircle, AlertCircle, TrendingUp, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

export function ProcessorPortal() {
  const [batches, setBatches] = useState([
    {
      id: 'BATCH-001',
      product: 'Canned Tomatoes',
      inputMaterial: 'Fresh Tomatoes',
      inputQuantity: '500 kg',
      outputQuantity: '450 units',
      stage: 'Sterilization',
      progress: 75,
      temperature: '121°C',
      startTime: '2024-11-01 08:00',
      estimatedCompletion: '2024-11-01 14:00',
      status: 'in-progress',
      qualityScore: 95,
      blockHash: '0x5d2a...9f8c',
    },
    {
      id: 'BATCH-002',
      product: 'Ready-to-Eat Rajma',
      inputMaterial: 'Kidney Beans + Spices',
      inputQuantity: '300 kg',
      outputQuantity: '600 pouches',
      stage: 'Quality Testing',
      progress: 90,
      temperature: 'Ambient',
      startTime: '2024-11-01 06:00',
      estimatedCompletion: '2024-11-01 12:00',
      status: 'in-progress',
      qualityScore: 98,
      blockHash: '0x9e4c...7f1a',
    },
  ]);

  const [showProcessForm, setShowProcessForm] = useState(false);
  const [newProcess, setNewProcess] = useState({
    batchId: '',
    product: '',
    inputMaterial: '',
    inputQuantity: '',
    processType: '',
    temperature: '',
    duration: '',
    notes: '',
  });

  const handleStartProcess = () => {
    const batch = {
      id: `BATCH-${String(batches.length + 1).padStart(3, '0')}`,
      product: newProcess.product,
      inputMaterial: newProcess.inputMaterial,
      inputQuantity: newProcess.inputQuantity,
      outputQuantity: 'Processing...',
      stage: 'Received',
      progress: 10,
      temperature: newProcess.temperature,
      startTime: new Date().toISOString().slice(0, 16).replace('T', ' '),
      estimatedCompletion: 'Calculating...',
      status: 'in-progress',
      qualityScore: 0,
      blockHash: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
    };
    
    setBatches([batch, ...batches]);
    setShowProcessForm(false);
    setNewProcess({
      batchId: '',
      product: '',
      inputMaterial: '',
      inputQuantity: '',
      processType: '',
      temperature: '',
      duration: '',
      notes: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
              <Factory className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-purple-900">Processor Portal</h1>
              <p className="text-purple-700">Process raw materials and update blockchain records</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-purple-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Batches</p>
                  <p className="text-purple-900 mt-1">8</p>
                </div>
                <Factory className="w-10 h-10 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed Today</p>
                  <p className="text-green-900 mt-1">24</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Quality Score</p>
                  <p className="text-blue-900 mt-1">96.5%</p>
                </div>
                <TrendingUp className="w-10 h-10 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Production Units</p>
                  <p className="text-orange-900 mt-1">12,450</p>
                </div>
                <TrendingUp className="w-10 h-10 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Start New Process Button */}
        <div className="mb-6">
          <Button
            onClick={() => setShowProcessForm(!showProcessForm)}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
          >
            <Factory className="w-4 h-4 mr-2" />
            Start New Processing Batch
          </Button>
        </div>

        {/* Process Form */}
        {showProcessForm && (
          <Card className="mb-8 border-2 border-purple-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              <CardTitle>Start New Processing Batch</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="batchId">Input Batch ID / QR Scan</Label>
                  <Input
                    id="batchId"
                    placeholder="Scan or enter batch ID from collector"
                    value={newProcess.batchId}
                    onChange={(e) => setNewProcess({ ...newProcess, batchId: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="product">Final Product Name</Label>
                  <Input
                    id="product"
                    placeholder="e.g., Canned Tomatoes"
                    value={newProcess.product}
                    onChange={(e) => setNewProcess({ ...newProcess, product: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="inputMaterial">Input Material</Label>
                  <Input
                    id="inputMaterial"
                    placeholder="e.g., Fresh Tomatoes"
                    value={newProcess.inputMaterial}
                    onChange={(e) => setNewProcess({ ...newProcess, inputMaterial: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="inputQuantity">Input Quantity (kg)</Label>
                  <Input
                    id="inputQuantity"
                    type="number"
                    placeholder="500"
                    value={newProcess.inputQuantity}
                    onChange={(e) => setNewProcess({ ...newProcess, inputQuantity: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="processType">Process Type</Label>
                  <select
                    id="processType"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newProcess.processType}
                    onChange={(e) => setNewProcess({ ...newProcess, processType: e.target.value })}
                  >
                    <option value="">Select Process</option>
                    <option value="canning">Canning</option>
                    <option value="retort">Retort Processing</option>
                    <option value="freezing">Freezing</option>
                    <option value="drying">Drying</option>
                    <option value="cooking">Cooking</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="temperature">Processing Temperature (°C)</Label>
                  <Input
                    id="temperature"
                    placeholder="121"
                    value={newProcess.temperature}
                    onChange={(e) => setNewProcess({ ...newProcess, temperature: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="duration">Estimated Duration (hours)</Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="6"
                    value={newProcess.duration}
                    onChange={(e) => setNewProcess({ ...newProcess, duration: e.target.value })}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="notes">Process Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special processing requirements..."
                    value={newProcess.notes}
                    onChange={(e) => setNewProcess({ ...newProcess, notes: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={handleStartProcess}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Start Process & Update Blockchain
                </Button>
                <Button variant="outline" onClick={() => setShowProcessForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Active Batches */}
        <Card className="border-2 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <CardTitle>Active Processing Batches</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {batches.map((batch) => (
                <Card key={batch.id} className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-purple-900 mb-1">{batch.product}</h3>
                        <p className="text-sm text-gray-600">Batch ID: {batch.id}</p>
                      </div>
                      <Badge
                        className={
                          batch.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }
                      >
                        {batch.status === 'in-progress' ? 'In Progress' : 'Completed'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-600">Input Material</p>
                        <p className="text-sm text-gray-900">{batch.inputMaterial}</p>
                        <p className="text-xs text-gray-500">{batch.inputQuantity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Current Stage</p>
                        <p className="text-sm text-gray-900">{batch.stage}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Thermometer className="w-3 h-3 text-red-500" />
                          <span className="text-xs text-gray-600">{batch.temperature}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Start Time</p>
                        <p className="text-sm text-gray-900">{batch.startTime}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-gray-600">ETC: {batch.estimatedCompletion}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Quality Score</p>
                        <p className="text-sm text-gray-900">{batch.qualityScore > 0 ? `${batch.qualityScore}%` : 'Testing...'}</p>
                        {batch.qualityScore >= 90 && (
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-700">Processing Progress</span>
                        <span className="text-sm text-purple-700">{batch.progress}%</span>
                      </div>
                      <Progress value={batch.progress} className="h-2" />
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-xs text-gray-600">Blockchain Hash: <code className="text-emerald-600">{batch.blockHash}</code></p>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        Update Status
                      </Button>
                      <Button size="sm" variant="outline">
                        Quality Test
                      </Button>
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                        Complete Batch
                      </Button>
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
