import { Link } from "react-router-dom";
import { Baby, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Parentee
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Người bạn đồng hành đáng tin cậy của cha mẹ thời hiện đại. Tận hưởng từng khoảnh khắc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Phím tắt</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Bảng giá
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Tính năng</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI Chat Bot</li>
              <li>Theo dõi em bé</li>
              <li>Dự báo thời tiết</li>
              <li>Cuộc gọi khẩn cấp</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                7Đ. D1, Long Thạnh Mỹ, Thủ Đức, Thành phố Hồ Chí Minh
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:0379.532.073" className="hover:text-primary transition-colors">
                  0379.532.073
                </a>
              </li>

              {/* Email
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:support@parentee.vn" className="hover:text-primary transition-colors">
                  support@parentee.vn
                </a>
              </li> */}

              {/* Facebook */}
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <a
                  href="https://www.facebook.com/profile.php?id=61581627239825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center">
                    <Facebook className="w-3 h-3 text-white" />
                  </div>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Parentee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
