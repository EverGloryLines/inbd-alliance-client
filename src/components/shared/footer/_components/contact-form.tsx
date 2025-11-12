"use client";

import type React from "react";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuickContact } from "./quick-contact";

interface FormErrors {
  fullName?: string;
  email?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    } else if (formData.fullName.length > 100) {
      newErrors.fullName = "Name must not exceed 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Handle form submission
      console.log("Form submitted:", formData);
      // TODO: Implement API call or server action
      setFormData({ fullName: "", email: "" });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h2 className="text-3xl 2xl:text-4xl font-song-myung font-medium text-white mb-2 tracking-[-0.02em]">
          Let&apos;s do business together!
        </h2>
        <p className="text-white/70 text-base tracking-[-0.02em] font-sans font-medium">
          Anytime we have an opportunity we will let you know!
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name Input */}
        <div>
          <label htmlFor="fullName" className="sr-only">
            Your Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-white text-black placeholder:text-gray-400 border-0 rounded-lg h-12"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-red-400 text-xs mt-1">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="sr-only">
            Your Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-white text-black placeholder:text-gray-400 border-0 rounded-lg h-12"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-400 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-8 mx-auto bg-white hover:bg-white/80 text-black rounded-lg h-10 text-base font-sans font-medium cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>

      {/* Quick Contact Options */}
      <QuickContact />
    </form>
  );
}
