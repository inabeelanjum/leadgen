import Link from 'next/link';

// Note: You'll need to create a new favicon.ico file with "PM" or "Prime Midin" branding
// and replace the existing file at src/app/favicon.ico

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-alt)] px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-black)]">Thank You!</h1>
        <p className="text-xl text-[var(--text-secondary)] mb-8">
          Your inquiry has been successfully submitted. A Prime Midin representative will contact you within 24 hours to discuss how we can help grow your business.
        </p>
        <Link 
          href="/" 
          className="btn btn-primary text-lg px-8 py-3"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
} 