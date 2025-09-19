import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const barcodeTemplates = [
  {
    id: 1,
    title: "Inventual",
    subtitle: "Price: USD 250",
    barcode: "||||| |||| ||||| |||| |||||"
  },
  {
    id: 2,
    title: "Inventual",
    subtitle: "Price: USD 250",
    barcode: "||||| |||| ||||| |||| |||||"
  },
  {
    id: 3,
    title: "Inventual",
    subtitle: "Price: USD 250",
    barcode: "||||| |||| ||||| |||| |||||"
  },
  {
    id: 4,
    title: "Inventual",
    subtitle: "Price: USD 250",
    barcode: "||||| |||| ||||| |||| |||||"
  }
];

export default function GenerateBarcode() {
  const [includeOptions, setIncludeOptions] = useState({
    name: false,
    code: false,
    importBy: true,
    price: false,
    promotionalPrice: false
  });

  const handleOptionChange = (option: keyof typeof includeOptions) => {
    setIncludeOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Generate Barcode</h1>
        <div className="text-sm text-muted-foreground mt-1">
          Products &gt; Generate Barcode
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Controls */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="product-search">Select Product</Label>
                  <Input
                    id="product-search"
                    placeholder="Scan / search products by name"
                  />
                </div>

                {/* Product Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Batch No.</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                        No data found
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* Include Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="name"
                      checked={includeOptions.name}
                      onCheckedChange={() => handleOptionChange('name')}
                    />
                    <Label htmlFor="name" className="text-sm">Name</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="code"
                      checked={includeOptions.code}
                      onCheckedChange={() => handleOptionChange('code')}
                    />
                    <Label htmlFor="code" className="text-sm">Code</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="import-by"
                      checked={includeOptions.importBy}
                      onCheckedChange={() => handleOptionChange('importBy')}
                    />
                    <Label htmlFor="import-by" className="text-sm">Import by Inventual</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="price"
                      checked={includeOptions.price}
                      onCheckedChange={() => handleOptionChange('price')}
                    />
                    <Label htmlFor="price" className="text-sm">Price</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="promotional-price"
                      checked={includeOptions.promotionalPrice}
                      onCheckedChange={() => handleOptionChange('promotionalPrice')}
                    />
                    <Label htmlFor="promotional-price" className="text-sm">Promotional Price</Label>
                  </div>
                </div>

                {/* Paper Size */}
                <div>
                  <Label htmlFor="paper-size">Paper Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a4">A4</SelectItem>
                      <SelectItem value="letter">Letter</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="bg-green-600 hover:bg-green-700 flex-1">
                    Update
                  </Button>
                  <Button className="flex-1">
                    Print
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Barcode Preview */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Barcode Preview</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {barcodeTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4 text-center bg-muted/20">
                    <div className="text-sm font-medium mb-1">{template.title}</div>
                    <div className="text-xs text-muted-foreground mb-2">{template.subtitle}</div>
                    <div className="font-mono text-lg tracking-widest mb-2">
                      {template.barcode}
                    </div>
                    <div className="text-xs">8541SLOV</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}