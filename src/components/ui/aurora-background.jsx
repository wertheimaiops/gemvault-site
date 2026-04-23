import { cn } from '../../lib/utils'

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'transition-bg relative flex min-h-screen flex-col items-center justify-center bg-[#0a1628] text-slate-50',
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          '--aurora':
            'repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)',
          '--dark-gradient':
            'repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)',
          '--transparent': 'transparent',
        }}
      >
        <div
          className={cn(
            'after:animate-aurora pointer-events-none absolute -inset-[10px]',
            '[background-image:var(--dark-gradient),var(--aurora)]',
            '[background-size:300%,_200%] [background-position:50%_50%,50%_50%]',
            'opacity-60 blur-[10px]',
            'after:absolute after:inset-0',
            'after:[background-image:var(--dark-gradient),var(--aurora)]',
            'after:[background-size:200%,_100%]',
            'after:[background-attachment:fixed]',
            'after:mix-blend-difference after:content-[""]',
            showRadialGradient &&
              '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]',
          )}
        />
      </div>
      {children}
    </div>
  )
}
