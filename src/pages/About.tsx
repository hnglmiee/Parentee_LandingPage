import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Chăm sóc đặt lên hàng đầu",
      description:
        "Chúng tôi đặt cha mẹ và trẻ em vào trung tâm của mọi việc chúng tôi làm",
    },
    {
      icon: Users,
      title: "Cộng đồng",
      description:
        "Xây dựng một cộng đồng hỗ trợ cho tất cả các bậc cha mẹ",
    },
    {
      icon: Target,
      title: "Công nghệ tiên tiến",
      description:
        "Sử dụng AI tiên tiến để đơn giản hóa việc nuôi dạy con cái",
    },
    {
      icon: Award,
      title: "Xuất sắc không ngừng",
      description:
        "Cam kết mang lại trải nghiệm tốt nhất có thể",
    },
  ];

  const team = [
    {
      name: "Bùi Phạm Hoàng Lam",
      role: "Front-end - Back-end Developer",
      img: "/team1.png",
    },
    {
      name: "Nguyễn Đại Thịnh",
      role: "Front-end - Back-end Developer",
      img: "/team2.png",
    },
    {
      name: "Trần Việt Cường",
      role: "Front-end - Back-end Developer",
      img: "/team3.png",
    },
    {
      name: "Phạm Minh Tuấn",
      role: "Kỹ sư AI & Machine Learning",
      img: "/team4.png",
    },
    {
      name: "Phạm Đức Duy",
      role: "Kỹ sư AI & Machine Learning",
      img: "/team4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-accent/5">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Giới thiệu */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Về Parentee
            </h1>
            <p className="text-xl text-muted-foreground">
              Trao quyền cho cha mẹ bằng công nghệ thông minh để nuôi dạy con cái trong thế kỷ 21
            </p>
          </div>

          {/* Câu chuyện */}
          <Card className="mb-12 border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">Câu chuyện của chúng tôi</h2>
              <p className="text-lg text-foreground/80 mb-4">
                Parentee ra đời từ một ý tưởng đơn giản: nuôi dạy con cái là một công việc tuyệt vời nhưng đầy thử thách,
                và công nghệ sẽ giúp việc đó trở nên dễ dàng hơn, chứ không phải khó khăn hơn.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Đội ngũ phụ huynh, nhà phát triển và chuyên gia chăm sóc trẻ em của chúng tôi đã cùng nhau tạo ra một ứng dụng thực sự thấu hiểu nhu cầu của các gia đình hiện đại. Chúng tôi kết hợp trí tuệ nhân tạo, theo dõi sức khỏe và dịch vụ khẩn cấp thành một nền tảng trực quan.
              </p>
              <p className="text-lg text-foreground/80">
                Ngày nay, Parentee giúp gia đình theo dõi sự phát triển của con mình,
                nhận được câu trả lời tức thì cho các câu hỏi về nuôi dạy con cái, cập nhật thông tin về điều kiện thời tiết,
                và tiếp cận dịch vụ hỗ trợ khẩn cấp khi họ cần nhất.
              </p>
            </CardContent>
          </Card>

          {/* Giá trị cốt lõi */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Giá trị cốt lõi của chúng tôi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ảnh ứng dụng */}
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center items-center mb-8 -mx-2">
              {["/phone_category.png", "/phone_chatbot.png", "/phone_home.png", "/phone_login.png"].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Hình ${i + 1}`}
                    className="mx-2 w-32 sm:w-36 md:w-40 lg:w-44 object-contain transition-transform duration-300 hover:scale-105"
                  />
                )
              )}
            </div>

            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Tham gia cùng chúng tôi
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Chúng tôi không ngừng phát triển và cải thiện Parentee dựa trên phản hồi từ cộng đồng.
              Hãy cùng chúng tôi giúp việc nuôi dạy con cái trở nên dễ dàng hơn cho các gia đình trên khắp thế giới.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
