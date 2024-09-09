import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { openCloseEyesPassword } from "@/utils/helpers/OpenCloseEyesPassword";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z
  .object({
    contact: z
      .string()
      .refine(
        (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
          /^\+?\d{10,15}$/.test(value),
        {
          message: "Please enter a valid phone number or email!",
        }
      ),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .refine(
        (value) =>
          /[a-z]/.test(value) && // at least one lowercase letter
          /[0-9]/.test(value) && // at least one digit
          /[!@#$%^&*(),.?":{}|<>]/.test(value), // at least one special character
        {
          message:
            "Password must contain at least one digit, one lowercase letter, and one special character.",
        }
      ),
    confirmPassword: z.string().min(1, {
      message: "Password confirmation is required!",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match!",
  });

const RegisterForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact: "",
      password: "",
    },
  });

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "val");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:flex lg:flex-col lg:justify-between h-[75%]"
      >
        <div className="grid grid-cols-1 gap-5">
          {/* EMail or phone */}
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email or Phone"
                    className="bg-gray-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="bg-gray-100"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...field}
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {openCloseEyesPassword(showPassword)}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="bg-gray-100"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Your Password"
                      {...field}
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {openCloseEyesPassword(showConfirmPassword)}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <Button type="submit">Sign Up</Button>
          <p
            className="text-center font-bold text-purple-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </p>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
