import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Download } from "lucide-react";

const reportData = [
  {
    date: "Jan 01, 2024",
    item: "Dell Laptop",
    warehouse: "Warehouse A",
    costs: "$1,250.00",
    unit: "2",
    saleQty: "1",
    amount: "$1,750.00"
  },
  {
    date: "Jan 02, 2024", 
    item: "HP Printer",
    warehouse: "Warehouse B",
    costs: "$350.00",
    unit: "1",
    saleQty: "1", 
    amount: "$450.00"
  },
  {
    date: "Jan 03, 2024",
    item: "Samsung Monitor",
    warehouse: "Warehouse A", 
    costs: "$280.00",
    unit: "3",
    saleQty: "2",
    amount: "$600.00"
  },
  {
    date: "Jan 04, 2024",
    item: "Apple MacBook",
    warehouse: "Warehouse C",
    costs: "$1,800.00", 
    unit: "1",
    saleQty: "1",
    amount: "$2,200.00"
  },
  {
    date: "Jan 05, 2024",
    item: "Logitech Mouse",
    warehouse: "Warehouse B",
    costs: "$25.00",
    unit: "10",
    saleQty: "8", 
    amount: "$320.00"
  }
];

export default function Reports() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = reportData.filter(item =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.warehouse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Sale Report</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Start Date:</label>
                <Input type="date" className="w-auto" />
              </div>
              
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">End Date:</label>
                <Input type="date" className="w-auto" />
              </div>

              <Select>
                <SelectTrigger className="w-auto min-w-[150px]">
                  <SelectValue placeholder="All Warehouses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Warehouses</SelectItem>
                  <SelectItem value="warehouse-a">Warehouse A</SelectItem>
                  <SelectItem value="warehouse-b">Warehouse B</SelectItem>
                  <SelectItem value="warehouse-c">Warehouse C</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-auto min-w-[200px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                Generate Report
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Warehouse</TableHead>
                  <TableHead>Costs</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>Sale Qty</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.date}</TableCell>
                    <TableCell>{row.item}</TableCell>
                    <TableCell>{row.warehouse}</TableCell>
                    <TableCell>{row.costs}</TableCell>
                    <TableCell>{row.unit}</TableCell>
                    <TableCell>{row.saleQty}</TableCell>
                    <TableCell className="text-right font-medium">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Summary Row */}
          <div className="mt-4 p-4 bg-muted rounded-md">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total:</span>
              <span className="text-lg font-bold">
                ${filteredData.reduce((sum, item) => {
                  const amount = parseFloat(item.amount.replace(/[$,]/g, ''));
                  return sum + amount;
                }, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}