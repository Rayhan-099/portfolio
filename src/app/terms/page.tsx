import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-xs font-mono uppercase tracking-widest text-foreground-secondary hover:text-accent transition-colors">
            ← Return to Portfolio
          </Link>
        </div>
        
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-12">Terms of Service</h1>
        
        <div className="prose prose-invert prose-p:text-foreground-secondary prose-p:font-sans prose-p:font-light prose-p:leading-relaxed max-w-none">
          <p className="mb-8 text-xs font-mono uppercase tracking-widest text-foreground-muted">Last updated: September 2026</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. This website serves as a digital professional portfolio and resume.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">2. Intellectual Property</h2>
          <p>Unless otherwise stated, all original code, design, and content presented on this website are my intellectual property. However, this portfolio references and displays work built using open-source technologies, libraries, and frameworks whose intellectual property belongs to their respective creators.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">3. Project Demonstrations</h2>
          <p>The projects and case studies presented on this site are for demonstration purposes to showcase engineering capabilities. The live demos linked from this portfolio may be hosted on free tiers or experimental infrastructure and are provided "as is" without warranty of continuous uptime or functionality.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">4. Limitation of Liability</h2>
          <p>I shall not be held liable for any damages that arise from the use of, or inability to use, this website or the external projects linked herein.</p>
          
          <h2 className="text-xl font-display text-foreground mt-12 mb-4">5. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with standard international copyright and intellectual property norms, without regard to conflict of law provisions.</p>
        </div>
      </div>
    </div>
  );
}
