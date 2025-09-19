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
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

export default function AddPurchase() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add Purchase</h1>
        <div className="text-sm text-muted-foreground mt-1">
          Trading &gt; Purchase &gt; Add Purchase
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          {/* Form Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <Label htmlFor="date">Date</Label>
              <div className="relative">
                <Input
                  id="date"
                  placeholder="MM/DD/YYYY"
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
            </div>

            <div>
              <Label htmlFor="warehouse">Select Warehouse</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Warehouse" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warehouse1">Main Warehouse</SelectItem>
                  <SelectItem value="warehouse2">Secondary Warehouse</SelectItem>
                  <SelectItem value="warehouse3">Storage Facility</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="supplier">Select Supplier</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplier1">ABC Suppliers</SelectItem>
                  <SelectItem value="supplier2">XYZ Trading</SelectItem>
                  <SelectItem value="supplier3">Global Imports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Selection */}
          <div className="mb-6">
            <Label htmlFor="product-search">Select Product</Label>
            <Input
              id="product-search"
              placeholder="Scan / search products by name"
              className="mt-1"
            />
          </div>

          {/* Product Table */}
          <div className="mb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Batch No.</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Tax</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>SubTotal</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={10} className="text-center text-muted-foreground py-8">
                    No data found
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Form Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <Label htmlFor="shipping">Shipping</Label>
              <Input
                id="shipping"
                type="number"
                placeholder="0"
                defaultValue="0"
              />
            </div>

            <div>
              <Label htmlFor="purchase-status">Purchase Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sale Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="received">Received</SelectItem>
                  <SelectItem value="partial">Partial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div></div>
          </div>

          {/* Purchase Note */}
          <div className="mb-6">
            <Label htmlFor="purchase-note">Purchase Note:</Label>
            <Textarea
              id="purchase-note"
              placeholder="Type text..."
              className="mt-1 min-h-[100px]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button size="lg" className="px-8">
              Add Purchase
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}