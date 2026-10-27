import { useState } from 'react';
import { BookOpen, Users, Sprout, ShoppingCart, QrCode, Blocks, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

export function OnboardingGuide() {
  const [userType, setUserType] = useState<'consumer' | 'farmer'>('consumer');

  const consumerSteps = [
    {
      icon: QrCode,
      title: 'Scan QR Code',
      description: 'Use your device camera or the in-app scanner to scan the QR code on any product',
      details: [
        'Open VeriFresh app and tap "Scan QR Code"',
        'Allow camera permissions when prompted',
        'Point camera at the QR code on product packaging',
        'Wait for automatic detection or tap to focus',
      ],
      image: 'https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4Nzk3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: CheckCircle2,
      title: 'View Product Details',
      description: 'Access complete product information including origin, certifications, and journey',
      details: [
        'See verified certifications (FSSAI, Organic, Fair Trade, etc.)',
        'Check authenticity through blockchain verification',
        'View environmental impact metrics',
        'Access ethical sourcing information',
      ],
      image: 'https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYxOTQyMjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Blocks,
      title: 'Track Supply Chain',
      description: 'Follow the complete journey from farm/factory to your hands with blockchain proof',
      details: [
        'See every location the product passed through',
        'View timestamps and verification records',
        'Check temperature and storage conditions',
        'Verify each step with blockchain hashes',
      ],
      image: 'https://images.unsplash.com/photo-1623211267269-5e53a12cf20d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkfGVufDF8fHx8MTc2MTkwNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const farmerSteps = [
    {
      icon: Sprout,
      title: 'Register Your Product',
      description: 'Add your harvested products to the blockchain network',
      details: [
        'Go to Farmer Portal and click "Register Product"',
        'Fill in product details: name, quantity, harvest date',
        'Add your farm location and coordinates',
        'Describe your farming practices and certifications',
        'Submit to create immutable blockchain record',
      ],
      image: 'https://images.unsplash.com/photo-1623211267269-5e53a12cf20d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkfGVufDF8fHx8MTc2MTkwNjMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: QrCode,
      title: 'Generate QR Codes',
      description: 'Create unique QR codes for your products linked to blockchain records',
      details: [
        'Navigate to "QR Generator" tab in Farmer Portal',
        'Select the product you want to generate QR for',
        'System creates cryptographically secure QR code',
        'Download or print QR code',
        'Attach to your product packaging or containers',
      ],
      image: 'https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4Nzk3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Blocks,
      title: 'Track Your Products',
      description: 'Monitor your products through the supply chain in real-time',
      details: [
        'View all your registered products in dashboard',
        'See current status and location of each batch',
        'Receive notifications when products change hands',
        'Access full blockchain verification records',
        'Build trust with transparent, verifiable data',
      ],
      image: 'https://images.unsplash.com/photo-1652211955967-99c892925469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYxOTQyMjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const benefits = {
    consumer: [
      { icon: CheckCircle2, text: 'Verify authenticity of products instantly' },
      { icon: CheckCircle2, text: 'Access complete supply chain transparency' },
      { icon: CheckCircle2, text: 'Make informed ethical and sustainable choices' },
      { icon: CheckCircle2, text: 'Protect yourself from counterfeit products' },
      { icon: CheckCircle2, text: 'Support responsible farmers and producers' },
    ],
    farmer: [
      { icon: CheckCircle2, text: 'Build trust with transparent records' },
      { icon: CheckCircle2, text: 'Receive fair prices for quality products' },
      { icon: CheckCircle2, text: 'Protect against fraud and middlemen exploitation' },
      { icon: CheckCircle2, text: 'Access larger markets through verification' },
      { icon: CheckCircle2, text: 'Get recognition for sustainable practices' },
    ],
  };

  const steps = userType === 'consumer' ? consumerSteps : farmerSteps;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-600 p-3 rounded-xl">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-indigo-900">How to Use VeriFresh</h1>
            <p className="text-indigo-600">Complete guide for consumers and farmers</p>
          </div>
        </div>

        {/* User Type Selector */}
        <div className="flex gap-4 mb-6">
          <Button
            onClick={() => setUserType('consumer')}
            variant={userType === 'consumer' ? 'default' : 'outline'}
            className={`flex-1 h-auto py-4 ${userType === 'consumer' ? 'bg-indigo-600' : ''}`}
          >
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">I'm a Consumer</p>
                <p className="text-xs opacity-90">Verify products I buy</p>
              </div>
            </div>
          </Button>
          <Button
            onClick={() => setUserType('farmer')}
            variant={userType === 'farmer' ? 'default' : 'outline'}
            className={`flex-1 h-auto py-4 ${userType === 'farmer' ? 'bg-emerald-600' : ''}`}
          >
            <div className="flex items-center gap-3">
              <Sprout className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">I'm a Farmer/Producer</p>
                <p className="text-xs opacity-90">Register and track my products</p>
              </div>
            </div>
          </Button>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="space-y-6 mb-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${userType === 'consumer' ? 'bg-indigo-100' : 'bg-emerald-100'} p-3 rounded-lg`}>
                        <Icon className={`w-6 h-6 ${userType === 'consumer' ? 'text-indigo-600' : 'text-emerald-600'}`} />
                      </div>
                      <div>
                        <Badge className={userType === 'consumer' ? 'bg-indigo-600' : 'bg-emerald-600'}>
                          Step {index + 1}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${userType === 'consumer' ? 'text-indigo-500' : 'text-emerald-500'}`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-lg w-full h-64 object-cover shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Benefits Section */}
      <Card>
        <CardHeader>
          <CardTitle>
            {userType === 'consumer' ? 'Benefits for Consumers' : 'Benefits for Farmers'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits[userType].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${userType === 'consumer' ? 'text-indigo-600' : 'text-emerald-600'}`} />
                  <p className="text-gray-700">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Our support team is here to assist you with any questions about using VeriFresh.
            </p>
            <Button className={userType === 'consumer' ? 'bg-indigo-600' : 'bg-emerald-600'}>
              Contact Support
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Watch Video Tutorial</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Learn how to use VeriFresh with our comprehensive video guide.
            </p>
            <Button variant="outline">
              Watch Tutorial
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
