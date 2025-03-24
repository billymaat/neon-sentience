
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					black: '#080808',
					blue: '#00FFFF',
					purple: '#9D00FF',
					red: '#FF0044',
					darkblue: '#0A1128',
					neonblue: '#08F7FE',
					neonpink: '#FE53BB',
					neonyellow: '#F5D300'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 15px 2px rgba(0, 255, 255, 0.5), 0 0 25px 5px rgba(0, 255, 255, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 25px 5px rgba(0, 255, 255, 0.7), 0 0 35px 10px rgba(0, 255, 255, 0.5)' 
					}
				},
				'text-glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(-5px, -5px)' },
					'60%': { transform: 'translate(5px, 5px)' },
					'80%': { transform: 'translate(5px, -5px)' }
				},
				'glitch-skew': {
					'0%': { transform: 'skew(0deg)' },
					'10%': { transform: 'skew(2deg)' },
					'20%': { transform: 'skew(-2deg)' },
					'30%': { transform: 'skew(0deg)' },
					'40%': { transform: 'skew(-1deg)' },
					'50%': { transform: 'skew(1deg)' },
					'60%': { transform: 'skew(0deg)' },
					'70%': { transform: 'skew(2deg)' },
					'80%': { transform: 'skew(-2deg)' },
					'90%': { transform: 'skew(0deg)' },
					'100%': { transform: 'skew(0deg)' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'5%': { opacity: '0.7' },
					'10%': { opacity: '1' },
					'15%': { opacity: '0.3' },
					'20%': { opacity: '1' },
					'25%': { opacity: '0.9' },
					'30%': { opacity: '1' },
					'35%': { opacity: '0.5' },
					'40%': { opacity: '1' },
					'75%': { opacity: '1' },
					'80%': { opacity: '0.4' },
					'85%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'scan-line': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'neural-pulse': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'text-glitch': 'text-glitch 0.5s linear infinite',
				'glitch-skew': 'glitch-skew 1s linear infinite',
				'flicker': 'flicker 5s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'scan-line': 'scan-line 8s linear infinite',
				'neural-pulse': 'neural-pulse 5s ease-in-out infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
				'cyber-gradient': 'linear-gradient(to right, #080808, #0A1128, #080808)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
