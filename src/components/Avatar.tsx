import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <div className="h-full dropdown dropdown-end">
      <div className="h-full avatar cursor-pointer" tabIndex={0} role="button">
        <div className="h-full rounded-full">
          <img src="https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721174400&semt=ais_user" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-1"
      >
        <li>
          <Link to="/auth/login">Sign Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
