import { cn } from "@/lib/utils";
import NavItems from "./NavItems";

export default function MobileNavbarMenu({
  isMenuOpen,
}: {
  isMenuOpen: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute shadow-lg py-10 -bottom-48 w-full left-0 right-0",
        {
          hidden: !isMenuOpen,
          block: isMenuOpen,
        }
      )}
    >
      <NavItems mode="mobile" />
    </div>
  );
}
