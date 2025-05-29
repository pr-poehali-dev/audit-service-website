import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет отправка формы
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
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

          {/* Lead Form */}
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-purple-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">
                Оставь заявку — получи разбор твоих 'узких мест'
              </CardTitle>
              <CardDescription className="text-lg">
                + чек-лист '3 способа снижения текучки без бюджета'
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12 text-lg"
                  required
                />
                <Input
                  placeholder="Телефон или email"
                  value={formData.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                  className="h-12 text-lg"
                  required
                />
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
                >
                  Получить аудит
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Разберём твой бизнес за 3 шага
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-purple-600">1</span>
                </div>
                <CardTitle className="text-xl">10 вопросов тебе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Проверим, что ты на самом деле думаешь о своем бизнесе
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">2</span>
                </div>
                <CardTitle className="text-xl">
                  Анонимный eNPS-опрос команды
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Узнай, что о тебе думают на самом деле
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-green-600">3</span>
                </div>
                <CardTitle className="text-xl">
                  Консультация с разбором
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Без воды, только конкретные точки роста
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Для кого это
          </h2>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Аудит подходит, если:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <p>У тебя от 5 до 50 человек в штате</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <p>Ты лично участвуешь в подборе/адаптации</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <p>Текучка выше 20% в год</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <p>Нет чётких KPI для HR</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Проверено на 37 компаниях
          </h2>
          <p className="text-center text-gray-600 mb-12">
            в сфере деревообработки, строительства и HoReCa
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  -40%
                </div>
                <p className="text-gray-700">Снижение текучки за 3 месяца</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  12 дней
                </div>
                <p className="text-gray-700">Время подбора (было 34 дня)</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  +28
                </div>
                <p className="text-gray-700">Рост eNPS (было -15)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Осталось 3 слота на этой неделе
          </h2>
          <p className="text-xl text-purple-100 mb-8">Сейчас или запишуся!</p>

          <Button className="h-16 px-12 text-xl font-bold bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
            Забрать место
          </Button>

          <p className="text-sm text-purple-100 mt-8 max-w-2xl mx-auto">
            *Аудит обязателен, но только для собственников, которые готовы
            работать над изменениями. Если ты ищешь «волшебную таблетку» — это
            не про нас
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
