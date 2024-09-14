import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
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

const ChangePasswordForm = () => {
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
    navigate("/otp-validation");
  }

  return (
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
                    placeholder="Enter your Email or Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="welcome" className="w-full text-lg">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
