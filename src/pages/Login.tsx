import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { EyeOff, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("......");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="flex flex-col items-center space-y-8">
            <Logo />
            
            <form onSubmit={handleLogin} className="w-full space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium">
                  Username
                </Label>
                <div className="relative">
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    placeholder="Admin"
                  />
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                    placeholder="••••••"
                  />
                  <EyeOff className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="text-left">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <Button type="submit" className="w-full">
                Log in
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Have not an account?{" "}
                <button
                  type="button"
                  className="text-primary hover:underline"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}