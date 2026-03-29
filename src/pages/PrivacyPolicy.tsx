import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div id="privacy" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-teal-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Privacy Policy</h3>
          </div>
          
          <div className="space-y-10 text-gray-400 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-widest text-teal-400/60 font-semibold">Last Updated: March 25, 2026</p>
            
            <p>This Privacy Policy explains how Airtime Scanner handles user information. We are committed to protecting your privacy and ensuring transparency in how the App operates.</p>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">1. Information We Collect</h4>
              <p>The App does not collect, store, or request personal information such as your name, email address, phone number, or location.</p>
              <p>We only process limited, non-personal data required to provide the App’s core functionality.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">2. Camera Permission</h4>
              <p>The App requires access to your device’s camera solely for scanning printed airtime vouchers and top-up receipts.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The camera is used only to detect and read voucher numbers</li>
                <li>The App does not record videos or store images</li>
                <li>Camera data is processed in real time and is not saved</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">3. OCR (Text Recognition)</h4>
              <p>The App uses Optical Character Recognition (OCR) technologies to extract voucher numbers:</p>
              <ul className="list-disc pl-6 space-y-2 font-mono text-sm text-teal-400/80">
                <li>Google Gemini API (AI-powered scanning)</li>
                <li>Tesseract.js (offline OCR processing)</li>
              </ul>
              <p className="mt-4">When using AI Scan mode:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Images may be temporarily transmitted to third-party servers (Google) for processing</li>
                <li>The service returns detected text to the App</li>
                <li>Extracted text is used only for voucher recognition</li>
                <li>The App does not store images or OCR results</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">4. Dialer / USSD Functionality</h4>
              <p>The App may open your device’s dialer with a pre-filled USSD code to simplify airtime recharge.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The App does not make calls automatically</li>
                <li>All actions require user confirmation</li>
                <li>No call or dialing data is collected or stored</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">5. Sharing Feature</h4>
              <p>The App allows users to share scanned voucher codes via other apps.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sharing is fully controlled by the user</li>
                <li>The App does not track, monitor, or store shared content</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">6. Data Storage and Retention</h4>
              <p>We do not store:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scanned images</li>
                <li>Voucher codes</li>
                <li>Personal data</li>
              </ul>
              <p>All processing is temporary and only occurs while using the App.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">7. Third-Party Services</h4>
              <p>The App relies on limited third-party services: Google Gemini API and Tesseract.js. These services may process data according to their own privacy policies. We do not control their data handling practices.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">8. Children’s Privacy</h4>
              <p>The App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If such data is discovered, it will be deleted.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">9. User Responsibility</h4>
              <p>Users are responsible for verifying scanned voucher codes before use and ensuring correct usage of USSD and sharing features.</p>
              <p>The App is provided as a tool to assist users and does not guarantee accuracy of scanned results.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">10. Disclaimer of Liability</h4>
              <p>The App is provided “as is” without warranties of any kind. We are not responsible for incorrect scans, loss of airtime value, or any damages resulting from use. Use of the App is at your own risk.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">11. Changes to This Policy</h4>
              <p>We may update this Privacy Policy from time to time. Updates will be reflected within the App or on its official listing.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">12. Consent</h4>
              <p>By using the App, you agree to this Privacy Policy.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">13. Contact</h4>
              <p>If you have any questions or concerns, please contact us at:</p>
              <a href="mailto:help@airtimescanner.space" className="text-teal-400 hover:underline font-mono">help@airtimescanner.space</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
