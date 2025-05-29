import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTASection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Осталось 3 слота на этой неделе
            </h2>
            <p className="text-xl text-gray-700 mb-8">Запишись сейчас!</p>
            <Button
              className="h-14 px-8 text-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              onClick={() => {
                const formElement = document.querySelector("form");
                formElement?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Записаться на аудит
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTASection;
