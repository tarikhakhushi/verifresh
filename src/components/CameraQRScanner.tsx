import { useState, useRef, useEffect } from 'react';
import { Camera, X, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Card } from './ui/card';

interface CameraQRScannerProps {
  onScanSuccess: (productId: string) => void;
  onClose: () => void;
}

export function CameraQRScanner({ onScanSuccess, onClose }: CameraQRScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      setError('');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsScanning(true);
      }
    } catch (err) {
      setError('Unable to access camera. Please check permissions.');
      console.error('Camera error:', err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  // Simulate QR detection (in production, use a QR scanning library like jsQR)
  const simulateQRDetection = () => {
    setSuccessMessage('QR Code detected! Processing...');
    setTimeout(() => {
      stopCamera();
      // Simulate scanning one of our products
      const products = ['coffee-001', 'pharma-001', 'luxury-001', 'food-001', 'kissan-jam-001'];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      onScanSuccess(randomProduct);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Camera className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2>Scan QR Code</h2>
                <p className="text-sm text-gray-600">Position the QR code within the frame</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="w-4 h-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {successMessage && (
            <Alert className="mb-4 border-emerald-500 bg-emerald-50">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <AlertDescription className="text-emerald-800">{successMessage}</AlertDescription>
            </Alert>
          )}

          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video mb-4">
            {!isScanning ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="mb-4">Camera is ready to scan</p>
                  <Button onClick={startCamera} className="bg-emerald-600 hover:bg-emerald-700">
                    <Camera className="w-4 h-4 mr-2" />
                    Start Camera
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* QR scanning frame overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Corner markers */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-emerald-500" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-emerald-500" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-emerald-500" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-500" />
                    
                    {/* Scanning line animation */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute w-full h-1 bg-emerald-500 animate-scan" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {isScanning && (
            <div className="flex gap-3">
              <Button 
                onClick={simulateQRDetection} 
                className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              >
                Simulate QR Detection
              </Button>
              <Button 
                variant="outline" 
                onClick={stopCamera}
              >
                Stop Camera
              </Button>
            </div>
          )}

          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Demo Mode:</strong> In production, this would use a real QR scanning library to detect and decode QR codes automatically. For now, click "Simulate QR Detection" to test the feature.
            </p>
          </div>
        </div>
      </Card>

      <style>{`
        @keyframes scan {
          0% {
            top: 0;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0;
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
