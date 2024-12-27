"use client";
import SliderOftaGlass from "@/components/SliderOftaGlass";
import SliderSunGlass from "../components/SliderSunGlass";
import SliderContactLens from "@/components/SliderContactLens";
import MainSlider from "@/components/MainSlider";

export default function Home() {
  return (
    <div className="pt-16">
      <MainSlider />
      <SliderSunGlass />
      <SliderOftaGlass />
      <SliderContactLens />
    </div>
  );
}
