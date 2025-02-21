import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  currentRole: z.string().min(2, "Current role must be at least 2 characters"),
  yearsOfExperience: z.string().regex(/^\d+$/, "Must be a number"),
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

interface PersonalInfoStepProps {
  onNext?: (data: PersonalInfoFormData) => void;
  initialData?: PersonalInfoFormData;
}

export default function PersonalInfoStep({
  onNext = () => {},
  initialData = {
    fullName: "",
    email: "",
    currentRole: "",
    yearsOfExperience: "",
  },
}: PersonalInfoStepProps) {
  const form = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: initialData,
  });

  const onSubmit = (data: PersonalInfoFormData) => {
    onNext(data);
  };

  return (
    <Card className="w-full max-w-[600px] p-6 bg-white shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Personal Information
        </h2>
        <p className="text-gray-500 mt-2">
          Let's start with some basic information about you
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Role</FormLabel>
                <FormControl>
                  <Input placeholder="Software Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Experience</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg">
              Next Step
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
