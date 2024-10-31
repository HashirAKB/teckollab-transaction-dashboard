import './App.css'

import { TransactionDashboard } from '@/components/features/transactions/TransactionDashboard';
import { ThemeProvider } from './components/theme/theme-provider';
import { APP_CONSTANTS } from '@/lib/constants';
import { theme } from '@/styles/theme';

function App() {
  const { app } = theme;
  
  return (
    <ThemeProvider 
      defaultTheme={APP_CONSTANTS.THEME.DEFAULT} 
      storageKey={APP_CONSTANTS.THEME.STORAGE_KEY}
    >
      <div className={`${app.container}`}>
        <main className={app.content}>
          <TransactionDashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
