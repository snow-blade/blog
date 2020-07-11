import "styles/tailwind.css";
import "styles/index.css"
import "typeface-open-sans";
import "typeface-merriweather";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
