import {
  Squares2X2Icon,
  MapIcon,
  MapPinIcon,
  Cog6ToothIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const adress = "/app";
export const navMenu = [
  { id: "dashboard", href: adress + "/dashboard", Icon: Squares2X2Icon },
  { id: "map", href: adress + "/map", Icon: MapIcon },
  { id: "bookmarks", href: adress + "/bookmarks", Icon: BookmarkIcon },
  { id: "localization", href: adress + "/localization", Icon: MapPinIcon },
  { id: "settings", href: adress + "/settings", Icon: Cog6ToothIcon },
];
