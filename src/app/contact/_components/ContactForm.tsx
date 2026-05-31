"use client";

import { Button } from "@/components/ui";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  SendHorizontal,
} from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useRef, useState } from "react";
import { env } from "@/lib/env";
import { toast } from "sonner";

interface ContactFormProps {
  formId?: string | number;
  pageId?: string | number;
  formIndex?: string | number;
}

const contactDetails = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "184/1A Lê Văn Sỹ, Phú Nhuận, TPHCM",
  },
  {
    icon: Phone,
    title: "Hotline",
    content: "0394 783 239\n(Thứ 2 - Thứ 6: 8h30 - 17h30)",
  },
  {
    icon: Mail,
    title: "Email",
    content: "lienhe@thegioirobot.ai.vn",
  },
  {
    icon: FaFacebook,
    title: "Fanpage",
    content: "fb.com/stockmastertrack",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "Thứ 2 - Thứ 6: 8h30 - 17h30\nThứ 7: 8h30 - 12h00",
  },
];

const socialLinks = [
  { icon: FaFacebook, href: "#", color: "text-blue-600 bg-blue-50" },
  { icon: FaYoutube, href: "#", color: "text-red-600 bg-red-50" },
  { icon: SiZalo, href: "#", color: "text-blue-500 bg-blue-50" },
  { icon: FaTelegramPlane, href: "#", color: "text-sky-500 bg-sky-50" },
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
}

export function ContactForm({
  formId = 60,
  pageId = 1,
  formIndex = 1,
}: ContactFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const scrollToAndFocus = (field: keyof FormErrors) => {
    const refMap = {
      name: nameRef,
      phone: phoneRef,
      email: emailRef,
      topic: topicRef,
      message: messageRef,
    };

    const targetRef = refMap[field];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        targetRef.current?.focus();
      }, 300);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên.";
    if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email.";
    if (!formData.phone.trim())
      newErrors.phone = "Vui lòng nhập số điện thoại.";
    if (!formData.topic) newErrors.topic = "Vui lòng chọn chủ đề.";
    if (!formData.message.trim())
      newErrors.message = "Vui lòng nhập nội dung tin nhắn.";

    setErrors(newErrors);

    const errorFields = Object.keys(newErrors) as (keyof FormErrors)[];
    if (errorFields.length > 0) {
      scrollToAndFocus(errorFields[0]);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) return;

    setIsLoading(true);

    const body = new FormData();
    body.append("your-name", formData.name);
    body.append("your-email", formData.email);
    body.append("your-phone", formData.phone);
    body.append("topic", formData.topic);
    body.append("your-message", formData.message);
    body.append("_wpcf7_unit_tag", `wpcf7-f${formId}-p${pageId}-o${formIndex}`);

    try {
      const response = await fetch(
        `${env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
        {
          method: "POST",
          body,
        },
      );

      if (!response.ok) {
        throw new Error("Lỗi hệ thống từ server. Vui lòng thử lại sau.");
      }

      const result = await response.json();

      if (result.status === "mail_sent") {
        toast.success(
          "Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
        );
        setFormData(initialFormData);
        setErrors({});
      } else {
        if (result.invalid_fields && result.invalid_fields.length > 0) {
          const newErrors: FormErrors = {};
          let firstErrorField: keyof FormErrors | null = null;

          result.invalid_fields.forEach(
            (item: { field: string; message: string }) => {
              let localField: keyof FormErrors | null = null;
              if (item.field === "your-name") localField = "name";
              if (item.field === "your-email") localField = "email";
              if (item.field === "your-phone") localField = "phone";
              if (item.field === "topic") localField = "topic";
              if (item.field === "your-message") localField = "message";

              if (localField) {
                newErrors[localField] = item.message;
                if (!firstErrorField) firstErrorField = localField;
              }
            },
          );
          setErrors(newErrors);

          if (firstErrorField) {
            scrollToAndFocus(firstErrorField);
          }
        } else {
          toast.error(
            result.message || "Gửi tin nhắn thất bại! Vui lòng thử lại sau.",
          );
        }
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Không thể kết nối đến máy chủ! Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-slate-50/50 py-12 lg:py-16">
      <div className="mx-auto w-full px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:gap-4 lg:grid-cols-11 items-start">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-xs lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl lg:text-[24px] font-bold text-gray-900 mb-6 text-center lg:text-left">
              GỬI THÔNG TIN CHO CHÚNG TÔI
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name)
                        setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full h-11 px-3 rounded-lg border-[1.5px] bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-hidden transition-colors ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-lime-600"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs font-semibold text-red-500 mt-0.5">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email)
                        setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full h-11 px-3 rounded-lg border-[1.5px] bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-hidden transition-colors ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-lime-600"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs font-semibold text-red-500 mt-0.5">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={phoneRef}
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone)
                        setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full h-11 px-3 rounded-lg border-[1.5px] bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-hidden transition-colors ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-lime-600"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs font-semibold text-red-500 mt-0.5">
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Chủ đề <span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      ref={topicRef}
                      value={formData.topic}
                      onChange={(e) => {
                        setFormData({ ...formData, topic: e.target.value });
                        if (errors.topic)
                          setErrors({ ...errors, topic: undefined });
                      }}
                      className={`w-full h-11 pl-3 pr-10 rounded-lg border-[1.5px] bg-white text-[14px] text-gray-900 appearance-none focus:outline-hidden transition-colors ${
                        errors.topic
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-lime-600"
                      }`}
                    >
                      <option value="" disabled hidden>
                        Chọn chủ đề
                      </option>
                      {[
                        "Tư vấn khóa học",
                        "Lộ trình đầu tư",
                        "Hợp tác kinh doanh",
                        "Khác",
                      ].map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <svg
                        className="size-4 fill-none stroke-current stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  {errors.topic && (
                    <span className="text-xs font-semibold text-red-500 mt-0.5">
                      {errors.topic}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-base font-semibold text-gray-700">
                  Nội dung tin nhắn <span className="text-red-500">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message)
                      setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full min-h-30 p-3 rounded-lg border-[1.5px] bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:outline-hidden transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-lime-600"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs font-semibold text-red-500 mt-0.5">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="flex items-start gap-3 bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
                <ShieldCheck className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-emerald-900 leading-tight">
                    Thông tin của bạn được bảo vệ tuyệt đối.
                  </span>
                  <span className="text-[13px] font-medium text-emerald-700 mt-0.5">
                    Chúng tôi không chia sẻ thông tin cho bên thứ ba.
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-lime-600 text-white font-bold flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102 text-[15px] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <SendHorizontal className="size-4" />
                {isLoading ? "ĐANG GỬI TIN NHẮN..." : "GỬI TIN NHẮN"}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-xs flex flex-col justify-between self-stretch">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[24px] font-bold text-gray-900 mb-6 text-center lg:text-left">
                THÔNG TIN LIÊN HỆ
              </h2>

              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-lime-600 border border-slate-100">
                      <item.icon className="size-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[16px] font-semibold text-gray-900 leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[15px] font-semibold text-gray-500 mt-1 wrap-break-word whitespace-pre-wrap">
                        {item.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9">
              <span className="text-base lg:text-[14px] font-bold text-gray-800 block mb-4">
                KẾT NỐI VỚI CHÚNG TÔI
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={"https://zalo.me/0394783239"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`size-10 rounded-full flex items-center justify-center transition-transform hover:scale-105 border border-gray-100 ${social.color}`}
                  >
                    <social.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
