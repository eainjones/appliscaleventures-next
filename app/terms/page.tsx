import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Use | Appliscale Ventures',
  description: 'Terms of Use for Appliscale Ventures',
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-semibold text-foreground mb-6">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Appliscale Ventures. By accessing or using our website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Website</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Permitted Use</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to scrape or collect data</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">User Accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of Appliscale Ventures or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Investment Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Information on this website is for informational purposes only and does not constitute:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Investment advice or recommendations</li>
                <li>An offer to sell or solicitation to buy securities</li>
                <li>A guarantee of investment returns</li>
                <li>Professional financial, legal, or tax advice</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Past performance is not indicative of future results. All investments carry risk, including the possible loss of principal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We do not endorse or assume responsibility for the content, privacy policies, or practices of third-party sites. You access third-party sites at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of accuracy, completeness, or timeliness of information</li>
                <li>Warranties of uninterrupted or error-free service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Appliscale Ventures and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, arising from your use of or inability to use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Appliscale Ventures and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the website, violation of these terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of our website is also governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. Please review our Privacy Policy to understand our data collection and use practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you submit confidential information or business plans to us for investment consideration, such submissions will be governed by a separate confidentiality or non-disclosure agreement. Information submitted through our general contact forms or public channels may not be treated as confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend your access to our website at any time, without notice, for conduct that we believe violates these Terms of Use or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with the laws of Poland, without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Krakow, Poland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <p className="text-foreground mb-2"><strong>Appliscale Ventures</strong></p>
                <p className="text-muted-foreground">Email: <a href="mailto:hello@appliscaleventures.com" className="text-primary hover:underline">hello@appliscaleventures.com</a></p>
                <p className="text-muted-foreground">Address: ul. Zyczkowskiego 14, 31-864 Krakow, Poland</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
