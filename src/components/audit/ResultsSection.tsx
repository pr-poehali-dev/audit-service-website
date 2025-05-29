import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResultsSection = () => {
  const results = [
    {
      title: "Снижение текучки",
      description: "на 40% за 3 месяца",
    },
    {
      title: "Время сокращения подбора",
      description: "с 34 до 12 дней",
    },
    {
      title: "Рост eNPS",
      description: "с -15 до +28",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Проверено на 37 компаниях
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          в сфере деревообработки, строительства и HoReCa
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card
              key={index}
              className="text-center border-2 hover:border-blue-200 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  {result.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">
                  {result.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
