import { Link } from "react-router-dom";

const DisclaimerSection = () => {
  return (
    <section className="py-8 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-600 italic mb-4">
          *Аудит бесплатный, но только для собственников, которые готовы
          работать над изменениями. Если ты ищешь «волшебную таблетку» — это не
          про нас
        </p>
        <div className="flex justify-center gap-6 text-xs text-gray-500">
          <Link
            to="/privacy-policy"
            className="hover:text-gray-700 underline transition-colors"
          >
            Политика конфиденциальности
          </Link>
          <Link
            to="/data-processing-consent"
            className="hover:text-gray-700 underline transition-colors"
          >
            Согласие на обработку данных
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
