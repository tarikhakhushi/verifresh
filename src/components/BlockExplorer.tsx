import { useState, useEffect } from 'react';
import { Blocks, Search, ChevronRight, Shield, Clock, Hash, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { db, BlockchainBlock } from '../services/mockDatabase';

export function BlockExplorer() {
  const [blocks, setBlocks] = useState<BlockchainBlock[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlock, setSelectedBlock] = useState<BlockchainBlock | null>(null);

  useEffect(() => {
    loadBlocks();
  }, []);

  const loadBlocks = () => {
    const allBlocks = db.getBlocks();
    setBlocks(allBlocks.reverse());
  };

  const filteredBlocks = blocks.filter(block =>
    block.blockNumber.toString().includes(searchTerm) ||
    block.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
    block.transactions.some(tx => 
      tx.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatHash = (hash: string) => {
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-600 p-3 rounded-xl">
            <Blocks className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-blue-900">Blockchain Explorer</h1>
            <p className="text-blue-600">View all blocks and transactions on the network</p>
          </div>
        </div>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Blocks</p>
                <p className="text-gray-900">{blocks.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Blocks className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Latest Block</p>
                <p className="text-gray-900">#{blocks[0]?.blockNumber || 0}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Hash className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Transactions</p>
                <p className="text-gray-900">{blocks.reduce((acc, b) => acc + b.transactions.length, 0)}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <ChevronRight className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Consensus</p>
                <p className="text-sm text-gray-900">Proof of Authority</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by block number, hash, or product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blocks List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Blocks</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[600px] overflow-y-auto">
            <div className="space-y-3">
              {filteredBlocks.map((block) => (
                <div
                  key={block.hash}
                  onClick={() => setSelectedBlock(block)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedBlock?.hash === block.hash ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-600">Block #{block.blockNumber}</Badge>
                      <Badge variant="outline">{block.transactions.length} tx</Badge>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Hash className="w-4 h-4 text-gray-400" />
                      <code className="text-xs text-gray-600">{formatHash(block.hash)}</code>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{formatTimestamp(block.timestamp)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{block.validator}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Block Details */}
        <Card>
          <CardHeader>
            <CardTitle>Block Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedBlock ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Block Number</p>
                    <p className="text-gray-900">#{selectedBlock.blockNumber}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Transactions</p>
                    <p className="text-gray-900">{selectedBlock.transactions.length}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Hash</Label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <code className="text-xs break-all text-gray-700">{selectedBlock.hash}</code>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Previous Hash</Label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <code className="text-xs break-all text-gray-700">{selectedBlock.previousHash}</code>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Timestamp</Label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{formatTimestamp(selectedBlock.timestamp)}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Validator</Label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{selectedBlock.validator}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Transactions</Label>
                  {selectedBlock.transactions.map((tx) => (
                    <div key={tx.txHash} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-emerald-600">{tx.action}</Badge>
                        <code className="text-xs text-gray-600">{formatHash(tx.txHash)}</code>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-900">{tx.productName}</p>
                        <p className="text-sm text-gray-600">{tx.location}</p>
                        <p className="text-xs text-gray-500">Verified by: {tx.verifiedBy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                <Blocks className="w-16 h-16 mb-4" />
                <p>Select a block to view details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-900 mb-1">{children}</p>;
}
