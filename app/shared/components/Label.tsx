import { X, Check } from 'lucide-react';

type ILabelVariant = "warning" | "default" | "success"
interface LabelProps {
  children: React.ReactNode;
  variant?: ILabelVariant
  className?: string;
  closable?: boolean
  selected?: boolean;
  elevated?: boolean;
  onClick?: () => void;
}

export function Label({
  children,
  variant = 'default',
  className,
  closable = false,
  selected = false,
  elevated = false,
  onClick,
}: LabelProps) {
  const variants = {
    'warning': 'bg-dj-terra-500 text-white',
    'success': 'bg-dj-green-600 text-white',
    'default': 'bg-dj-green-50'
  }
  const DynamicComponent = onClick ? 'button' : 'div';

  return (
    <DynamicComponent
      type={onClick ? 'button' : 'submit'}
      onClick={onClick}
      className={`
        ${className ?? ''} 
        flex flex-row gap-2 rounded-full text-center py-2 px-3
        ${elevated ? 'shadow-xl' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${variants[variant]}
      `}
    >
      {
        closable && (
          <X />
        )
      }
      {children}
      {
        selected && (
          <Check />
        )
      }
    </DynamicComponent>
  );
}
