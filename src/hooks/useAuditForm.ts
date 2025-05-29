import { useState } from "react";
import { FormData } from "@/types/audit";

export const useAuditForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Временно используем Formspree (бесплатный сервис)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          subject: "Новая заявка на аудит",
          message: `Имя: ${formData.name}\nКонтакт: ${formData.contact}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", contact: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleSubmit,
    handleInputChange,
  };
};
