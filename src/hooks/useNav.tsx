export default function useNav() {
  type mainNavType = {
    Home: string;
    Rules: string;
    FAQ: string;
    About: string;
    Login: string;
  };

  const mainNav = {
    Home: "/",
    Rules: "/rules",
    FAQ: "/faq",
    About: "/about",
    Login: "/login",
  };

  return { mainNav };
}
