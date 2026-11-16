// Edite este arquivo para personalizar o cliente. Nunca coloque senhas ou chaves aqui.
window.SITE = {
  demo: true,
  name: 'Sua Clínica',
  tagline: 'ODONTOLOGIA & CUIDADO',
  description: 'Odontologia com um olhar humano. Conheça nossos tratamentos e converse com a equipe para agendar sua avaliação.',
  url: '', // URL pública completa, com HTTPS, após contratar o domínio.
  whatsapp: '', // DDI + DDD + número, somente dígitos. Ex.: 5511999999999
  phone: '',
  email: '',
  instagram: '', // URL completa https://www.instagram.com/...
  address: '',
  hours: '',
  professional: '',
  registration: '',
  message: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
  hero: { eyebrow: 'UM NOVO OLHAR PARA O SEU SORRISO', title: 'Cuidar do seu sorriso é cuidar de você.', text: 'Um atendimento próximo, um ambiente acolhedor e um plano de cuidado pensado para o seu momento.', image: 'assets/sorriso.jpg', alt: 'Mulher sorrindo de maneira natural' },
  about: { title: 'Antes de um sorriso, existe uma pessoa.', text: 'Acreditamos que um bom cuidado começa pela escuta. Aqui, cada consulta é um espaço para entender suas necessidades, esclarecer dúvidas e planejar os próximos passos com tranquilidade.', image: 'assets/clinica.jpg', alt: 'Ambiente de atendimento odontológico' },
  services: [
    { title: 'Clínica geral', text: 'Prevenção e acompanhamento para cuidar da saúde bucal em cada fase da vida.', image: 'assets/clinica.jpg' },
    { title: 'Ortodontia', text: 'Conheça as possibilidades de alinhamento e encontre orientação para o seu caso.', image: 'assets/tratamento.jpg' },
    { title: 'Clareamento dental', text: 'Avaliação e orientação profissional para valorizar o seu sorriso com cuidado.', image: 'assets/sorriso.jpg' },
    { title: 'Implantes dentários', text: 'Planejamento individualizado para reabilitação oral, conforme avaliação clínica.', image: 'assets/tratamento.jpg' }
  ],
  differences: [
    { title: 'Cuidado que começa na escuta', text: 'Suas dúvidas e expectativas fazem parte da conversa.' },
    { title: 'Planejamento individual', text: 'Cada pessoa tem uma história. Seu cuidado também.' },
    { title: 'Conforto em cada detalhe', text: 'Um ambiente pensado para uma experiência tranquila.' },
    { title: 'Contato descomplicado', text: 'Fale diretamente com a equipe pelo WhatsApp.' }
  ],
  gallery: [ { image: 'assets/clinica.jpg', alt: 'Consultório odontológico claro e acolhedor' }, { image: 'assets/tratamento.jpg', alt: 'Atendimento odontológico profissional' } ],
  testimonials: [], // Somente relatos reais com autorização: {name, text, rating: 5}.
  faq: [
    { question: 'Como agendar uma avaliação?', answer: 'Use um dos botões de WhatsApp para conversar com a equipe e consultar os horários disponíveis.' },
    { question: 'Qual tratamento é indicado para mim?', answer: 'A indicação depende de uma avaliação individual. Na consulta, o profissional poderá explicar as opções adequadas ao seu caso.' },
    { question: 'Posso tirar dúvidas antes da consulta?', answer: 'Sim. Entre em contato para informações sobre agendamento, localização e funcionamento. A orientação clínica depende de avaliação profissional.' }
  ],
  sections: { about: true, services: true, differences: true, gallery: true, testimonials: true, faq: true }
};
