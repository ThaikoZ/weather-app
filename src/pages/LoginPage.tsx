import { CloudIcon } from "@heroicons/react/16/solid";
import users from "../data/users";
import { SignIn } from "../utils/User";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string({ message: "Text cannot be a number" })
    .email({ message: "This is not a valid email address" })
    .max(55, { message: "Given text is too long" })
    .min(1, { message: "Email cannot be empty" }),
  password: z
    .string()
    .max(55, { message: "Given text is too long" })
    .min(1, { message: "Password cannot be empty" }),
});

export default function Example() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignIn>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<SignIn> = (data) => {
    console.log(data);
    const user = users.find(
      (user) => user.email == data.email && user.password == data.password
    );

    if (user) {
      // Set Redux Authentication bool
      // Set User data in store
      // Navigate to dashboard
      console.log(user);
      navigate("/app/dashboard");
    } else {
      setError("email", { type: "manual", message: "User not found" });
      setError("password", { type: "manual", message: "User not found" });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1  justify-center px-4 sm:px-6 pt-6 sm:py-12 lg:px-8 ">
        <div className="w-fit bg-black p-14 rounded-xl bg-opacity-15 backdrop-blur-md text-white duration-500 transition-colors overflow-hidden">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex items-center justify-center gap-2.5 font-semibold p-1">
              <CloudIcon className="size-14" />
            </div>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight ">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email")}
                    type="text"
                    className={classNames(
                      "py-2.5 pe-4 h-full w-full backdrop-blur-md bg-[#E8F0FE] text-[0.95rem] shadow-md rounded-lg text-black placeholder:text-black placeholder:text-opacity-55 placeholder:font-light ps-4 "
                    )}
                    placeholder=""
                    maxLength={55}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 "
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    {...register("password")}
                    type="password"
                    className={classNames(
                      "py-2.5 pe-4 h-full w-full backdrop-blur-md bg-[#E8F0FE] text-[0.95rem] shadow-md rounded-lg text-black placeholder:text-white placeholder:text-opacity-55 placeholder:font-light ps-4 "
                    )}
                  />
                </div>
              </div>
              {errors && (
                <div className="text-rose-400 text-center">
                  {errors.email?.message || errors.password?.message}
                </div>
              )}
              <div className="pt-3">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-xl bg-black px-3 py-1.5 text-sm font-semibold leading-6  text-white shadow-sm bg-opacity-30 hover:bg-opacity-25"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm ">
              Not a member?{" "}
              <a href="#" className="font-semibold leading-6 hover:underline ">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
