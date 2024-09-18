import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';

import {NextUIProvider} from '@nextui-org/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <NextUIProvider>

    <App />
    </NextUIProvider>

  </StrictMode>,
)
