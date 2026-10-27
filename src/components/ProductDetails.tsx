import { ArrowLeft, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { VerificationBadges } from './VerificationBadges';
import { ProductJourney } from './ProductJourney';
import { ImpactMetrics } from './ImpactMetrics';
import { EthicalSourcing } from './EthicalSourcing';
import { BlockchainWorkflow } from './BlockchainWorkflow';
import { foodProductData as productData } from './foodProductData';

interface ProductDetailsProps {
  productId: string;
  onBack: () => void;
}

export function ProductDetails({ productId, onBack }: ProductDetailsProps) {
  const product = productData[productId];

  if (!product) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-red-900 mb-2">Product Not Found</h2>
        <Button onClick={onBack}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Scan Another Product
      </Button>

      {/* Product Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-emerald-100">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-xl overflow-hidden bg-emerald-50">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="w-5 h-5" />
                <span>Verified Authentic</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-emerald-600 mb-1">{product.category}</p>
                <h2 className="text-emerald-900 mb-2">{product.name}</h2>
                <p className="text-emerald-700">{product.description}</p>
              </div>
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>

            <VerificationBadges certifications={product.certifications} />

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-sm text-emerald-600 mb-1">Origin</p>
                <p className="text-emerald-900">{product.origin}</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-sm text-emerald-600 mb-1">Blockchain ID</p>
                <p className="text-emerald-900 text-sm truncate">{product.blockchainId}</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Last Verified:</strong> {product.lastVerified}
              </p>
              <p className="text-xs text-blue-700 mt-1">
                All data is immutably stored on blockchain and cannot be tampered with
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue={product.ingredients ? "ingredients" : "journey"} className="space-y-6">
        <TabsList className={`grid w-full ${product.ingredients ? 'grid-cols-5' : 'grid-cols-4'} bg-white border border-emerald-100 p-1`}>
          {product.ingredients && (
            <TabsTrigger value="ingredients">Ingredient Tracking</TabsTrigger>
          )}
          <TabsTrigger value="journey">Supply Chain Journey</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Workflow</TabsTrigger>
          <TabsTrigger value="impact">Environmental Impact</TabsTrigger>
          <TabsTrigger value="ethical">Ethical Sourcing</TabsTrigger>
        </TabsList>

        {product.ingredients && (
          <TabsContent value="ingredients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Multi-Ingredient Tracking</CardTitle>
                <p className="text-sm text-gray-600">
                  This product contains {product.ingredients.length} ingredients, each with complete supply chain traceability
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.ingredients.map((ingredient: any) => (
                    <Card key={ingredient.id} className="border-2">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={ingredient.image} 
                          alt={ingredient.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                          <p className="text-emerald-900">{ingredient.name}</p>
                          <p className="text-xs text-emerald-600">{ingredient.quantity}</p>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-gray-500">Farmer</p>
                            <p className="text-sm text-gray-900">{ingredient.farmerName}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Origin</p>
                            <p className="text-sm text-gray-900">{ingredient.origin}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Harvest Date</p>
                            <p className="text-sm text-gray-900">{ingredient.harvestDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Blockchain ID</p>
                            <code className="text-xs text-gray-600 break-all">{ingredient.blockchainId}</code>
                          </div>
                          {ingredient.certifications && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {ingredient.certifications.map((cert: string, idx: number) => (
                                <span key={idx} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                                  {cert}
                                </span>
                              ))}
                            </div>
                          )}
                          {ingredient.journey && ingredient.journey.length > 0 && (
                            <div className="pt-3 border-t">
                              <p className="text-xs text-gray-500 mb-2">Supply Chain Steps</p>
                              <div className="space-y-2">
                                {ingredient.journey.map((step: any, idx: number) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="text-xs text-gray-900">{step.status}</p>
                                      <p className="text-xs text-gray-500">{step.location}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-sm text-emerald-900">
                    <strong>Manufacturing Process:</strong> All ingredients were received, quality-tested, and combined at the manufacturing facility. 
                    Each ingredient's blockchain record is cryptographically linked to the final product, ensuring complete transparency from multiple farms to your table.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        <TabsContent value="journey" className="space-y-6">
          <ProductJourney journey={product.journey} />
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-6">
          <BlockchainWorkflow />
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <ImpactMetrics metrics={product.environmentalImpact} />
        </TabsContent>

        <TabsContent value="ethical" className="space-y-6">
          <EthicalSourcing data={product.ethicalData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}