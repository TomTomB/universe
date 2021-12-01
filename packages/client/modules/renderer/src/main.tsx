import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './core/modules/i18n.module';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Shell } from './domain/shell/views';
import { BodyTypography, HeadingTypography } from './styles/global';
import { Route, HashRouter, Routes } from 'react-router-dom';
import { Login } from './domain/auth/views';
import { rootSelector } from './uikit/core/constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HeadingTypography />
      <BodyTypography />
      <Shell>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </HashRouter>
      </Shell>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById(rootSelector),
);
