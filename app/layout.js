
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";



export const metadata = {
  title: "Nextjs Login",
  description: "Nextjs Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body dir='rtl' className='h-full'>
        <div className='h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
          <div className='h-full w-full'>
            <AuthProvider>
               {children}
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
