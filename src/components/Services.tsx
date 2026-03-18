import { Dumbbell, Heart, Users, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers tailored to your specific goals and fitness level.',
      features: ['Custom workout plans', 'Nutrition guidance', 'Progress tracking'],
    },
    {
      icon: Heart,
      title: 'Cardio Programs',
      description: 'High-intensity cardio workouts designed to improve endurance and burn calories effectively.',
      features: ['HIIT classes', 'Cycling sessions', 'Running programs'],
    },
    {
      icon: Zap,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive resistance training programs.',
      features: ['Free weights', 'Machines', 'Functional training'],
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join energizing group sessions including yoga, pilates, spin, and more for all fitness levels.',
      features: ['Yoga & Pilates', 'Spin classes', 'Bootcamp'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive fitness programs designed to help you achieve your goals, no matter your fitness level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 card-border card-hover"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="service-icon">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="dot-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}