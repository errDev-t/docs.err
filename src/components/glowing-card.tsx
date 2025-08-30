"use client";

import {GlowingEffect} from "@/components/ui/glowing-effect";
import {Star} from "lucide-react";
import React from "react";

interface GlowingCardProps {
  area?: string;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
}

const GlowingCard = ({
  area = "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  className = "",
  icon = <Star className="h-4 w-4 text-black dark:text-neutral-400" />,
  title = "Feature Title",
  description
}: GlowingCardProps) => {
  return (
    <div className={`${area} ${className}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              <h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
            </div>
            {description && <div className="space-y-3">
              <div className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingCard;
