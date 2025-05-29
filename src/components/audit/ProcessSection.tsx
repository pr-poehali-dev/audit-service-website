import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProcessStep } from "@/types/audit";

const ProcessSection = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Диагностика проблем",
      description: "Выявляем болевые точки в управлении командой за 15 минут",
    },
    {
      number: "02",
      title: "Анализ процессов",
      description: "Находим слабые места в бизнес-процессах и коммуникации",
    },
    {
      number: "03",
      title: "План действий",
      description: "Даём конкретные рекомендации для улучшения эффективности",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Как проходит аудит
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="text-center border-2 hover:border-purple-200 transition-colors"
            >
              <CardHeader>
                <div className="text-4xl font-bold text-purple-600 mb-4">
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
