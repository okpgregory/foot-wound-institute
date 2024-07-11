"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavItems({className, mode = "desktop", mobileHidden}:{className?:string; mode?: "mobile" | "desktop";
  mobileHidden?: boolean;}) {
  const pathname = usePathname();
    
  return (
    <nav className={cn("lg:block lg:self-stretch", className, {
      "hidden": mobileHidden,
      "h-full": mode === "mobile",
    })}
    aria-label="Main">
      <ul className={cn("flex h-full items-center", {
          "gap-4": mode === "desktop",
          "flex-col justify-center gap-8": mode === "mobile",
        })}>
        {siteConfig.navItems.map(({label, href}) => (
          <li key={label}>
            <Link href={href} className={cn(
                buttonVariants({
                  variant: "ghost",
                  className: "text-primary",
                }),
                {
                  "gap-4": mode === "desktop",
                  "text-lg": mode === "mobile",
                }
              )}
              aria-current={pathname.includes(href) ? "page" : undefined}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
