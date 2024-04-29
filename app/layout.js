import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyState } from "@/ContextApi/ContextApi";
import MainSlider from "@/components/Client/MainSlider";
import Headline from "@/components/Client/Headline";
import Navbar from "@/components/Client/Navbar";
import HomeSidebar from "@/components/Client/Aside/HomeSidebar";
import Footer from "@/components/Client/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "School management",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <MyState>


          <MainSlider />
          <Headline />
          <Navbar />

          <div className='mainAsideWrapper'>

            <main>
              {children}
            </main>

            <aside>
              <HomeSidebar />
            </aside>
          </div>

          
          <Footer />

        </MyState>
      </body>
    </html>
  );
}
