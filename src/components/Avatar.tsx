const Avatar = () => {
  return (
    <div className="h-full dropdown dropdown-end">
      <div className="h-full avatar cursor-pointer" tabIndex={0} role="button">
        <div className="h-full rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-1"
      >
        <li>
          <a>Sign Out</a>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
