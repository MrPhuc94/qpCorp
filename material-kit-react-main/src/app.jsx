import 'src/global.css';
import ThemeProvider from 'src/theme';
import store from 'src/store/store';
import Router from 'src/routes/sections';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { Provider } from 'react-redux';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
