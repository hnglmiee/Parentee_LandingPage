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
import { Check } from "lucide-react";
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

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

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
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Pricing;
