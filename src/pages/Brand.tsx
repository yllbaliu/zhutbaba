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
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const brands = [
  { id: 1, image: "🔵", name: "Dell" },
  { id: 2, image: "🔷", name: "Realive" },
  { id: 3, image: "🔺", name: "Autodesk" },
  { id: 4, image: "🔹", name: "Samsung" },
  { id: 5, image: "🟠", name: "Redmi" },
  { id: 6, image: "🔶", name: "Ayam Goreng" },
  { id: 7, image: "⬛", name: "Amazon" },
  { id: 8, image: "⚫", name: "Adidas" },
  { id: 9, image: "🟡", name: "Realme" },
  { id: 10, image: "🍎", name: "Apple" },
];

export default function Brand() {
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);

  const toggleBrand = (brandId: number) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  const toggleAll = () => {
    setSelectedBrands(
      selectedBrands.length === brands.length 
        ? [] 
        : brands.map(brand => brand.id)
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Brand</h1>
        <div className="text-sm text-muted-foreground mt-1">
          Products &gt; Brand
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Brand Form */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm font-medium mb-1">Upload Brand Image</p>
                </div>

                <div>
                  <Label htmlFor="brand-name">Brand Name</Label>
                  <Input
                    id="brand-name"
                    placeholder="HP"
                    defaultValue="HP"
                  />
                </div>

                <Button className="w-full">
                  Create Brand
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Brand List */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-muted-foreground">
                  0 Item selected
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox 
                        checked={selectedBrands.length === brands.length}
                        onCheckedChange={toggleAll}
                      />
                    </TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Brand Name</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {brands.map((brand) => (
                    <TableRow key={brand.id}>
                      <TableCell>
                        <Checkbox 
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => toggleBrand(brand.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-lg">
                          {brand.image}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{brand.name}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              Action <ChevronDown className="ml-1 h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Items per page:</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                </div>
                <div className="text-sm text-muted-foreground">
                  1 - 10 of 10
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}