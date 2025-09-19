import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Users, 
  DollarSign, 
  ShoppingCart 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { name: "Jan", value1: 400, value2: 240 },
  { name: "Feb", value1: 300, value2: 139 },
  { name: "Mar", value1: 200, value2: 280 },
  { name: "Apr", value1: 278, value2: 390 },
  { name: "May", value1: 189, value2: 480 },
  { name: "Jun", value1: 239, value2: 380 },
  { name: "Jul", value1: 349, value2: 430 },
];

const barData = [
  { name: "Jan", orange: 400, blue: 240 },
  { name: "Feb", orange: 300, blue: 139 },
  { name: "Mar", orange: 200, blue: 280 },
  { name: "Apr", orange: 278, blue: 390 },
  { name: "May", orange: 189, blue: 480 },
  { name: "Jun", orange: 239, blue: 380 },
  { name: "Jul", orange: 349, blue: 430 },
];

const pieData = [
  { name: "Electronics", value: 35, color: "#FF6B6B" },
  { name: "Clothing", value: 25, color: "#4ECDC4" },
  { name: "Books", value: 20, color: "#45B7D1" },
  { name: "Sports", value: 15, color: "#96CEB4" },
  { name: "Others", value: 5, color: "#FFEAA7" },
];

const stats = [
  {
    title: "Total Sales",
    value: "$67,300",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Total Products",
    value: "1,247",
    change: "-2.1%",
    trend: "down",
    icon: Package,
    color: "text-purple-600",
  },
  {
    title: "Total Users",
    value: "5,847",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    color: "text-orange-600",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                    <span
                      className={`text-sm ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="value1" 
                  stroke="#4ECDC4" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="value2" 
                  stroke="#45B7D1" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Product Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="orange" fill="#FF9500" />
              <Bar dataKey="blue" fill="#4F7DF3" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "#12547", customer: "John Doe", amount: "$125.00", status: "Completed" },
                { id: "#12548", customer: "Jane Smith", amount: "$89.50", status: "Pending" },
                { id: "#12549", customer: "Mike Johnson", amount: "$234.00", status: "Processing" },
                { id: "#12550", customer: "Sarah Wilson", amount: "$67.25", status: "Completed" },
              ].map((order, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Electronics", stock: 85, total: 100 },
                { name: "Clothing", stock: 62, total: 80 },
                { name: "Books", stock: 45, total: 60 },
                { name: "Sports", stock: 28, total: 40 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>{item.stock}/{item.total}</span>
                  </div>
                  <Progress value={(item.stock / item.total) * 100} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}