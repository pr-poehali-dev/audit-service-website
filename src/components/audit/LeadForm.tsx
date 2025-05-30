import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AuditFormData } from "@/types/audit";

interface LeadFormProps {
  formData: AuditFormData;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (field: keyof AuditFormData, value: string) => void;
}

const LeadForm = ({
  formData,
  isSubmitting,
  submitStatus,
  onSubmit,
  onInputChange,
}: LeadFormProps) => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="h-12"
            disabled={isSubmitting}
          />
          <Input
            placeholder="Ваш телефон или @telegram"
            value={formData.contact}
            onChange={(e) => onInputChange("contact", e.target.value)}
            className="h-12"
            disabled={isSubmitting}
          />
          <Input
            placeholder="Ваш email"
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="h-12"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            className="w-full h-12 text-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправляем..." : "Записаться на аудит"}
          </Button>

          {submitStatus === "success" && (
            <p className="text-green-600 text-center font-medium">
              ✅ Заявка отправлена! Скоро свяжемся с вами.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-600 text-center font-medium">
              ❌ Ошибка отправки. Проверьте заполнение полей и попробуйте еще
              раз.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
