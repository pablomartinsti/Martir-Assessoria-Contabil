import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Accounting from './pages/Service/Contabilidade Geral';
import Declaration from './pages/Service/Decleração de imposto';
import Opening from './pages/Service/Abertura e Regularização';
import Consultancy from './pages/Service/Consultoria Fiscal';
import Management from './pages/Service/Gestão Financeira';
import Outsourcing from './pages/Service/Terceirização de Serviço';
import Tax from './pages/Blog/Imposto de Renda';
import TaxRegime from './pages/Blog/Regime Tributário';
import TaxPlanning from './pages/Blog/Planejamento Tributário';
import HireAccountant from './pages/Blog/Contratar um Contador';
import Invoices from './pages/Blog/Notas Fiscais';
import LaborObligations from './pages/Blog/Obrigações Trabalhistas';
import Mei from './pages/Blog/Micro empreendedor Individual';
import CompanyOpening from './pages/Blog/Abertura de Empresa';
import ProLaboreandProfits from './pages/Blog/Pró-Labore e Lucros';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Sobre',
    element: <About />,
  },
  {
    path: '/Serviço',
    element: <Service />,
  },
  {
    path: '/Blog',
    element: <Blog />,
  },
  {
    path: '/Contato',
    element: <Contato />,
  },
  {
    path: '/Serviço/Contabilidade-Geral',
    element: <Accounting />,
  },
  {
    path: '/Serviço/Declaração-Imposto-de-Renda',
    element: <Declaration />,
  },
  {
    path: '/Serviço/Abertura-e-Regularização-de-Empresas',
    element: <Opening />,
  },
  {
    path: '/Serviço/Consultoria-Fiscal-e-Tributária',
    element: <Consultancy />,
  },
  {
    path: '/Serviço/Gestão-Financeira',
    element: <Management />,
  },
  {
    path: '/Serviço/Terceirização-de-Serviço-Fiscal-e-Contábil',
    element: <Outsourcing />,
  },
  {
    path: '/Blog/Imposto-de-Renda-Deduções-Legais-e-Como-Aumentar-a-Restituição',
    element: <Tax />,
  },
  {
    path: '/Blog/Como-Escolher-o-Regime-Tributário-Ideal-para-sua-Empresa',
    element: <TaxRegime />,
  },
  {
    path: '/Blog/Planejamento-Tributário-Como-Reduzir-a-Carga-de-Impostos-Legalmente',
    element: <TaxPlanning />,
  },
  {
    path: '/Blog/Quando-Devo-Contratar-um-Contador-para-Minha-Empresa?',
    element: <HireAccountant />,
  },
  {
    path: '/Blog/Emissão-de-Notas-Fiscais-O-Que-Você-Precisa-Saber',
    element: <Invoices />,
  },
  {
    path: '/Blog/Como-Lidar-com-as-Obrigações-Trabalhistas?',
    element: <LaborObligations />,
  },
  {
    path: '/Blog/O-que-é-o-MEI-e-quem-pode-abrir?',
    element: <Mei />,
  },
  {
    path: '/Blog/Abertura-de-Empresa:-O-Que-Você-Precisa-Saber',
    element: <CompanyOpening />,
  },
  {
    path: '/Blog/Como-Montar-um-Pró-Labore-Correto-para-os-Sócios',
    element: <ProLaboreandProfits />,
  },
]);

export default router;
