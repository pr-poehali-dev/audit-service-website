import HeroSection from "@/components/audit/HeroSection";
import ProcessSection from "@/components/audit/ProcessSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <HeroSection />
      <ProcessSection />

      {/* Временно оставляем остальные секции как есть */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Это для тебя, если ты:
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Владелец бизнеса с командой 5-50 человек",
              "Тратишь много времени на решение HR-вопросов",
              "Чувствуешь, что команда работает не на полную",
              "Хочешь систематизировать процессы управления",
              "Видишь, что конкуренты развиваются быстрее",
              "Готов инвестировать в развитие команды",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Остальные секции остаются без изменений пока */}
    </div>
  );
};

export default Index;
