"use client";

import React, { useState } from "react";
import MobileNavbarMenuButton from "./MobileNavbarMenuButton";
import MobileNavbarMenu from "./MobileNavbarMenu";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="">
      <MobileNavbarMenuButton toggleMenu={() => setIsMenuOpen((pv) => !pv)} />
      <MobileNavbarMenu isMenuOpen={isMenuOpen} />
    </div>
  );
}
