import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function NavbarContainer({ children }: { children: ReactNode }) {
  return (
    <header className={cn("shadow-md relative")}>
      <div className="">
        <MaxWidthWrapper>
          <div className="flex items-center h-24">{children}</div>
        </MaxWidthWrapper>
      </div>
    </header>
  );
}
