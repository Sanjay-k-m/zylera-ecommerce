import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { Facebook, Github, Slack, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "facebook",
    href: "https://www.facebook.com",
    icon: <Facebook className="size-5" />,
  },
  {
    title: "github",
    href: "https://www.github.com",
    icon: <Github className="size-5" />,
  },
  {
    title: "slack",
    href: "https://app.slack.com/client/TNGRKL435",
    icon: <Slack className="size-5" />,
  },
  {
    title: "youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="size-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-xl  hover:text-white hover:border-white hoverEffect ",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-custom-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
