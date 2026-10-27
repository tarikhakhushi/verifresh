import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { ProductScanner } from './ProductScanner';
import { ProductDetails } from './ProductDetails';

export function ConsumerPortal() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-600 p-3 rounded-xl">
            <ShoppingCart className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-blue-900">Consumer Portal</h1>
            <p className="text-blue-600">Scan and verify product authenticity</p>
          </div>
        </div>
      </div>

      {!selectedProduct ? (
        <ProductScanner onProductSelect={setSelectedProduct} />
      ) : (
        <ProductDetails 
          productId={selectedProduct} 
          onBack={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
