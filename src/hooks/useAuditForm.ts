import { useState } from "react";
import { FormData } from "@/types/audit";

export const useAuditForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет отправка формы
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    handleSubmit,
    handleInputChange,
  };
};
