import { Card, CardContent } from "@/components/ui/card";

const GoogleFormEmbed = () => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardContent className="p-6">
        <div className="relative w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfg8pMgQB1ZCAmhD-_Yvd40y9x3LclrPJxBHsJDy6ZqTmwVvg/viewform?embedded=true"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-lg"
            title="Форма записи на аудит"
          >
            Загрузка формы...
          </iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleFormEmbed;
