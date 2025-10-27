import { ImageWithFallback } from './figma/ImageWithFallback';

interface PersonaCardProps {
  name: string;
  age: number;
  role: string;
  description: string;
  goals: string[];
  frustrations: string[];
  imageUrl: string;
}

export function PersonaCard({ name, age, role, description, goals, frustrations, imageUrl }: PersonaCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <div className="flex items-start gap-6 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <ImageWithFallback 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-['Poppins'] mb-1" style={{ color: '#0D3B66' }}>{name}, {age}</h3>
          <p className="font-['Inter'] text-sm mb-2" style={{ color: '#20B2AA' }}>{role}</p>
          <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>{description}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-['Poppins'] text-sm mb-2" style={{ color: '#20B2AA' }}>Goals</h4>
          <ul className="space-y-1">
            {goals.map((goal, index) => (
              <li key={index} className="font-['Inter'] text-sm flex items-start" style={{ color: '#0D3B66' }}>
                <span className="mr-2">•</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-['Poppins'] text-sm mb-2" style={{ color: '#20B2AA' }}>Frustrations</h4>
          <ul className="space-y-1">
            {frustrations.map((frustration, index) => (
              <li key={index} className="font-['Inter'] text-sm flex items-start" style={{ color: '#0D3B66' }}>
                <span className="mr-2">•</span>
                <span>{frustration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
