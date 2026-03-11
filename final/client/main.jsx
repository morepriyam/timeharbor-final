import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { ThemeProvider } from '@mieweb/ui';
import { App } from '/imports/ui/App';
import '@mieweb/ui/brands/bluehive.css';
import './styles.css';
import '/imports/ui/styles.css';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
});
