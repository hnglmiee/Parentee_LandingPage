import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full from-primary to-accent flex items-center justify-center">
              {/* <Baby className="w-6 h-6 text-primary-foreground" /> */}
              <img src="./logo.png" alt="Parentee Logo" className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Parentee
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              Về chúng tôi
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
              Bảng giá
            </Link>
            {/* <Link to="/feature" className="text-foreground hover:text-primary transition-colors">
              Tính năng
            </Link> */}
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Bắt đầu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
