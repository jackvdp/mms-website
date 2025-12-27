import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl uppercase tracking-wider text-primary mb-8 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our website or booking our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                2. Our Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                MMS Events provides entertainment services including but not limited to DJs, live bands, photo booths, lighting, sound systems, and event accessories for weddings, corporate events, and private functions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                3. Bookings and Payments
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Payment:</strong> Full payment is due no later than 14 days before your event date, unless otherwise agreed.</li>
                <li><strong className="text-foreground">Confirmation:</strong> Your booking is confirmed once we have sent written confirmation via email.</li>
                <li><strong className="text-foreground">Quotes:</strong> All quotes are valid for 30 days from the date of issue unless otherwise stated.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                4. Cancellations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand that circumstances can change. Our cancellation policy is as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">More than 7 days before event:</strong> No cancellation fee.</li>
                <li><strong className="text-foreground">Less than 7 days before event:</strong> 50% of total booking fee due.</li>
                <li><strong className="text-foreground">On the day of the event:</strong> 100% of total booking fee due.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that cancellation terms may vary depending on third-party contractors and their individual terms of service. We will advise you of any specific terms at the time of booking.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All cancellations must be made in writing via email.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                5. Event Changes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you need to change the date, time, or venue of your event, please notify us as soon as possible. We will do our best to accommodate changes, but this is subject to availability and may incur additional charges.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                6. Our Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We commit to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Providing professional entertainment services as agreed in your booking</li>
                <li>Arriving at the agreed time with all necessary equipment</li>
                <li>Conducting ourselves professionally throughout your event</li>
                <li>Having appropriate public liability insurance</li>
                <li>Providing a suitable replacement if your booked entertainer is unable to attend due to illness or emergency</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                7. Client Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate event details and requirements</li>
                <li>Ensure suitable access to the venue for setup</li>
                <li>Provide adequate power supply as specified</li>
                <li>Ensure a safe working environment for our staff</li>
                <li>Notify us of any venue restrictions or requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                8. Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While we take every care to provide excellent service, MMS Events shall not be liable for any indirect, incidental, or consequential damages arising from our services. Our total liability shall not exceed the total amount paid for the booking.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                9. Force Majeure
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Neither party shall be liable for failure to perform their obligations if such failure results from circumstances beyond their reasonable control, including but not limited to natural disasters, pandemic, government restrictions, or severe weather conditions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                10. Photography and Media
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may take photographs or videos at your event for promotional purposes. If you do not wish for your event to be featured in our marketing materials, please inform us in writing before the event.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                11. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-wider text-foreground mb-4">
                12. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{" "}
                <a href="mailto:simone@mmsdjs.com" className="text-primary hover:underline">
                  simone@mmsdjs.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
