import { useState } from 'react';
import { User, Lock, LogIn, Leaf, Package, Factory, Truck, Store, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';

interface LoginPortalProps {
  onLogin: (role: string) => void;
}

const demoUsers = [
  { role: 'consumer', name: 'Consumer', icon: Eye, color: 'from-blue-500 to-blue-600', description: 'Scan & verify products' },
  { role: 'farmer', name: 'Farmer', icon: Leaf, color: 'from-green-500 to-green-600', description: 'Register harvested produce' },
  { role: 'collector', name: 'Collector', icon: Package, color: 'from-amber-500 to-amber-600', description: 'Collect & transport produce' },
  { role: 'processor', name: 'Processor', icon: Factory, color: 'from-purple-500 to-purple-600', description: 'Process & manufacture products' },
  { role: 'distributor', name: 'Distributor', icon: Truck, color: 'from-orange-500 to-orange-600', description: 'Distribute to retailers' },
  { role: 'retailer', name: 'Retailer', icon: Store, color: 'from-teal-500 to-teal-600', description: 'Sell to consumers' },
];

export function LoginPortal({ onLogin }: LoginPortalProps) {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleQuickLogin = (role: string) => {
    onLogin(role);
  };

  const handleFormLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-lg">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-emerald-900 mb-3">VeriFresh</h1>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Blockchain-Based Food Supply Chain Tracking System
          </p>
          <p className="text-emerald-600 mt-2">
            Complete transparency from farm to table
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="mb-8">
          <h2 className="text-center text-emerald-900 mb-6">Select Your Role - Demo Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {demoUsers.map((user) => {
              const Icon = user.icon;
              return (
                <Card 
                  key={user.role}
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-400 group"
                  onClick={() => handleQuickLogin(user.role)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`bg-gradient-to-br ${user.color} p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-emerald-900 mb-2">{user.name}</h3>
                    <p className="text-xs text-gray-600">{user.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Traditional Login Form */}
        <Card className="max-w-md mx-auto border-2 border-emerald-100 shadow-xl">
          <CardHeader className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-center gap-2">
              <LogIn className="w-6 h-6" />
              Login to VeriFresh
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleFormLogin} className="space-y-4">
              <div>
                <Label htmlFor="role">Select Role</Label>
                <select
                  id="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Choose your role...</option>
                  {demoUsers.map((user) => (
                    <option key={user.role} value={user.role}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="username">Username (Demo)</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="demo"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password (Demo)</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="demo123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                disabled={!selectedRole}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Demo Access:</strong> Click any role card above or select a role and click login. 
                No credentials required for demo.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>Powered by Blockchain Technology | Ensuring Food Safety & Transparency</p>
        </div>
      </div>
    </div>
  );
}
