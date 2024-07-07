import { BellIcon } from "@heroicons/react/24/outline";

const NotificationBell = () => {
  return (
    <div className="bg-opacity-15 p-2 bg-black rounded-full active:bg-opacity-25 hover:bg-opacity-20 cursor-pointer transition-colors ease-in flex items-center gap-2.5">
      <BellIcon className="text-white size-6" />
    </div>
  );
};

export default NotificationBell;
