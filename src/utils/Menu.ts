import {
  Squares2X2Icon,
  MapIcon,
  MapPinIcon,
  Cog6ToothIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export const navMenu = [
  { id: "dashboard", href: "/dashboard", Icon: Squares2X2Icon },
  { id: "map", href: "/map", Icon: MapIcon },
  { id: "bookmarks", href: "/bookmarks", Icon: BookmarkIcon },
  { id: "localization", href: "/localization", Icon: MapPinIcon },
  { id: "settings", href: "/settings", Icon: Cog6ToothIcon },
];
