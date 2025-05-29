import { useState } from "react";
import { AuditFormData } from "@/types/audit";

export const useAuditForm = () => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверяем, что все поля заполнены
    if (!formData.name.trim() || !formData.email.trim()) {
      console.log("Поля не заполнены:", formData);
      setSubmitStatus("error");
      return;
    }

    console.log("Отправка формы начата:", formData);

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Отправляем данные на formspree...");

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append(
        "message",
        `Новая заявка на аудит от ${formData.name}. Email: ${formData.email}`,
      );

      const response = await fetch("https://formspree.io/f/xpwdvvyk", {
        method: "POST",
        body: formDataToSend,
      });

      console.log("Ответ от сервера:", response.status, response.statusText);

      if (response.ok) {
        console.log("Форма отправлена успешно!");
        setSubmitStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        console.error("Ошибка отправки:", response.status);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof AuditFormData, value: string) => {
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
