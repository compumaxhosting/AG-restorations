"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function generateRandomNumber(len = 6) {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(Math.random() * 10);
  return s;
}

function createCaptchaDataUrl(text: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 180;
  canvas.height = 56;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const charSpacing = 24;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const x = 12 + i * charSpacing + Math.random() * 4 - 2;
    const y = canvas.height / 2 + (Math.random() * 6 - 3);
    const angle = (Math.random() * 8 - 4) * (Math.PI / 180);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.font = `${26 + Math.floor(Math.random() * 4)}px Arial`;
    ctx.fillStyle = "#003269";
    ctx.textBaseline = "middle";
    ctx.fillText(ch, 0, 0);
    ctx.restore();
  }

  return canvas.toDataURL("image/png");
}

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const captchaLen = 6;
  const mountedRef = useRef(false);

  useEffect(() => {
    regenerateCaptcha();
    mountedRef.current = true;
  }, []);

  const regenerateCaptcha = () => {
    const num = generateRandomNumber(captchaLen);
    setCaptchaValue(num);
    setCaptchaImage(createCaptchaDataUrl(num));
    setCaptchaInput("");
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (captchaInput.trim() !== captchaValue) {
      setIsSubmitting(false);

      Swal.fire({
        icon: "error",
        title: "Captcha Incorrect",
        text: "Please enter the numbers shown in the captcha.",
        confirmButtonColor: "#e63a27",
      });

      regenerateCaptcha();
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber,
      service,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your request has been sent successfully.",
          confirmButtonColor: "#e63a27",
        });

        form.reset();
        setPhoneNumber("");
        setService("");
        regenerateCaptcha();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: result.error || "Something went wrong.",
          confirmButtonColor: "#e63a27",
        });

        regenerateCaptcha();
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unable to send message.",
        confirmButtonColor: "#e63a27",
      });

      regenerateCaptcha();
    }

    setIsSubmitting(false);
  };

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-[#f5f5f5] w-full max-w-md p-6 md:p-12 shadow-xl flex flex-col gap-4"
      aria-labelledby="form-heading"
    >
      <h2 id="form-heading" className="text-4xl font-bold text-[#003269]">
        Free Estimation
      </h2>

      {/* Name */}
      <label htmlFor="name" className="sr-only">
        Your Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        required
        autoComplete="name"
        className="p-3 border border-gray-300 rounded-md"
      />

      {/* Email */}
      <label htmlFor="email" className="sr-only">
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        required
        autoComplete="email"
        className="p-3 border border-gray-300 rounded-md"
      />

      {/* Phone */}
      <label htmlFor="phone" className="sr-only">
        Phone Number
      </label>
      <input
        id="phone"
        name="phoneNumber"
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
        autoComplete="tel"
        className="p-3 border border-gray-300 rounded-md"
      />

      {/* Service */}
      <label htmlFor="service" className="sr-only">
        Select the service you need
      </label>
      <select
        id="service"
        name="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
        className="p-3 rounded-md bg-[#003269] text-white"
      >
        <option value="" disabled>
          Service You Need
        </option>
        <option value="roofing">Roofing</option>
        <option value="waterproofing">Waterproofing</option>
        <option value="gutters">Gutters</option>
      </select>

      {/* Message */}
      <label htmlFor="message" className="sr-only">
        Your message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Requirements..."
        rows={4}
        required
        className="p-3 border border-gray-300 rounded-md"
      />

      {/* Captcha */}
      <div className="flex flex-col gap-2" aria-live="polite">
        {captchaImage && (
          <Image
            src={captchaImage}
            alt="Security captcha code. Enter the numbers shown in the image."
            width={120}
            height={40}
          />
        )}

        <button
          type="button"
          onClick={regenerateCaptcha}
          aria-label="Generate a new captcha code"
          className="text-sm text-[#e63a27]"
        >
          Refresh Captcha
        </button>

        <label htmlFor="captchaInput" className="sr-only">
          Enter captcha numbers
        </label>

        <input
          id="captchaInput"
          name="captchaInput"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value.replace(/\D/g, ""))}
          placeholder="Enter numbers"
          required
          maxLength={captchaLen}
          className="p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-[#e63a27] text-[#e63a27] py-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition"
      >
        {isSubmitting ? "Sending..." : "Book My Consultation"}
      </button>
    </motion.form>
  );
}
