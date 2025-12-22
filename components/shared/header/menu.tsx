import { Link } from "next-view-transitions";
import ModeToggle from "./mode-toggle";
import UserButton from "./user-button";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Sheet, ShoppingCart } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
    </div>
  );
};

export default Menu;
