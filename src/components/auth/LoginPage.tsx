import LoginBrandPanel from "./LoginBrandPanel";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
      <main className="min-h-screen bg-[#FEFEFE]">
        <div className="grid min-h-screen grid-cols-2">
          <LoginBrandPanel />
  
          <section className="flex min-h-screen items-center justify-center bg-[#FEFEFE]">
            <LoginForm />
          </section>
        </div>
      </main>
    );
  }