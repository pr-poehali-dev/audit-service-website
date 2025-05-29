import { Card, CardContent } from "@/components/ui/card";

const TargetAudienceSection = () => {
  const criteria = [
    "У тебя от 5 до 50 человек в штате",
    "Ты лично участвуешь в подборе/адаптации",
    "Текучка выше 20% в год",
    "Нет чётких KPI для сотрудников",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Это для тебя, если:
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {criteria.map((item, index) => (
            <Card
              key={index}
              className="text-left hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
