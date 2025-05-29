const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed">
              Настоящая Политика конфиденциальности определяет порядок обработки
              персональных данных пользователей сайта и обеспечения их
              безопасности.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Сбор информации</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы собираем только необходимую информацию для проведения аудита:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Контактные данные (имя, email, телефон)</li>
              <li>Информация о вашем бизнесе</li>
              <li>Данные для анализа эффективности</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              3. Использование данных
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Персональные данные используются исключительно для:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Проведения бесплатного аудита</li>
              <li>Связи с вами по результатам анализа</li>
              <li>Предоставления рекомендаций</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Защита данных</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы применяем современные методы защиты информации и не передаем
              ваши данные третьим лицам без вашего согласия.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Контакты</h2>
            <p className="text-gray-700 leading-relaxed">
              По вопросам обработки персональных данных обращайтесь по адресу:
              <span className="font-medium">privacy@poehali.dev</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
