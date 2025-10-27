import { Target, Users, Monitor } from 'lucide-react';

interface IconCardProps {
  type: 'goal' | 'audience' | 'platform';
  title: string;
  description: string;
}

export function IconCard({ type, title, description }: IconCardProps) {
  const icons = {
    goal: Target,
    audience: Users,
    platform: Monitor,
  };
  
  const Icon = icons[type];
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-md" style={{ boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#20B2AA' }}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-['Poppins'] mb-2" style={{ color: '#0D3B66' }}>{title}</h4>
      <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>{description}</p>
    </div>
  );
}
