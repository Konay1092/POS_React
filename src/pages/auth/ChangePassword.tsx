import React from "react";
import Warejeans from "/assets/forgotpassword.jpg";
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
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
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
    navigate("/change-password/otp-validation");
  }

  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:h-screen sm:pr-4">
      <div className="w-full h-full flex sm:w-[50%] md:w-[60%]">
        <div className=" bg-pinkbg h-full w-1/2 z-0"></div>

        <div className="flex items-center justify-center -ml-32 z-10 ">
          <img
            src={Warejeans}
            alt=""
            className="w-[300px] sm:w-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] h-[300px] lg:h-[400px] sm:h-[250px] sm:shadow-lg sm:border-r-hidden sm:rounded-l-3xl"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:py-5 py-10 w-full sm:w-[50%] md:w-[40%] space-y-4 sm:shadow-lg sm:rounded-b-3xl px-4 sm:p-0">
        <div className="w-full sm:w-[85%] space-y-4">
          <h1 className="text-center font-bold text-2xl">Forgot Password?</h1>
          <p className="">
            Don’t worry ! It happens. Please enter the phone number we will send
            the OTP in this phone number.
          </p>
        </div>
        <div className="w-full sm:w-[85%]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-inputbg font-sans"
                        type="email"
                        placeholder="Enter your Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="welcome"
                className="w-full text-lg"
              >
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
