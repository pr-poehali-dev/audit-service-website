import LeadForm from "./LeadForm";
import { useAuditForm } from "@/hooks/useAuditForm";

const HeroSection = () => {
  const { formData, handleSubmit, handleInputChange } = useAuditForm();

  return (
    <section className="relative pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-purple-600">10 бизнес-проблем,</span>
          <br />
          которые ты терпишь, а твой
          <br />
          <span className="text-orange-500">конкурент уже исправил</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
          Бесплатный аудит команды и процессов — 30 минут конкретики
        </p>

        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Для владельцев среднего бизнеса (5–50 сотрудников), которые устали
          быть «главными HR»
        </p>

        <LeadForm
          formData={formData}
          onSubmit={handleSubmit}
          onInputChange={handleInputChange}
        />
      </div>
    </section>
  );
};

export default HeroSection;
