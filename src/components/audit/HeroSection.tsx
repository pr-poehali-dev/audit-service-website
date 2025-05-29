import LeadForm from "./LeadForm";
import { useAuditForm } from "@/hooks/useAuditForm";

const HeroSection = () => {
  const { formData, handleSubmit, handleInputChange } = useAuditForm();

  return (
    <section className="relative pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title - Full Width */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6 leading-tight">
            Бесплатный аудит команды и процессов
            <br />
            30 минут конкретики
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-lg text-gray-600 mb-8">
              Для владельцев среднего бизнеса (5–50 сотрудников), которые устали
              быть «главными HR»
            </p>

            <div className="mb-8">
              <p className="text-lg text-gray-700 font-medium">
                Оставь заявку — получи разбор твоих 'узких мест' + чек-лист '3
                выхода снижения текучки без бюджета'
              </p>
            </div>

            <LeadForm
              formData={formData}
              onSubmit={handleSubmit}
              onInputChange={handleInputChange}
            />
          </div>

          {/* Image Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/d61830fe-5004-472a-8b14-617d33920a99.jpeg"
                alt="Обеспокоенный бизнесмен анализирует отчеты"
                className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
