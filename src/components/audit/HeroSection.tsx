import LeadForm from "./LeadForm";
import GoogleFormEmbed from "./GoogleFormEmbed";
import { useAuditForm } from "@/hooks/useAuditForm";

const HeroSection = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleSubmit,
    handleInputChange,
  } = useAuditForm();

  return (
    <section className="relative pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title - Full Width */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Бесплатный аудит команды и процессов
            <br />
            30 минут конкретики
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Для владельцев среднего бизнеса (5–50 сотрудников), которые устали
            быть «главными HR»
          </p>
          <p className="text-lg text-gray-700 font-medium">
            Оставь заявку — получи разбор твоих 'узких мест' + чек-лист '3
            способа снизить текучку без бюджета'
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Google Form */}
          <div className="flex justify-center lg:justify-start">
            <GoogleFormEmbed />
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
