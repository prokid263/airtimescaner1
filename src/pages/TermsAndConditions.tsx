import { FileText } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div id="terms" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-teal-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Terms & Conditions</h3>
          </div>
          
          <div className="space-y-10 text-gray-400 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-widest text-teal-400/60 font-semibold">Last Updated: March 25, 2026</p>
            
            <p>Welcome to our application (“the App”). By downloading, installing, or using the App, you agree to these Terms and Conditions. If you do not agree, please do not use the App.</p>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">1. Use of the App</h4>
              <p>The App is designed to assist users in scanning and processing airtime voucher codes.</p>
              <p>You agree to use the App:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Only for lawful purposes</li>
                <li>In accordance with these Terms</li>
                <li>Without attempting to misuse or disrupt its functionality</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">2. App Functionality</h4>
              <p>The App provides features including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scanning airtime vouchers using your device camera</li>
                <li>Extracting voucher numbers via OCR (text recognition)</li>
                <li>Formatting recharge codes for USSD dialing</li>
                <li>Allowing users to share scanned voucher codes</li>
              </ul>
              <p>All features are provided for convenience only.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">3. No Guarantee of Accuracy</h4>
              <p>While the App aims to provide accurate results:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not guarantee that scanned or detected voucher codes are correct</li>
                <li>OCR results may vary depending on image quality and conditions</li>
              </ul>
              <p>Users are responsible for verifying all voucher codes before use.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">4. User Responsibility</h4>
              <p>By using the App, you agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for how you use scanned data</li>
                <li>You will verify voucher codes before recharging or sharing</li>
                <li>You will not rely solely on the App for critical transactions</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">5. Permissions</h4>
              <p>The App may request access to:</p>
              <ul className="list-disc pl-6 space-y-2 font-mono text-sm text-teal-400/80">
                <li>Camera (for scanning vouchers)</li>
              </ul>
              <p>These permissions are used strictly for functionality described in the Privacy Policy.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">6. Third-Party Services</h4>
              <p>The App may use third-party services (such as OCR providers) to process data.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not control these services</li>
                <li>Their use is subject to their own terms and policies</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">7. Prohibited Use</h4>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for illegal, fraudulent, or harmful activities</li>
                <li>Attempt to reverse engineer, modify, or hack the App</li>
                <li>Interfere with the App’s performance or security</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">8. Intellectual Property</h4>
              <p>All content, design, and functionality of the App are owned by the developer unless otherwise stated.</p>
              <p>You may not copy, reproduce, or distribute any part of the App without permission.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">9. Disclaimer of Warranties</h4>
              <p>The App is provided “as is” and “as available.”</p>
              <p>We make no guarantees regarding:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accuracy of scanned data</li>
                <li>Availability or uninterrupted access</li>
                <li>Error-free performance</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">10. Limitation of Liability</h4>
              <p>To the fullest extent permitted by law, we are not liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of airtime, money, or voucher value</li>
                <li>Errors in scanned or processed data</li>
                <li>Any indirect, incidental, or consequential damages</li>
              </ul>
              <p>Use of the App is entirely at your own risk.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">11. Termination</h4>
              <p>We reserve the right to suspend or terminate access to the App at any time, without notice, if these Terms are violated.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">12. Changes to Terms</h4>
              <p>We may update these Terms from time to time. Continued use of the App after changes means you accept the updated Terms.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">13. Governing Law</h4>
              <p>These Terms shall be governed by and interpreted in accordance with the laws of your jurisdiction.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">14. Contact</h4>
              <p>For any questions regarding these Terms, please contact:</p>
              <a href="mailto:help@airtimescanner.space" className="text-teal-400 hover:underline font-mono">help@airtimescanner.space</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
