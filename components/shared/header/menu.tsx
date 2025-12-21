import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { SvgIcon } from "@progress/kendo-react-common";
import { cartIcon, userIcon } from "@progress/kendo-svg-icons";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Link href="/cart">
          <SvgIcon icon={cartIcon} size="xxlarge" /> Cart
        </Link>
        <Link href="/sign-in">
          <SvgIcon icon={userIcon} size="xxlarge" /> Sign In
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
