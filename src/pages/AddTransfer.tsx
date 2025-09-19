import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function AddTransfer() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add Transfer</h1>
        <div className="text-sm text-muted-foreground mt-1">
          Transfer &gt; Add Transfer
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "MM/dd/yyyy") : "MM/DD/YYYY"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="1500"
                  defaultValue="1500"
                />
              </div>

              <div>
                <Label htmlFor="from-warehouse">From Warehouse</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Warehouse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warehouse1">Warehouse 1</SelectItem>
                    <SelectItem value="warehouse2">Warehouse 2</SelectItem>
                    <SelectItem value="warehouse3">Warehouse 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="reference">Reference</Label>
                <Input
                  id="reference"
                  placeholder="S-32656458071"
                  defaultValue="S-32656458071"
                />
              </div>

              <div>
                <Label htmlFor="authorized-by">Authorized By</Label>
                <Input
                  id="authorized-by"
                  placeholder="Emily Johnson"
                  defaultValue="Emily Johnson"
                />
              </div>

              <div>
                <Label htmlFor="to-warehouse">To Warehouse</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Warehouse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="warehouse1">Warehouse 1</SelectItem>
                    <SelectItem value="warehouse2">Warehouse 2</SelectItem>
                    <SelectItem value="warehouse3">Warehouse 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="product-name">Product Name</Label>
                <Input
                  id="product-name"
                  placeholder="Denim Jeans"
                  defaultValue="Denim Jeans"
                />
              </div>

              <div>
                <Label htmlFor="reason">Reason</Label>
                <Input
                  id="reason"
                  placeholder="Stock Rebalancing"
                  defaultValue="Stock Rebalancing"
                />
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="transfer-note">Transfer Note:</Label>
            <Textarea
              id="transfer-note"
              placeholder="Type text..."
              className="mt-2"
              rows={4}
            />
          </div>

          <div className="flex justify-end mt-6">
            <Button size="lg" className="px-8">
              Create Transfer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}