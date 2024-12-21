"use client";
import { PropsWithChildren } from "react";
import { DesktopSideBar } from "./descktop-side-bar/DesktopSideBar";
import { navData } from "./nav.data";
import { MobilSideBar } from "./mobil-side-bar/MobilSideBar";
export function SideBar({ children }: PropsWithChildren) {
  return (
    <>
      <DesktopSideBar data={navData}>
				{children}
			</DesktopSideBar>
      <MobilSideBar>{children}</MobilSideBar>
    </>
  );
}
