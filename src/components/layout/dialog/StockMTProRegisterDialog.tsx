"use client";

import Image from "next/image";
import {
  Award,
  Users,
  LineChart,
  Calendar,
  X,
  LockKeyhole,
  Phone,
  Mail,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";
import {
  Button,
  Input,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui";
import { ReactNode, useRef, useState } from "react";
import { env } from "@/lib/env";
import { toast } from "sonner";
import Link from "next/link";
import { SiZalo } from "react-icons/si";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StockMTProRegisterDialogProps {
  children: ReactNode;
  formId?: string | number;
  pageId?: string | number;
  formIndex?: string | number;
}

type FormData = typeof INITIAL_FORM;

type FormErrors = Partial<
  Record<
    | "name"
    | "phone"
    | "email"
    | "capital"
    | "completedMasterTrack"
    | "agreeTerms"
    | "minCapitalConfirm",
    string
  >
>;

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  job: "",
  capital: "",
  experience: "",
  completedMasterTrack: "",
  agreeTerms: false,
  minCapitalConfirm: false,
};

const JOB_OPTIONS = [
  "Sinh viên",
  "Nhân viên văn phòng",
  "Kinh doanh",
  "Freelancer",
  "Khác",
];
const EXPERIENCE_OPTIONS = [
  "Dưới 1 năm",
  "1 - 3 năm",
  "3 - 5 năm",
  "Trên 5 năm",
];
const MASTER_TRACK_OPTIONS = [
  "Đã hoàn thành Stock MasterTrack",
  "Có nền tảng tương đương",
];

const FEATURES = [
  { icon: Award, label: "Hệ thống bài giảng cao cấp" },
  { icon: Users, label: "Mentor 1-1 phân tích danh mục" },
  { icon: LineChart, label: "Live Trading hàng tuần" },
  { icon: Users, label: "Cộng đồng MT Pro Elite" },
];

const REQUIREMENTS = [
  "Yêu cầu: Đang đầu tư với quy mô vốn từ 200 triệu đồng trở lên",
  "Dành cho học viên đã hoàn thành Stock MasterTrack (hoặc có nền tảng tương đương)",
  "Sỉ số giới hạn, đảm bảo chất lượng và sự đồng hành sát sao",
  "Cộng đồng MT Pro Elite — Mạng lưới nhà đầu tư tinh hoa",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const inputCls = (error?: string) =>
  `h-10 rounded-lg border-white/10 bg-[#121212] text-white shadow-none focus-visible:ring-[#C3944E] text-xs placeholder:text-white/30 ${
    error ? "border-red-500 focus-visible:ring-red-500" : ""
  }`;

const selectCls =
  "h-10 w-full rounded-lg border border-white/10 bg-[#121212] px-3 text-xs font-medium text-white/80 outline-none transition focus:border-[#C3944E]";

// ─── Custom Hook ──────────────────────────────────────────────────────────────

function useStockMTProForm(
  formId: string | number,
  pageId: string | number,
  formIndex: string | number,
) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const refs = {
    close: useRef<HTMLButtonElement>(null),
    name: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    capital: useRef<HTMLInputElement>(null),
    completedMasterTrack: useRef<HTMLSelectElement>(null),
    agreeTerms: useRef<HTMLInputElement>(null),
    minCapitalConfirm: useRef<HTMLInputElement>(null),
  };

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const scrollToAndFocus = (field: keyof FormErrors) => {
    const el = refs[field]?.current;
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus();
    }
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Vui lòng nhập họ và tên.";
    if (!formData.phone.trim()) e.phone = "Vui lòng nhập số điện thoại.";
    if (!formData.email.trim()) e.email = "Vui lòng nhập email.";
    if (!formData.capital.trim())
      e.capital = "Vui lòng nhập quy mô vốn đang đầu tư.";
    if (!formData.completedMasterTrack)
      e.completedMasterTrack = "Vui lòng chọn trạng thái hoàn thành khóa học.";
    if (!formData.agreeTerms)
      e.agreeTerms = "Vui lòng đồng ý với điều khoản sử dụng.";
    if (!formData.minCapitalConfirm)
      e.minCapitalConfirm =
        "Vui lòng xác nhận quy mô vốn từ 200 triệu đồng trở lên.";
    setErrors(e);
    const first = Object.keys(e)[0] as keyof FormErrors | undefined;
    if (first) scrollToAndFocus(first);
    return !first;
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors({});
    if (!validate()) return;
    setIsLoading(true);

    const body = new FormData();
    body.append("your-name", formData.name);
    body.append("your-phone", formData.phone);
    body.append("your-email", formData.email);
    body.append("your-job", formData.job);
    body.append("your-capital", formData.capital);
    body.append("your-experience", formData.experience);
    if (formData.completedMasterTrack)
      body.append("completedMasterTrack", formData.completedMasterTrack);
    body.append("agreeTerms", formData.agreeTerms ? "1" : "");
    body.append("minCapitalConfirm", formData.minCapitalConfirm ? "1" : "");
    body.append("_wpcf7_unit_tag", `wpcf7-f${formId}-p${pageId}-o${formIndex}`);

    try {
      const res = await fetch(
        `${env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
        { method: "POST", body },
      );
      if (!res.ok) throw new Error();
      const result = await res.json();

      if (result.status === "mail_sent") {
        toast.success(
          "Gửi đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
        );
        setFormData(INITIAL_FORM);
        setErrors({});
        refs.close.current?.click();
      } else if (result.invalid_fields?.length) {
        const fieldMap: Record<string, keyof FormErrors> = {
          "your-name": "name",
          "your-phone": "phone",
          "your-email": "email",
          "your-capital": "capital",
          completedMasterTrack: "completedMasterTrack",
          agreeTerms: "agreeTerms",
          minCapitalConfirm: "minCapitalConfirm",
        };
        const newErrors: FormErrors = {};
        let first: keyof FormErrors | undefined;
        result.invalid_fields.forEach(
          ({ field, message }: { field: string; message: string }) => {
            const key = fieldMap[field];
            if (key) {
              newErrors[key] = message;
              first ??= key;
            }
          },
        );
        setErrors(newErrors);
        if (first) scrollToAndFocus(first);
      } else {
        toast.error(
          result.message || "Gửi đăng ký thất bại! Vui lòng thử lại sau.",
        );
      }
    } catch {
      toast.error("Không thể kết nối đến máy chủ! Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, errors, isLoading, refs, setField, handleSubmit };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function StockMTProRegisterDialog({
  children,
  formId = 801,
  pageId = 1,
  formIndex = 1,
}: StockMTProRegisterDialogProps) {
  const { formData, errors, isLoading, refs, setField, handleSubmit } =
    useStockMTProForm(formId, pageId, formIndex);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-[calc(100%-2rem)] border border-white/30 p-0 shadow-2xl sm:max-w-[80%] rounded-2xl bg-[#060606] md:max-h-[90vh] overflow-hidden [&>button]:hidden">
        <div className="relative max-h-[90vh] lg:max-h-[93vh] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-800 hover:[&::-webkit-scrollbar-thumb]:bg-neutral-700 transition-colors">
          <DialogClose
            ref={refs.close}
            className="absolute right-4 top-4 z-50 flex size-8 items-center justify-center rounded-full border border-white/10 bg-[#121212] text-white/60 transition-all hover:bg-neutral-800 hover:text-white active:scale-95 focus:outline-none cursor-pointer"
          >
            <X className="size-4" />
          </DialogClose>

          <div className="grid lg:grid-cols-12">
            {/* ── Left Panel ── */}
            <div className="lg:col-span-6 bg-[#060606] p-5 sm:p-6 lg:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="flex h-10 items-center gap-2">
                  <Image
                    src="/courses/stock-mt-pro/stock-mt-pro-logo2.jpg"
                    alt="Stock MasterTrack Logo"
                    width={180}
                    height={40}
                    priority
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="mt-5">
                  <span className="rounded bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] px-2 py-1 text-xs font-extrabold uppercase text-[#E1BB70]">
                    KHÓA HỌC CAO CẤP
                  </span>
                </div>

                <h2 className="mt-3 text-4xl sm:text-5xl lg:text-[44px] font-black text-white uppercase flex flex-wrap items-center gap-2">
                  <span className="bg-linear-to-b from-white from-5% via-[#E1BB70] to-[#C3944E] bg-clip-text text-transparent">
                    STOCK MT PRO
                  </span>
                </h2>

                <p className="mt-1 text-base sm:text-xl lg:text-base font-bold uppercase text-white leading-relaxed">
                  Tư duy tinh hoa – Quản trị vốn chuyên sâu Tối ưu lợi nhuận bền
                  vững
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-[#121212]/50 p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#C3944E]/5 rounded-full blur-xl pointer-events-none" />
                  <p className="text-sm sm:text-lg lg:text-sm font-extrabold uppercase text-[#E1BB70]">
                    Khóa học dành cho nhà đầu tư nghiêm túc
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {REQUIREMENTS.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CircleCheck className="mt-1 size-4 shrink-0 text-[#ffe082]" />
                        <p className="text-xs sm:text-base lg:text-xs font-medium text-white/70 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border border-white/15 rounded-lg overflow-hidden">
                  <Image
                    src="/courses/stock-mt-pro/hero.jpg"
                    alt="Stock MT Pro"
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 rounded-lg bg-white/3 border border-white/15 p-4">
                  {FEATURES.map(({ icon: Icon, label }, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="flex size-10 sm:size-12 lg:size-10 items-center justify-center rounded-full bg-[#121212] border border-white/10 text-[#ffe082] mb-1.5">
                        <Icon className="size-4 sm:size-6 lg:size-4" />
                      </div>
                      <p className="text-xs sm:text-[15px] lg:text-[11px] font-semibold text-white/90">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="rounded-xl border border-white/10 bg-[#121212] p-4 text-center relative overflow-hidden">
                  <p className="text-base sm:text-xl lg:text-base font-extrabold uppercase text-white">
                    Học phí
                  </p>
                  <div className="mt-1 flex items-baseline justify-center gap-1.5">
                    <span className="text-3xl sm:text-4xl lg:text-3xl font-black bg-linear-to-b from-white from-5% via-[#E1BB70] to-[#C3944E] bg-clip-text text-transparent">
                      9.900.000đ
                    </span>
                    <span className="text-sm sm:text-base lg:text-sm font-bold text-white">
                      / tháng
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-xs font-medium text-white/40 mt-0.5">
                    (Học phí chưa bao gồm VAT)
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-3 text-center sm:text-left">
                    {[
                      {
                        icon: Calendar,
                        label: "Thời lượng",
                        value: "1 tháng (4 tuần)",
                      },
                      {
                        icon: null,
                        label: "Lịch học Live",
                        value: "Tối 3 – 5 – 7 hàng tuần",
                        pulse: true,
                      },
                    ].map(({ icon: Icon, label, value, pulse }, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row items-center gap-2"
                      >
                        <div className="size-8 sm:size-10 lg:size-8 rounded-full border border-[#C3944E]/30 flex items-center justify-center shrink-0">
                          {pulse ? (
                            <div className="size-1.5 sm:size-3.5 lg:size-1.5 rounded-full bg-[#E1BB70] animate-ping" />
                          ) : (
                            Icon && (
                              <Icon className="size-4 sm:size-6 lg:size-4 text-[#ffe082]/80" />
                            )
                          )}
                        </div>
                        <div>
                          <p className="text-sm sm:text-lg lg:text-sm font-extrabold bg-linear-to-b from-white from-5% via-[#E1BB70] to-[#C3944E] bg-clip-text text-transparent uppercase">
                            {label}
                          </p>
                          <p className="text-xs sm:text-sm lg:text-xs font-bold text-white/90">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Panel (Form) ── */}
            <div className="lg:col-span-6 bg-[#0c0c0c] p-5 sm:p-6 lg:p-7 flex flex-col justify-between">
              <div>
                <DialogHeader className="space-y-0 text-center lg:text-left">
                  <DialogTitle className="text-2xl sm:text-3xl lg:text-xl font-black text-white uppercase border-b border-white/10 pb-3">
                    Thông tin đăng ký khóa học
                  </DialogTitle>
                </DialogHeader>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-5 flex flex-col gap-4"
                >
                  {/* Section 1 */}
                  <div className="space-y-3">
                    <SectionTitle>1. Thông tin cá nhân</SectionTitle>

                    <Field label="Họ và tên" required error={errors.name}>
                      <Input
                        ref={refs.name}
                        placeholder="Nhập họ và tên của bạn"
                        className={inputCls(errors.name)}
                        value={formData.name}
                        onChange={(e) => setField("name", e.target.value)}
                      />
                    </Field>

                    <Field label="Số điện thoại" required error={errors.phone}>
                      <Input
                        ref={refs.phone}
                        placeholder="Nhập số điện thoại"
                        className={inputCls(errors.phone)}
                        value={formData.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                      />
                    </Field>

                    <Field label="Email" required error={errors.email}>
                      <Input
                        ref={refs.email}
                        type="email"
                        placeholder="Nhập email của bạn"
                        className={inputCls(errors.email)}
                        value={formData.email}
                        onChange={(e) => setField("email", e.target.value)}
                      />
                    </Field>

                    <Field label="Nghề nghiệp">
                      <select
                        value={formData.job}
                        onChange={(e) => setField("job", e.target.value)}
                        className={selectCls}
                      >
                        <option value="">Chọn nghề nghiệp</option>
                        {JOB_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3 border-t border-white/10 pt-3">
                    <SectionTitle>2. Thông tin đầu tư</SectionTitle>

                    <Field
                      label="Quy mô vốn đang đầu tư"
                      required
                      error={errors.capital}
                      hint="Yêu cầu tối thiểu: 200.000.000đ"
                    >
                      <Input
                        ref={refs.capital}
                        placeholder="Nhập số tiền (VNĐ)"
                        className={inputCls(errors.capital)}
                        value={formData.capital}
                        onChange={(e) => setField("capital", e.target.value)}
                      />
                    </Field>

                    <Field label="Kinh nghiệm đầu tư">
                      <select
                        value={formData.experience}
                        onChange={(e) => setField("experience", e.target.value)}
                        className={selectCls}
                      >
                        <option value="">Chọn mức kinh nghiệm</option>
                        {EXPERIENCE_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Bạn đã hoàn thành khóa học nào của Stock MasterTrack?"
                      required
                      error={errors.completedMasterTrack}
                      hint="(Vui lòng chọn 1 trong 2)"
                    >
                      <div className="flex flex-col gap-2">
                        {MASTER_TRACK_OPTIONS.map((item) => (
                          <label
                            key={item}
                            className="flex cursor-pointer items-center gap-2.5"
                          >
                            <input
                              type="radio"
                              name="completedMasterTrack"
                              value={item}
                              className="size-3.5 accent-[#C3944E]"
                              checked={formData.completedMasterTrack === item}
                              onChange={(e) =>
                                setField("completedMasterTrack", e.target.value)
                              }
                            />
                            <span className="text-xs font-medium text-white/80">
                              {item}
                            </span>
                          </label>
                        ))}
                      </div>
                    </Field>
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-2 border-t border-white/10 pt-3">
                    <SectionTitle>3. Cam kết & Điều kiện</SectionTitle>

                    <CheckField
                      ref={refs.agreeTerms}
                      checked={formData.agreeTerms}
                      error={errors.agreeTerms}
                      onChange={(v) => setField("agreeTerms", v)}
                    >
                      Tôi cam kết thông tin cung cấp là chính xác và đồng ý với{" "}
                      <span className="text-[#E1BB70] underline cursor-pointer">
                        Điều khoản sử dụng
                      </span>{" "}
                      của Stock MasterTrack.
                    </CheckField>

                    <CheckField
                      ref={refs.minCapitalConfirm}
                      checked={formData.minCapitalConfirm}
                      error={errors.minCapitalConfirm}
                      onChange={(v) => setField("minCapitalConfirm", v)}
                    >
                      Tôi xác nhận đang đầu tư với quy mô vốn từ 200 triệu đồng
                      trở lên.
                    </CheckField>
                  </div>

                  <div className="mt-1 rounded-xl border border-white/10 bg-[#121212]/40 p-3 flex gap-3 items-center">
                    <ShieldCheck className="size-8 text-[#C3944E] shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base lg:text-sm font-bold text-white/90">
                        Thông tin của bạn được bảo mật tuyệt đối.
                      </p>
                      <p className="text-xs sm:text-sm lg:text-xs font-medium text-white/40">
                        Chúng tôi cam kết không chia sẻ thông tin của bạn với
                        bên thứ ba.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-11 w-full rounded-lg bg-linear-to-r from-[#E1BB70] via-[#F4E3C1] via-50% to-[#C3944E] text-sm sm:text-lg lg:text-base font-black text-black shadow-lg shadow-[#C3944E]/5 transition-all hover:brightness-110 active:scale-[0.99] shrink-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer uppercase"
                  >
                    {isLoading ? "Đang gửi đăng ký..." : "Đăng ký khóa học"}
                  </Button>

                  <div className="mx-auto flex items-center gap-1.5 text-[10px] sm:text-xs lg:text-[10px] text-white/40">
                    <LockKeyhole className="size-3 text-[#C3944E]" />
                    Thanh toán an toàn và bảo mật
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-4 px-8 bg-[#121212] border-t border-white/15 mb-6">
            <p className="text-sm sm:text-base lg:text-sm font-bold text-[#E1BB70] uppercase">
              Cần hỗ trợ?
            </p>
            <div className="mt-2 flex flex-col lg:flex-row justify-between text-xs sm:text-sm lg:text-xs font-medium text-white/60">
              <p>Đội ngũ tư vấn sẽ liên hệ xác nhận thông tin trong 24h</p>
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4 sm:mt-2 lg:mt-0">
                {[
                  {
                    href: "tel:0394783239",
                    icon: Phone,
                    label: "0394 783 239",
                  },
                  {
                    href: "mailto:lienhe@thegioirobot.ai.vn",
                    icon: Mail,
                    label: "lienhe@thegioirobot.ai.vn",
                  },
                  {
                    href: "https://zalo.me/0394783239",
                    icon: SiZalo,
                    label: "Zalo tư vấn",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center gap-1.5 hover:text-[#E1BB70] transition"
                  >
                    <Icon className="size-3.5 text-[#C3944E]" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Small Sub-components ─────────────────────────────────────────────────────

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-base sm:text-lg lg:text-base font-extrabold text-[#C3944E] uppercase">
      {children}
    </p>
  );
}

function Field({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm sm:text-base lg:text-sm font-semibold text-white/80">
        {label} {required && <span className="text-red-400/70">*</span>}
      </label>
      {children}
      {hint && (
        <span className="text-xs sm:text-sm lg:text-xs font-medium text-white/40">
          {hint}
        </span>
      )}
      {error && (
        <span className="text-xs sm:text-sm lg:text-xs font-semibold text-red-400/70">
          {error}
        </span>
      )}
    </div>
  );
}

import { forwardRef } from "react";

const CheckField = forwardRef<
  HTMLInputElement,
  {
    checked: boolean;
    error?: string;
    onChange: (v: boolean) => void;
    children: ReactNode;
  }
>(({ checked, error, onChange, children }, ref) => (
  <div className="flex flex-col gap-1">
    <label className="flex items-start gap-2.5 cursor-pointer">
      <input
        ref={ref}
        type="checkbox"
        className="mt-0.5 size-3.5 rounded border-white/10 bg-[#121212] accent-[#C3944E] shrink-0"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-xs sm:text-sm lg:text-xs font-medium text-white/60 leading-tight">
        {children}
      </span>
    </label>
    {error && (
      <span className="text-xs sm:text-sm lg:text-xs font-semibold text-red-400/70">
        {error}
      </span>
    )}
  </div>
));
CheckField.displayName = "CheckField";
