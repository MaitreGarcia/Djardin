type ILabelVariant = "warning" | "default" | "success"

export function Label({ children, variant = 'default' }: { children: React.ReactNode, variant?: ILabelVariant }) {
  const variants = {
    'warning': 'bg-dj-terra-500 text-white',
    'success': 'bg-dj-green-600 text-white',
    'default': 'bg-dj-green-50'
  }

  return (
    <div className={`rounded-full text-center p-1 ${variants[variant]}`}>
      {children}
    </div >
  );
}
