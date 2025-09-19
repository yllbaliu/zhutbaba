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
import { Upload, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { 
    id: 1, 
    name: "Fish & Meat", 
    subCategory: "Deshi Fish", 
    products: "Katla, Roui fish, Beef, Deshi chicken, Lolita fish, Breads, Cereals, Rice, Pasta, Noodles"
  },
  { 
    id: 2, 
    name: "Vegetables", 
    subCategory: "Root Vegetables", 
    products: "Potatoes, Carrots, Beets, Turnips, Radishes, Rutabagas, Onions, Garlic, Ginger, Sweet Potatoes"
  },
  { 
    id: 3, 
    name: "Fruits", 
    subCategory: "Citrus Fruits", 
    products: "Oranges, Lemons, Limes, Grapefruits, Tangerines, Mandarins, Pomelos, Kumquats, Clementines, Satsumas"
  },
  { 
    id: 4, 
    name: "Dairy Products", 
    subCategory: "Cheese", 
    products: "Cheddar, Mozzarella, Parmesan, Gouda, Brie, Feta, Swiss, Blue Cheese, Ricotta, Havarti"
  },
  { 
    id: 5, 
    name: "Beverages", 
    subCategory: "Tea", 
    products: "Black Tea, Green Tea, Herbal Tea, Oolong Tea, White Tea, Chai, Darjeeling Tea, Assam Tea, Earl Grey, Jasmine Tea"
  },
  { 
    id: 6, 
    name: "Grains", 
    subCategory: "Whole Grains", 
    products: "Quinoa, Barley, Farro, Bulgur, Brown Rice, Wild Rice, Oats, Millet, Spelt, Amaranth"
  },
  { 
    id: 7, 
    name: "Condiments", 
    subCategory: "Sauces", 
    products: "Ketchup, Mustard, Mayonnaise, BBQ Sauce, Soy Sauce, Hot Sauce, Worcestershire Sauce, Teriyaki Sauce, Tartar Sauce, Salsa"
  },
  { 
    id: 8, 
    name: "Snacks", 
    subCategory: "Nuts & Seeds", 
    products: "Almonds, Peanuts, Cashews, Walnuts, Pecans, Pistachios, Macadamia Nuts, Sunflower Seeds, Pumpkin Seeds, Chia Seeds"
  },
  { 
    id: 9, 
    name: "Bakery", 
    subCategory: "Pastries", 
    products: "Croissants, Danish Pastries, Scones, Cinnamon Rolls, Éclairs, Muffins, Bagels, Donuts, Biscuits, Turnovers"
  },
  { 
    id: 10, 
    name: "Meat & Poultry", 
    subCategory: "Poultry", 
    products: "Chicken Breasts, Chicken Thighs, Chicken Wings, Whole Chicken, Turkey Breast, Turkey Legs, Duck Breast, Duck Legs, Quail, Cornish Hens"
  },
];

export default function Category() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleAll = () => {
    setSelectedCategories(
      selectedCategories.length === categories.length 
        ? [] 
        : categories.map(category => category.id)
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Category</h1>
        <div className="text-sm text-muted-foreground mt-1">
          Products &gt; Category
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Category Form */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm font-medium mb-1">Upload Category Image</p>
                </div>

                <div>
                  <Label htmlFor="sub-category">Sub-Category</Label>
                  <Input
                    id="sub-category"
                    placeholder="HP Elitebook"
                    defaultValue="HP Elitebook"
                  />
                </div>

                <div>
                  <Label htmlFor="main-category">Main Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="food">Food & Beverages</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  Create Category
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category List */}
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
                        checked={selectedCategories.length === categories.length}
                        onCheckedChange={toggleAll}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Sub-Category</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>
                        <Checkbox 
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{category.name}</TableCell>
                      <TableCell>{category.subCategory}</TableCell>
                      <TableCell className="max-w-md">
                        <div className="text-sm text-muted-foreground truncate">
                          {category.products}
                        </div>
                      </TableCell>
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
                  1 - 10 of 11
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}