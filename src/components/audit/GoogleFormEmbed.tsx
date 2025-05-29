import { Card, CardContent } from "@/components/ui/card";

const GoogleFormEmbed = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 shadow-2xl border-0 animate-fade-in hover:shadow-3xl transition-all duration-500">
        {/* Decorative gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 rounded-lg p-[2px]">
          <div className="bg-white rounded-lg h-full w-full"></div>
        </div>

        <CardContent className="relative p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
              <span className="text-white text-xl font-bold">📋</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Получить аудит команды
            </h3>
            <p className="text-sm text-gray-600">
              Заполните форму для бесплатной консультации
            </p>
          </div>

          {/* Form Container */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-inner bg-white/50 backdrop-blur-sm">
            {/* Loading overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse pointer-events-none opacity-0 transition-opacity duration-300 peer-loading:opacity-100"></div>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfg8pMgQB1ZCAmhD-_Yvd40y9x3LclrPJxBHsJDy6ZqTmwVvg/viewform?embedded=true"
              width="100%"
              height="520"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-xl peer"
              title="Форма записи на аудит"
              loading="lazy"
            >
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Загрузка формы...</p>
                </div>
              </div>
            </iframe>
          </div>

          {/* Footer note */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              🔒 Ваши данные защищены и не передаются третьим лицам
            </p>
          </div>
        </CardContent>

        {/* Floating background elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-6 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </Card>
    </div>
  );
};

export default GoogleFormEmbed;
