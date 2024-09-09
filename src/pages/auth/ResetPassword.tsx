import React from "react";
import Warejeans from "/assets/resetpassword.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z
  .object({
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
    confirmPassword: z.string().min(6, {
      message: "Confirm Password must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ResetPassword = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    console.log(data);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 h-screen">
      <div className="flex items-center justify-center sm:w-1/2">
        <img src={Warejeans} alt="" width={300} height={300} />
      </div>
      <div className="flex flex-col space-y-4 mx-4 py-4 sm:w-1/2">
        <div className=" space-y-4">
          <h1 className=" font-bold text-2xl">Reset Password</h1>
          <p className="">
            *Password must be 8+ characters, with at least one uppercase letter,
            one lowercase letter, one digit, and one special character.
          </p>
        </div>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center space-y-2">
                <Button type="submit" variant="welcome" className="w-full">
                  Sign In
                </Button>
                <p className="text-center">Create new account</p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
