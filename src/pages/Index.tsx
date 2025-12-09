import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Baby, CloudSun, Phone, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Chat Bot",
      description:
        "Nhận câu trả lời ngay lập tức cho mọi câu hỏi về nuôi dạy con cái của bạn, hỗ trợ 24/7 từ trợ lý thông minh của chúng tôi",
      color: "from-primary to-accent",
    },
    {
      icon: Baby,
      title: "Tracker theo dõi",
      description: "Theo dõi việc ăn uống, giấc ngủ, thay tã và các mốc phát triển của bé, đồng thời cung cấp thống kê trực quan.",
      color: "from-accent to-secondary",
    },
    {
      icon: CloudSun,
      title: "Dự báo thời tiết",
      description:
        "Lên kế hoạch cho một ngày với thông tin thời tiết chính xác. Biết khi nào an toàn để đưa bé ra ngoài",
      color: "from-secondary to-primary",
    },
    {
      icon: Phone,
      title: "Cuộc gọi khẩn cấp",
      description:
        "Truy cập ngay vào dịch vụ khẩn cấp chỉ bằng một cú chạm. An toàn của bé là ưu tiên hàng đầu của chúng tôi",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🌈 Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-primary/10 to-accent/10 backdrop-blur-[2px]" />

      <Navigation />

      {/* 🌟 Hero Section */}
      <section className="relative container mx-auto px-4 pt-32 pb-20 overflow-hidden rounded-3xl">
        {/* Hình nền riêng cho Hero */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/family.jpg')" }}
        ></div>

        {/* Overlay làm mờ / đổ màu */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-primary/10 to-accent/10 backdrop-blur-[2px]" />

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trợ lý nuôi dạy con được hỗ trợ bởi AI
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Nuôi dạy con cái trở nên đơn giản với Parentee
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Người bạn đồng hành toàn diện của bạn để theo dõi, học hỏi và giữ an toàn cho bé.
            Công nghệ thông minh phát triển cùng gia đình bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden text-lg text-white px-6 py-3 rounded-lg font-semibold
  bg-gradient-to-r from-primary to-accent 
  before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent before:to-primary
  before:-translate-x-full before:transition-transform before:duration-500
  hover:before:translate-x-0
  shadow-lg"
            >
              <a href="https://drive.google.com/uc?export=download&id=1KAWYZsORHkF8D32YQyokMwt458FGJ46l">
                <span className="relative flex items-center justify-center">
                  Bắt đầu dùng thử miễn phí
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </a>
            </Button>

          </div>
        </motion.div>
      </section>

      {/* ⚙️ Features Section */}
      <section className="container mx-auto px-4 py-20 pb-0">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent leading-tight pb-2">
            Mọi thứ bạn cần trong một ứng dụng
          </h2>
          <p className="text-xl text-muted-foreground">
            Các tính năng mạnh mẽ được thiết kế dành cho các bậc cha mẹ hiện đại
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="container mx-auto px-4 py-20 pt-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch overflow-hidden rounded-3xl">
          {/* 🖼️ Hình ảnh bên trái */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[600px]">
            <img
              src="/phone_home.png"
              alt="App chính"
              className="w-1/3 md:w-1/4 object-contain drop-shadow-xl -rotate-12"
            />
            <img
              src="/phone_login.png"
              alt="Màn hình phụ"
              className="w-1/3 md:w-1/4 object-contain absolute left-1/2 translate-x-20 translate-y-12 rotate-6 drop-shadow-2xl"
            />
          </div>

          {/* 📝 Nội dung bên phải */}
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bạn đã sẵn sàng thay đổi hành trình làm cha mẹ của mình chưa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tham gia cùng hàng ngàn phụ huynh hạnh phúc sử dụng Parentee mỗi ngày.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg"
            >
              <a href="https://drive.google.com/uc?export=download&id=1KAWYZsORHkF8D32YQyokMwt458FGJ46l">
                Bắt đầu miễn phí
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
