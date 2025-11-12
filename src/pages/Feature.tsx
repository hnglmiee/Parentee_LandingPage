import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Baby, CloudSun, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Feature = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Chat Bot",
      description:
        "Nhận câu trả lời ngay lập tức cho mọi câu hỏi về nuôi dạy con cái của bạn, hỗ trợ 24/7 từ trợ lý thông minh của chúng tôi.",
      img: "/phone_chatbot.png",
      color: "from-primary to-accent",
    },
    {
      icon: Baby,
      title: "Tracker theo dõi",
      description:
        "Theo dõi việc ăn uống, giấc ngủ, thay tã, các mốc phát triển, sức khỏe và hành vi của bé để giúp cha mẹ đưa ra quyết định chính xác hơn.",
      img: "/phone_category.png",
      color: "from-accent to-secondary",
    },
    {
      icon: CloudSun,
      title: "Dự báo thời tiết",
      description:
        "Lên kế hoạch cho một ngày với thông tin thời tiết chính xác, giúp cha mẹ biết khi nào an toàn để đưa bé ra ngoài và tránh thời tiết xấu.",
      img: "/phone_login.png",
      color: "from-secondary to-primary",
    },
    {
      icon: Phone,
      title: "Cuộc gọi khẩn cấp",
      description:
        "Truy cập ngay vào dịch vụ khẩn cấp chỉ bằng một cú chạm. An toàn của bé là ưu tiên hàng đầu của chúng tôi.",
      img: "/phone_home.png",
      color: "from-primary to-secondary",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-accent/5">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-4 pt-32 pb-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight pb-2">
          Các tính năng nổi bật
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tất cả các tính năng mạnh mẽ được thiết kế để giúp cha mẹ nuôi dạy con cái một cách thông minh và dễ dàng.
        </p>
      </motion.section>

      {/* Features Two-Column Layout */}
      <motion.section
        className="container mx-auto px-4 py-20 flex flex-col gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-60 h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl p-6 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <Footer />
    </div>
  );
};

export default Feature;
