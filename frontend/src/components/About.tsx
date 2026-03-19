import { Target, Users, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We focus on helping you achieve your personal fitness goals',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Build lasting relationships with like-minded fitness enthusiasts',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium equipment and certified trainers for optimal results',
    },
    {
      icon: Heart,
      title: 'Wellness',
      description: 'Holistic approach to health, fitness, and mental well-being',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771586791190-97ed536c54af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzczNzY4NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern gym equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 accent-bg p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About <span className="text-primary">Fitness Sports Center</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-white mb-6">
              Welcome to Fitness Sports Center, where fitness meets passion. For over a decade, we've been dedicated to helping individuals transform their lives through health and wellness.
            </p>
            <p className="text-lg text-gray-700 dark:text-white mb-8">
              Our state-of-the-art facility, combined with expert trainers and a supportive community, creates the perfect environment for you to reach your fitness goals.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="icon-bg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}