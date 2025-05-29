import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FormData } from "@/types/audit";

interface LeadFormProps {
  formData: FormData;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (field: keyof FormData, value: string) => void;
}

const LeadForm = ({ formData, onSubmit, onInputChange }: LeadFormProps) => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="h-12"
          />
          <Input
            placeholder="Телефон или Telegram"
            value={formData.contact}
            onChange={(e) => onInputChange("contact", e.target.value)}
            className="h-12"
          />
          <Button
            type="submit"
            className="w-full h-12 text-lg bg-blue-500 hover:bg-blue-600"
          >
            Получить аудит бесплатно
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
