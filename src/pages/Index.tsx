import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Детская психология",
      description: "Работа с эмоциональными и поведенческими проблемами детей",
      icon: "Baby",
      price: "от 3000 ₽"
    },
    {
      title: "Семейная терапия",
      description: "Решение конфликтов и улучшение отношений в семье",
      icon: "Users",
      price: "от 4000 ₽"
    },
    {
      title: "Онлайн консультации",
      description: "Удобный формат работы из дома в комфортной обстановке",
      icon: "Video",
      price: "от 2500 ₽"
    },
    {
      title: "Групповые занятия",
      description: "Развивающие программы для детей разных возрастов",
      icon: "UserCheck",
      price: "от 1500 ₽"
    }
  ];

  const methods = [
    {
      title: "Игровая терапия",
      description: "Естественный способ общения с ребенком через игру"
    },
    {
      title: "Арт-терапия",
      description: "Самовыражение и проработка эмоций через творчество"
    },
    {
      title: "Песочная терапия",
      description: "Создание безопасного пространства для выражения чувств"
    },
    {
      title: "Семейные расстановки",
      description: "Метод работы с семейными системами и отношениями"
    }
  ];

  const testimonials = [
    {
      name: "Анна М.",
      text: "Виктория помогла нашей семье наладить отношения с подростком. Очень благодарны за профессиональный подход!",
      rating: 5
    },
    {
      name: "Михаил К.",
      text: "Сын стал более открытым и спокойным после работы с психологом. Рекомендуем всем родителям!",
      rating: 5
    },
    {
      name: "Елена С.",
      text: "Онлайн консультации оказались очень удобными. Ребенок чувствует себя комфортно дома.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={28} />
              <span className="font-heading font-bold text-xl text-foreground">
                Виктория Пархоменко
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Обо мне
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#methods" className="text-foreground hover:text-primary transition-colors">
                Методы
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Детский семейный психолог
              </Badge>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Помогаю детям и семьям 
                <span className="text-primary"> найти гармонию</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Профессиональная психологическая поддержка для детей и родителей. 
                Более 8 лет опыта в семейной и детской психологии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Задать вопрос
                </Button>
              </div>
            </div>
            <div className="flex-1 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <img
                  src="/img/50cec4b9-adca-48ae-a98d-9a566ffd7947.jpg"
                  alt="Пархоменко Виктория - детский психолог"
                  className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="/img/17838616-27db-4146-83ce-d48f89ee3544.jpg"
                alt="Семейная терапия"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Обо мне
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Меня зовут Виктория Пархоменко. Я детский семейный психолог с более чем 8-летним 
                  опытом работы. Специализируюсь на работе с детьми от 3 до 17 лет и их семьями.
                </p>
                <p>
                  Моя основная цель — помочь детям и родителям наладить гармоничные отношения, 
                  преодолеть трудности и найти пути к взаимопониманию и счастью в семье.
                </p>
                <p>
                  Использую современные методы психотерапии, адаптированные для работы с детьми. 
                  Каждый случай уникален, поэтому подход всегда индивидуальный.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="font-heading text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Семей помогли</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="font-heading text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к решению детских и семейных проблем
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="font-heading font-semibold text-primary text-lg mb-4">
                    {service.price}
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Методы работы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные подходы в детской и семейной психологии
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {methods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Icon name="Sparkles" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят семьи о нашей работе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-foreground">— {testimonial.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Записаться на консультацию
              </h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь со мной для записи на прием или получения консультации
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-heading text-xl font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <span>victoria.parhomenko@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <span>г. Москва, ул. Примерная, д. 10</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <span>Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</span>
                  </div>
                </div>
                <div className="pt-6">
                  <h4 className="font-semibold mb-3">Мои социальные сети:</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" className="mr-2" size={16} />
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Phone" className="mr-2" size={16} />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="font-heading">Форма записи</CardTitle>
                  <CardDescription>
                    Заполните форму, и я свяжусь с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашей ситуации или вопросе"
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-primary" size={24} />
                <span className="font-heading font-bold text-lg">Виктория Пархоменко</span>
              </div>
              <p className="text-gray-300 text-sm">
                Детский семейный психолог. Помогаю семьям найти гармонию и понимание.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">Обо мне</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Услуги</a>
                <a href="#methods" className="block text-gray-300 hover:text-white transition-colors">Методы</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Полезные статьи</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Как выбрать психолога для ребенка</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Детские страхи: что делать родителям</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Семейные конфликты и их решение</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 Пархоменко Виктория. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;