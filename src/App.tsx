import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiHardDrive,
  FiMail,
  FiPhone,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Importe seus ativos
import logo from './assets/logo.svg'; // Verifique se o nome é 'logo.png' ou 'logo.svg'
import qrcode from './assets/qrcode.png';

// --- Dados dos Serviços (do seu cartão) ---
const services = [
  {
    icon: <FiCode className="card-icon" />,
    title: 'Criação de Sites Personalizados',
    description: 'Sites únicos, responsivos e otimizados para converter visitantes em clientes.',
  },
  {
    icon: <FiSmartphone className="card-icon" />,
    title: 'Lançamento de Sistemas Web e Mobile',
    description: 'Desenvolvemos sistemas sob medida para otimizar seus processos internos e externos.',
  },
  {
    icon: <FiDatabase className="card-icon" />,
    title: 'Manutenção e Otimização',
    description: 'Garantimos que suas plataformas estejam sempre rápidas, seguras e atualizadas.',
  },
  {
    icon: <FiHardDrive className="card-icon" />,
    title: 'Hospedagem e Suporte Técnico',
    description: 'Soluções de hospedagem confiáveis e um suporte técnico pronto para ajudar.',
  },
];

// --- Variantes de Animação (para Framer Motion) ---

// Animação para "fade in" subindo
const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeInOut' },
};

// Animação de container para "stagger" (efeito cascata)
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Tempo entre a animação de cada filho
    },
  },
};

// Animação para os itens "filho" do stagger
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

function App() {
  // Hook para efeito parallax sutil no título (opcional, mas dinâmico)
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], ['0%', '50%']);

  return (
    <>
      {/* --- HEADER --- */}
      <motion.header
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container nav-content">
          <a href="#home" className="logo-container">
            <img src={logo} alt="DNSites Logo" className="logo-img" />
            <span className="logo-text">DNSites</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <main>

        {/* --- SEÇÃO HERO --- */}
        <section id="home" className="hero">
          {/* NOVO: Div para a animação de fundo */}
          <div className="hero-background-animation"></div>
          <div className="container">
            <motion.div
              className="hero-content"
              style={{ y: parallaxY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h2 className="hero-subtitle" {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 0.6 }}>
                Criação e Desenvolvimento de Softwares
              </motion.h2>
              <motion.h1 className="hero-title" {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 0.8 }}>
                Transformando Ideias em Soluções Digitais
              </motion.h1>
              <motion.p className="hero-description" {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 1.0 }}>
                Especialistas em sites e sistemas personalizados que impulsionam o seu negócio.
              </motion.p>
              <motion.a
                href="https://wa.me/5592984615420"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                {...fadeInAnimation}
                transition={{ ...fadeInAnimation.transition, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vamos Conversar
              </motion.a>
            </motion.div>
          </div>
        </section>
        {/* --- SEÇÃO SERVIÇOS --- */}
        <section id="services" className="services">
          <div className="container">
            <motion.h2 className="section-title" {...fadeInAnimation}>
              Nossos Serviços
            </motion.h2>
            <motion.p className="section-subtitle" {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 0.2 }}>
              Soluções completas para sua presença digital.
            </motion.p>

            <motion.div
              className="services-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }} // Começa a animar quando 20% estiver visível
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  variants={staggerItem} // Animação em cascata
                  whileHover={{ y: -10, scale: 1.03 }} // Animação de HOVER
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="card-content">
                    {service.icon}
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- FOOTER (CONTATO) --- */}
      <motion.footer
        id="contact"
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3 className="footer-logo-text">DNSites</h3>
              <ul className="footer-contact">
                <li>
                  <FiMail className="contact-icon" />
                  <span>dnsites@gmail.com</span>
                </li>
                <li>
                  <FaWhatsapp className="contact-icon" />
                  <span>(92) 98461-5420</span>
                </li>
              </ul>
            </div>
            <div className="footer-qr">
              <img src={qrcode} alt="QR Code para Contato" />
              <p>Escaneie para contato rápido</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} DNSites. Todos os direitos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default App;