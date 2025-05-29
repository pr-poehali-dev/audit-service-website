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

    // Проверяем, что все поля заполнены
    if (!formData.name.trim() || !formData.contact.trim()) {
      console.log("Поля не заполнены:", formData);
      setSubmitStatus("error");
      return;
    }

    console.log("Отправка формы начата:", formData);

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Отправляем данные на formspree...");

      const response = await fetch("https://formspree.io/f/xgvejqko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.contact,
          message: `Новая заявка на аудит от ${formData.name}. Контакт: ${formData.contact}`,
        }),
      });

      console.log("Ответ от сервера:", response.status, response.statusText);

      if (response.ok) {
        console.log("Форма отправлена успешно!");
        setSubmitStatus("success");
        setFormData({ name: "", contact: "" });
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
