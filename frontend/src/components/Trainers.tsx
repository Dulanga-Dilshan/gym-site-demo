import { useState, useEffect } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Trainer {
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

export function Trainers() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch('/api/get-trainers/');
        if (!response.ok) {
          throw new Error(`Failed to fetch trainers: ${response.status}`);
        }
        const data = await response.json();
        setTrainers(data.trainers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchTrainers();
  }, []);

  if (loading) {
    return (
      <section id="trainers" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">Loading trainers...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="trainers" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-red-600 dark:text-red-400">⚠️ {error}</p>
        </div>
      </section>
    );
  }

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