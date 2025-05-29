import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProcessStep } from "@/types/audit";

const ProcessSection = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "10 вопросов тебе",
      description: "Проверим, что ты на самом деле думаешь о своем бизнесе",
    },
    {
      number: "02",
      title: "Анонимный eNPS-опрос команды",
      description: "Узнай, что о тебе думают на самом деле",
    },
    {
      number: "03",
      title: "Консультация с разбором",
      description: "Без воды, только конкретные точки роста",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Разберём твой бизнес за 3 шага
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="text-center border-2 hover:border-blue-200 transition-colors"
            >
              <CardHeader>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
