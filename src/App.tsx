import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddTransfer from "./pages/AddTransfer";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import Category from "./pages/Category";
import Brand from "./pages/Brand";
import GenerateBarcode from "./pages/GenerateBarcode";
import AddPurchase from "./pages/AddPurchase";
import AddUser from "./pages/AddUser";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/transfer/add" element={<Layout><AddTransfer /></Layout>} />
          <Route path="/products/add" element={<Layout><AddProduct /></Layout>} />
          <Route path="/products/list" element={<Layout><ProductList /></Layout>} />
          <Route path="/products/category" element={<Layout><Category /></Layout>} />
          <Route path="/products/brand" element={<Layout><Brand /></Layout>} />
          <Route path="/products/barcode" element={<Layout><GenerateBarcode /></Layout>} />
          <Route path="/trading/purchase" element={<Layout><AddPurchase /></Layout>} />
          <Route path="/users/add" element={<Layout><AddUser /></Layout>} />
          <Route path="/reports" element={<Layout><Reports /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
