import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Search, Filter, Download, Plus, Upload, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  { 
    id: 1, 
    image: "👕", 
    name: "Cotton T-shirt", 
    code: "875952214", 
    category: "Fashion", 
    subCategory: "Cloth", 
    brand: "Ayam Goreng", 
    unit: "Quantity (s)", 
    variant: "3", 
    stock: "725", 
    price: "$200" 
  },
  { 
    id: 2, 
    image: "🍋", 
    name: "Green Lemon", 
    code: "875952215", 
    category: "Food", 
    subCategory: "Food", 
    brand: "Organic Food", 
    unit: "Kilogram (kg)", 
    variant: "N/A", 
    stock: "200", 
    price: "$141" 
  },
  { 
    id: 3, 
    image: "👜", 
    name: "Ladies Bag", 
    code: "875952216", 
    category: "Fashion", 
    subCategory: "Bag", 
    brand: "Denim", 
    unit: "Quantity (s)", 
    variant: "5", 
    stock: "420", 
    price: "$550" 
  },
  { 
    id: 4, 
    image: "👖", 
    name: "Denim Bag", 
    code: "875952217", 
    category: "Fashion", 
    subCategory: "Bag", 
    brand: "Denim", 
    unit: "Quantity (s)", 
    variant: "Red", 
    stock: "150", 
    price: "$120" 
  },
  { 
    id: 5, 
    image: "👞", 
    name: "Shoe", 
    code: "875952218", 
    category: "Fashion", 
    subCategory: "Cloth", 
    brand: "Adidas", 
    unit: "Quantity (s)", 
    variant: "2", 
    stock: "310", 
    price: "$800" 
  },
  { 
    id: 6, 
    image: "🐟", 
    name: "Fish", 
    code: "875952219", 
    category: "Food", 
    subCategory: "Fish", 
    brand: "Organic Food", 
    unit: "Kilogram (kg)", 
    variant: "N/A", 
    stock: "300", 
    price: "$80" 
  },
  { 
    id: 7, 
    image: "💄", 
    name: "Ladies Lipstick", 
    code: "875952220", 
    category: "Fashion", 
    subCategory: "Cosmetics", 
    brand: "Denim", 
    unit: "Quantity (s)", 
    variant: "4", 
    stock: "600", 
    price: "$350" 
  },
  { 
    id: 8, 
    image: "🍎", 
    name: "Red Fruit", 
    code: "875952221", 
    category: "Food", 
    subCategory: "Food", 
    brand: "Organic Food", 
    unit: "Kilogram (kg)", 
    variant: "N/A", 
    stock: "200", 
    price: "$141" 
  },
  { 
    id: 9, 
    image: "💻", 
    name: "Laptop", 
    code: "875952222", 
    category: "Accessories", 
    subCategory: "Gadget", 
    brand: "Dell", 
    unit: "Quantity (s)", 
    variant: "N/A", 
    stock: "200", 
    price: "$600" 
  },
  { 
    id: 10, 
    image: "📺", 
    name: "Smart LED TV", 
    code: "875952223", 
    category: "Accessories", 
    subCategory: "Gadget", 
    brand: "Dell", 
    unit: "Quantity (s)", 
    variant: "N/A", 
    stock: "180", 
    price: "$150" 
  },
];

export default function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const toggleProduct = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleAll = () => {
    setSelectedProducts(
      selectedProducts.length === products.length 
        ? [] 
        : products.map(product => product.id)
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Product List</h1>
        <div className="text-sm text-muted-foreground mt-1">
          Products &gt; Product List
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          {/* Action Buttons */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Import Product
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search here"
                className="pl-10 w-64"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="text-orange-600 border-orange-600">
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="text-green-600 border-green-600">
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox 
                    checked={selectedProducts.length === products.length}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Sub-Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Variant</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox 
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={() => toggleProduct(product.id)}
                    />
                  </TableCell>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-lg">
                      {product.image}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.code}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.subCategory}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.unit}</TableCell>
                  <TableCell>{product.variant}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Action <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View</DropdownMenuItem>
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
              1 - 10 of 12
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}