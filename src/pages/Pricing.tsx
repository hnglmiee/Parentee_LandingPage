"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Lock, Mail } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  // 🔹 Dữ liệu các gói (gói cơ bản + gói premium)
  const plans = [
    {
      name: "Miễn phí",
      price: "0 VNĐ",
      period: "vĩnh viễn",
      description: "Hoàn hảo cho các bậc cha mẹ mới bắt đầu",
      color: "from-secondary to-primary",
      features: [
        { name: "Theo dõi em bé cơ bản", detail: "Ghi lại bữa ăn, giấc ngủ, thay tã và cân nặng của bé một cách dễ dàng." },
        { name: "Giới hạn AI chat hỗ trợ", detail: "Trò chuyện với trợ lý AI." },
        { name: "Dự báo thời tiết", detail: "Xem thời tiết theo vị trí để lập kế hoạch hoạt động ngoài trời." },
        { name: "Tính năng gọi khẩn cấp SOS", detail: "Liên hệ nhanh tới bệnh viện gần nhất trong tình huống khẩn cấp." },
      ],
    },
    {
      name: "Premium",
      price: "89.000 VNĐ",
      period: "tháng",
      description: "Dành cho các bậc phụ huynh muốn được chăm sóc toàn diện",
      color: "from-primary to-accent",
      popular: true,
      features: [
        { name: "Theo dõi nâng cao", detail: "Bao gồm đồ thị tăng trưởng, phân tích xu hướng và thống kê chi tiết." },
        { name: "AI chat không giới hạn", detail: "Trợ lý AI thông minh hỗ trợ 24/7 về chăm sóc trẻ, sức khỏe và dinh dưỡng." },
        { name: "Biểu đồ phát triển", detail: "Theo dõi các mốc phát triển và tiến bộ của bé qua từng giai đoạn." },
        { name: "Phân tích giấc ngủ", detail: "Phân tích giấc ngủ giúp cha mẹ hiểu rõ hơn về thói quen của trẻ." },
        { name: "Tư vấn dinh dưỡng", detail: "Gợi ý thực đơn cân bằng phù hợp độ tuổi và thể trạng của bé." },
      ],
    },
  ];

  const handlePayment = (plan) => {
    setSelectedPlan(plan);
    setOpen(false);
    setLoginOpen(true);
  };

  // Xử lý đăng nhập bằng email/password
  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch("https://parenteebe-production.up.railway.app/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.data);
        await redirectToPayOS(selectedPlan);
      } else {
        alert(data.message || "Đăng nhập thất bại!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

   // Xử lý đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch("https://parenteebe-production.up.railway.app/api/v1/auth/signin-google");
      const data = await response.json();
      
      if (data.url) {
        localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Không thể kết nối với Google. Vui lòng thử lại!");
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch("https://your-api.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        setIsLogin(true);
        setPassword("");
      } else {
        alert(data.message || "Đăng ký thất bại!");
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };


  // Redirect đến trang thanh toán PayOS
  const redirectToPayOS = async (plan) => {
    try {
      const token = localStorage.getItem("accessToken");
      
      // Xây dựng URL với query parameters
      const productId = 'e713d073-be27-4d9b-8cfd-f663929ceb6d';
      const priceId = '78dff7a0-f03e-4065-84b5-6a58a4c7c596';
      const userId = '8df7abb8-c27f-4076-8054-6f676f93a098';
      
      const url = `https://parenteebe-production.up.railway.app/api/v1/payments/create-link?productId=${productId}&priceId=${priceId}&userId=${userId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (result.is_success && result.data && result.data.checkoutUrl) {
        // Redirect đến trang thanh toán PayOS
        window.location.href = result.data.checkoutUrl;
      } else {
        alert(result.message || "Không thể tạo link thanh toán. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Có lỗi xảy ra khi tạo thanh toán!");
    }
  };

  const handleOpenDialog = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  // Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-secondary/5">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight pb-3">
            Chọn gói của bạn
          </h1>
          <p className="text-xl text-muted-foreground">
            Bắt đầu miễn phí, nâng cấp khi bạn sẵn sàng
          </p>
        </motion.div>

        {/* Gói */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                className={`relative border-2 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ${plan.popular ? "border-primary shadow-xl" : "border-border"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground/80">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={() => handleOpenDialog(plan)}
                    className={`w-full ${plan.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      : ""
                      }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "0 VNĐ"
                      ? "Xem chi tiết"
                      : "Xem chi tiết"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ghi chú cuối */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Tất cả các gói đều bao gồm bảo đảm hoàn tiền trong vòng 14 ngày
          </p>
        </motion.div>
      </main>

      <Footer />

      {/* Dialog chi tiết */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl max-h-[85vh] flex flex-col">
          {selectedPlan && (
            <>
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {selectedPlan.name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedPlan.description}
                </DialogDescription>
              </DialogHeader>

              {/* Nội dung có scroll */}
              <div className="flex-1 overflow-y-auto pr-2 mt-4 space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  Giá:{" "}
                  <span className="text-primary">{selectedPlan.price}</span> /{" "}
                  {selectedPlan.period}
                </p>

                <div className="space-y-3">
                  {selectedPlan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="border rounded-xl p-4 hover:bg-accent/10 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`w-4 h-4 rounded-full bg-gradient-to-br ${selectedPlan.color} flex items-center justify-center`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-medium">{feature.name}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <DialogFooter>
                <Button
                  onClick={() => handlePayment(selectedPlan)}
                  className={`w-full ${selectedPlan.popular
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    : ""
                    }`}
                >
                  {selectedPlan.price === "0 VNĐ" ? "Bắt đầu ngay" : "Thanh toán ngay"}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
       {/* Dialog đăng nhập */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="max-w-md">
          {selectedPlan && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {isLogin ? "Đăng nhập" : "Đăng ký tài khoản"}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {isLogin ? "Đăng nhập để tiếp tục thanh toán" : "Tạo tài khoản mới để bắt đầu"}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                {/* Google Login Button */}
                <Button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-semibold">Tiếp tục với Google</span>
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Hoặc</span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <div className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <Button
                    onClick={isLogin ? handleEmailLogin : handleRegister}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    {isLoading ? "Đang xử lý..." : (isLogin ? "Đăng nhập" : "Đăng ký")}
                  </Button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setPassword("");
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    {/* {isLogin ? "Chưa có tài khoản? Đăng ký ngay" : "Đã có tài khoản? Đăng nhập"} */}
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Pricing;
