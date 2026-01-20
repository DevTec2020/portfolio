import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const CONTATOS = [
  { label: 'Telefone', val: '(85) 98564-6542 (WhatsApp)', link: 'https://wa.me/85985646542', icon: faPhoneAlt },
  { label: 'E-mail', val: 'leonardo.silva.inf@gmail.com', link: 'mailto:leonardo.silva.inf@gmail.com', icon: faEnvelope },
  { label: 'Linkedin', val: '/devtec-leobatista', link: 'https://www.linkedin.com/in/devtec-leobatista/', icon: faLinkedin },
  { label: 'GitHub', val: '/DevTec2020', link: 'https://github.com/DevTec2020', icon: faGithub },
]

export default CONTATOS;