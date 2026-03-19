import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';

export function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Free fitness assessment',
        '2 group classes per week',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      price: '$59',
      period: '/month',
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        '1 personal training session/month',
        'Nutrition consultation',
        'Access to sauna & steam room',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/month',
      description: 'Complete fitness experience',
      features: [
        'Everything in Standard',
        '4 personal training sessions/month',
        'Customized meal plans',
        'Priority class booking',
        'Guest passes (2/month)',
        'Free merchandise',
      ],
      popular: false,
    },
  ];

  return (
    <section id="membership" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle and goals. All plans include access to our world-class facilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'border-4 border-[#D4A520] shadow-2xl scale-105' 
                  : 'card-border card-hover'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="badge-primary">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-white text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-white ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 dark:text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'btn-primary'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 7-day money-back guarantee. No commitment, cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}