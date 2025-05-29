import LeadForm from "./LeadForm";
import { useAuditForm } from "@/hooks/useAuditForm";

const HeroSection = () => {
  const { formData, handleSubmit, handleInputChange } = useAuditForm();

  return (
    <section className="relative pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-purple-600">92% собственников</span>
              <br />
              даже не подозревают, что теряют
              <br />
              <span className="text-orange-500">
                до 30% прибыли из-за этих ошибок
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Бесплатный аудит команды и процессов — 30 минут конкретики
            </p>

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
