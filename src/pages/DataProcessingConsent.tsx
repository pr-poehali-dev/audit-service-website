const DataProcessingConsent = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Согласие на обработку персональных данных
        </h1>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Согласие субъекта персональных данных
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Я, заполняя форму на сайте, даю согласие на обработку моих
              персональных данных в соответствии с Федеральным законом от
              27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Цели обработки</h2>
            <p className="text-gray-700 leading-relaxed">
              Обработка персональных данных осуществляется в следующих целях:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Проведение бесплатного аудита бизнеса</li>
              <li>Предоставление консультаций и рекомендаций</li>
              <li>Информирование о результатах анализа</li>
              <li>Обратная связь по качеству услуг</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Перечень данных</h2>
            <p className="text-gray-700 leading-relaxed">
              Я даю согласие на обработку следующих персональных данных:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Информация о деятельности компании</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Способы обработки</h2>
            <p className="text-gray-700 leading-relaxed">
              Обработка данных может включать: сбор, запись, систематизацию,
              накопление, хранение, уточнение, извлечение, использование,
              передачу, блокирование, удаление и уничтожение.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              Срок действия согласия
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Настоящее согласие действует до момента его отзыва субъектом
              персональных данных путем направления письменного уведомления на
              адрес: <span className="font-medium">privacy@poehali.dev</span>
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Важно:</strong> Заполняя форму на сайте, вы автоматически
              подтверждаете свое согласие на обработку персональных данных в
              указанных выше целях.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataProcessingConsent;
