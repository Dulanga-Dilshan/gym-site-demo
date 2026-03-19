import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Trainers() {
  const trainers = [
    {
      name: 'Sarah Johnson',
      role: 'Head Trainer & Yoga Specialist',
      image: 'https://images.unsplash.com/photo-1708011108850-49646bd34503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBmaXRuZXNzJTIwdHJhaW5lcnxlbnwxfHx8fDE3NzM2NzMzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: 'Yoga, Pilates, Wellness',
    },
    {
      name: 'Michael Chen',
      role: 'Strength & Conditioning Coach',
      image: 'https://images.unsplash.com/photo-1549995546-87cb41aa98a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZml0bmVzcyUyMGNvYWNofGVufDF8fHx8MTc3MzY2NjA3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: 'Weight Training, HIIT, Sports Performance',
    },
    {
      name: 'Alex Martinez',
      role: 'Cardio & Nutrition Expert',
      image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNjcxNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: 'Cardio Training, Nutrition Planning, Fat Loss',
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Meet Our <span className="text-primary">Expert Trainers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our certified fitness professionals are dedicated to helping you achieve your goals with personalized guidance and support.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden card-border card-hover"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-3">{trainer.role}</p>
                <p className="text-gray-600 dark:text-white mb-4">{trainer.specialties}</p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <button className="trainer-social-btn group/social">
                    <Instagram className="w-5 h-5 text-gray-600 group-hover/social:text-white" />
                  </button>
                  <button className="trainer-social-btn group/social">
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover/social:text-white" />
                  </button>
                  <button className="trainer-social-btn group/social">
                    <Mail className="w-5 h-5 text-gray-600 group-hover/social:text-white" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}