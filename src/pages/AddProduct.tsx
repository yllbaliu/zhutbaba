import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Scan } from "lucide-react";

export default function AddProduct() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add Products</h1>
        <div className="text-sm text-muted-foreground mt-1">
          Products &gt; Add Products
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Form Fields - 3 columns */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* First Column */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input
                      id="product-name"
                      placeholder="HP Elitebook"
                      defaultValue="HP Elitebook"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="books">Books</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="barcode">Barcode</Label>
                    <div className="flex gap-2">
                      <Input
                        id="barcode"
                        placeholder="Scan Barcode"
                        className="flex-1"
                      />
                      <Button variant="outline" size="icon">
                        <Scan className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="expense">Expense</Label>
                    <Input
                      id="expense"
                      type="number"
                      placeholder="0"
                      defaultValue="0"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tax-method">Tax Method</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tax Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inclusive">Inclusive</SelectItem>
                        <SelectItem value="exclusive">Exclusive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="product-type">Product Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physical">Physical</SelectItem>
                        <SelectItem value="digital">Digital</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="product-code">Product Code</Label>
                    <Input
                      id="product-code"
                      placeholder="865220236"
                      defaultValue="865220236"
                    />
                  </div>

                  <div>
                    <Label htmlFor="product-unit">Product Unit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Kilogram" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">Kilogram</SelectItem>
                        <SelectItem value="piece">Piece</SelectItem>
                        <SelectItem value="liter">Liter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="unit-price">Unit Price</Label>
                    <Input
                      id="unit-price"
                      type="number"
                      placeholder="0"
                      defaultValue="0"
                    />
                  </div>

                  <div>
                    <Label htmlFor="discount">Discount</Label>
                    <div className="flex gap-2">
                      <Input
                        id="discount"
                        type="number"
                        placeholder="0"
                        defaultValue="0"
                        className="flex-1"
                      />
                      <div className="flex items-center px-3 bg-muted rounded-md">
                        %
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Column */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="brand">Brand</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hp">HP</SelectItem>
                        <SelectItem value="dell">Dell</SelectItem>
                        <SelectItem value="apple">Apple</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="product-price">Product Price</Label>
                    <Input
                      id="product-price"
                      type="number"
                      placeholder="0"
                      defaultValue="0"
                    />
                  </div>

                  <div>
                    <Label htmlFor="product-tax">Product Tax</Label>
                    <div className="flex gap-2">
                      <Input
                        id="product-tax"
                        type="number"
                        placeholder="0"
                        defaultValue="0"
                        className="flex-1"
                      />
                      <div className="flex items-center px-3 bg-muted rounded-md">
                        %
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="stock-alert">Stock Alert</Label>
                    <Input
                      id="stock-alert"
                      type="number"
                      placeholder="0"
                      defaultValue="0"
                    />
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="featured" />
                  <Label htmlFor="featured" className="text-sm">
                    Add Featured
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground ml-6">
                  This product will be displayed in POS
                </p>

                <div className="flex items-center space-x-2">
                  <Checkbox id="different-price" />
                  <Label htmlFor="different-price" className="text-sm">
                    Different price for different warehouse
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="date-expired" />
                  <Label htmlFor="date-expired" className="text-sm">
                    This product has date expired
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="promotional-sale" />
                  <Label htmlFor="promotional-sale" className="text-sm">
                    Add Promotional Sale
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="multi-variant" />
                  <Label htmlFor="multi-variant" className="text-sm">
                    This product has multi variant
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="imei-code" />
                  <Label htmlFor="imei-code" className="text-sm">
                    This product has IMEI Code
                  </Label>
                </div>
              </div>
            </div>

            {/* Image Upload - 1 column */}
            <div className="lg:col-span-1">
              <div className="text-right mb-2 text-sm text-muted-foreground">
                0 Item selected
              </div>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">Drop product image here</p>
                <p className="text-sm text-muted-foreground mb-4">Or</p>
                <Button variant="default">Browse File</Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Allowed JPEG, GIF & PNG format | Max 100 mb
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button size="lg" className="px-8">
              Create Product
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}