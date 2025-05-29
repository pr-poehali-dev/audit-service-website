import { Card, CardContent } from "@/components/ui/card";

const GoogleFormEmbed = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-white shadow-lg border border-gray-200">
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Получить аудит команды
            </h3>
            <p className="text-sm text-gray-600">
              Заполните форму для бесплатной консультации
            </p>
          </div>

          <div className="w-full rounded-lg overflow-hidden bg-gray-50">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfg8pMgQB1ZCAmhD-_Yvd40y9x3LclrPJxBHsJDy6ZqTmwVvg/viewform?embedded=true"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Форма записи на аудит"
              loading="lazy"
            >
              Загрузка формы...
            </iframe>
          </div>

          <div className="text-center mt-3">
            <p className="text-xs text-gray-500">🔒 Ваши данные защищены</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleFormEmbed;
