import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-xs font-mono uppercase tracking-widest text-foreground-secondary hover:text-accent transition-colors">
            ← Return to Portfolio
          </Link>
        </div>
        
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-12">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-p:text-foreground-secondary prose-p:font-sans prose-p:font-light prose-p:leading-relaxed max-w-none">
          <p className="mb-8 text-xs font-mono uppercase tracking-widest text-foreground-muted">Last updated: September 2026</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">1. Information Collection</h2>
          <p>This portfolio is a static demonstration of my professional engineering and design work. It does not actively track you, use analytics software, or deploy non-essential cookies. Any information you choose to provide when contacting me via email or LinkedIn is handled solely for the purpose of our direct professional communication.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">2. External Links</h2>
          <p>This website contains links to external platforms such as GitHub, LinkedIn, LeetCode, and live project deployments. Please be aware that when you leave this portfolio, you are subject to the privacy policies of those respective platforms. I am not responsible for their data collection practices.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">3. Security</h2>
          <p>The site is hosted on secure, modern infrastructure (Vercel) and uses HTTPS to ensure that your connection to the portfolio is secure.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">4. Changes to This Policy</h2>
          <p>I reserve the right to update this privacy policy at any time. Changes will be reflected on this page with an updated revision date.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">5. Contact</h2>
          <p>If you have any questions regarding this policy, please reach out via the contact information provided in the footer of the portfolio.</p>
        </div>
      </div>
    </div>
  );
}
