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
import { EyeOff } from "lucide-react";

export default function AddUser() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add User</h1>
        <div className="text-sm text-muted-foreground mt-1">
          User Management &gt; Add User
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="supplier-name">Supplier Name</Label>
                <Input
                  id="supplier-name"
                  placeholder="Joseph Tyler"
                  defaultValue="Joseph Tyler"
                />
              </div>

              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="profile-image">Profile Image</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                  <span className="text-sm text-muted-foreground self-center">
                    No file chosen
                  </span>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="00 000 000 000"
                  defaultValue="00 000 000 000"
                />
              </div>

              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="tylor billar"
                  defaultValue="tylor billar"
                />
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joseph@example.com"
                  defaultValue="joseph@example.com"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pr-10"
                  />
                  <EyeOff className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button size="lg" className="px-8">
              Create User
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}