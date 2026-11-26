export const clinic = {
  name: 'María Fernanda Gallegos Serna',
  title: 'Lic. María Fernanda Gallegos Serna',
  brand: 'Manzanita',
  role: 'Nutrióloga clínica',
  phoneDisplay: '449 113 4742',
  phoneTel: '+524491134742',
  whatsapp: '524491134742',
  doctoralia: 'https://www.doctoralia.com.mx/perfil/maria-fernanda-gallegos-serna',
  facebook: 'https://www.facebook.com/manzzanita.nutricion',
  maps: 'https://maps.app.goo.gl/NFoBcmP1KyHkGYz47',
  mapEmbed:
    'https://maps.google.com/maps?q=Gral.+%C3%81lvaro+Obreg%C3%B3n+365,+Zona+Centro,+Aguascalientes&z=16&hl=es&output=embed',
  street: 'Gral. Álvaro Obregón 365',
  colony: 'Zona Centro',
  city: 'Aguascalientes, Ags.',
  zip: '20000',
  cedula: '12180004',
}

export function whatsappHref(message: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`
}

export const trajectory = [
  {
    year: 'Universidad',
    text: 'Universidad La Concordia, campus Fórum Internacional, en Aguascalientes. Graduada con mención honorífica.',
  },
  {
    year: '2018–2019',
    text: 'Servicio social en el Hospital General de Zona No. 2 del IMSS.',
  },
  {
    year: '2020–2021',
    text: 'Atención nutricional en el Bachillerato General Militarizado “1er Escuadrón Lanceros de Aguascalientes”.',
  },
  {
    year: 'Desde 2020',
    text: 'Consulta privada, presencial y por videollamada.',
  },
]

export const focus = [
  {
    title: 'Enfermedades metabólicas',
    text: 'Obesidad, resistencia a la insulina, lípidos y síndrome metabólico, leídos junto con el resto de tu salud.',
  },
  {
    title: 'Nutrición clínica',
    text: 'El plan sale de tu historia, tus estudios y lo que de verdad comes entre semana.',
  },
  {
    title: 'Educación en diabetes',
    text: 'Herramientas para entender la glucosa y sostener el tratamiento sin depender de listas rígidas.',
  },
  {
    title: 'Alimentación vegetariana',
    text: 'Menús completos, con opciones claras de proteína, hierro y el resto de nutrientes.',
  },
  {
    title: 'Nutrición pediátrica',
    text: 'Acompañamiento para niñas y niños a partir del primer año de vida.',
  },
  {
    title: 'Obesidad y comorbilidades',
    text: 'Cuando el peso convive con presión, hígado graso, hormonas u otras condiciones.',
  },
]

export type ConditionGroup = 'metabolica' | 'digestiva' | 'hormonal' | 'general'

export const conditions: { name: string; group: ConditionGroup }[] = [
  { name: 'Obesidad', group: 'metabolica' },
  { name: 'Sobrepeso', group: 'metabolica' },
  { name: 'Obesidad infantil', group: 'metabolica' },
  { name: 'Síndrome metabólico', group: 'metabolica' },
  { name: 'Dislipidemia', group: 'metabolica' },
  { name: 'Hiperlipidemia', group: 'metabolica' },
  { name: 'Colesterol', group: 'metabolica' },
  { name: 'Resistencia a la insulina', group: 'metabolica' },
  { name: 'Diabetes tipo 2', group: 'metabolica' },
  { name: 'Diabetes', group: 'metabolica' },
  { name: 'Diabetes gestacional', group: 'metabolica' },
  { name: 'Hipertensión', group: 'metabolica' },
  { name: 'Trastornos cardiovasculares', group: 'metabolica' },
  { name: 'Hígado graso', group: 'metabolica' },
  { name: 'Síntomas gastrointestinales', group: 'digestiva' },
  { name: 'Enfermedades gastrointestinales', group: 'digestiva' },
  { name: 'Colon irritable', group: 'digestiva' },
  { name: 'Síndrome del intestino irritable', group: 'digestiva' },
  { name: 'Estreñimiento', group: 'digestiva' },
  { name: 'Gastritis', group: 'digestiva' },
  { name: 'Colitis', group: 'digestiva' },
  { name: 'Intolerancia al gluten', group: 'digestiva' },
  { name: 'Intolerancia a la lactosa', group: 'digestiva' },
  { name: 'Alteraciones hormonales', group: 'hormonal' },
  { name: 'Hipotiroidismo', group: 'hormonal' },
  { name: 'Ovario poliquístico', group: 'hormonal' },
  { name: 'Nutrición para salud hormonal', group: 'hormonal' },
  { name: 'Nutrición y salud emocional', group: 'hormonal' },
  { name: 'Nutrición inadecuada', group: 'general' },
  { name: 'Desnutrición', group: 'general' },
]

export const services = [
  {
    id: 'primera',
    name: 'Primera visita',
    mode: 'Presencial',
    price: 'Desde $400',
    summary:
      'Revisamos hábitos, horarios, síntomas y los estudios que ya tengas. Sales con un plan personalizado y alimentos fáciles de conseguir.',
  },
  {
    id: 'seguimiento',
    name: 'Consulta de seguimiento',
    mode: 'Presencial',
    price: '$400',
    summary:
      'Ajustamos el plan según hambre, rutina y resultados. El seguimiento puede apoyarse en una aplicación para que no se pierda entre semana.',
  },
  {
    id: 'linea',
    name: 'Consulta en línea',
    mode: 'Videollamada o llamada',
    price: 'Desde $400',
    summary:
      'Por WhatsApp, Zoom, Google Meet o llamada. El pago se realiza antes. Conéctate unos 10 minutos antes, con batería, cámara y micrófono listos, y ten a la mano estudios o resultados.',
  },
]

export const steps = [
  {
    n: '01',
    title: 'Escuchamos tu contexto',
    text: 'Horarios, antojos, presupuesto, síntomas y lo que ya intentaste. La consulta empieza por ahí, no por una plantilla.',
  },
  {
    n: '02',
    title: 'Armamos un plan posible',
    text: 'Porciones, sustitutos y opciones para que puedas elegir alimentos distintos sin salirte del plan.',
  },
  {
    n: '03',
    title: 'Ajustamos el seguimiento',
    text: 'En la siguiente cita vemos qué funcionó, qué estorbó y cuál es el siguiente paso.',
  },
]

export const reviews = [
  {
    name: 'Carlos Contreras',
    date: '10 de febrero de 2025',
    visit: 'Consulta de seguimiento',
    text: 'Lic. María Fernanda es excelente, su conocimiento y profesionalismo. El plan alimenticio es muy bueno, personalizado y fácil de seguir, además de adaptarse perfectamente a mis necesidades y objetivos.',
  },
  {
    name: 'KG',
    date: '27 de octubre de 2026',
    visit: 'Primera visita',
    text: 'Da una excelente atención, se adecúa a nuestros hábitos. Dentro de la dieta da opciones para escoger alimentos diferentes. Todo muy bien.',
  },
  {
    name: 'Paulina Ortiz',
    date: '16 de octubre de 2026',
    visit: 'Consulta de seguimiento',
    text: 'Muy buena atención, una explicación muy detallada y sobre todo personalizada.',
  },
  {
    name: 'David Tejeda',
    date: '5 de diciembre de 2024',
    visit: 'Primera visita',
    text: 'Excelente atención. Me explicó de manera detallada cómo dar seguimiento de mi plan alimenticio con la aplicación móvil y resolvió todas mis dudas. Es muy amable y profesional.',
  },
  {
    name: 'Ana Victoria',
    date: '1 de enero de 2024',
    visit: 'Primera visita',
    text: 'La nutrióloga Fernanda es muy atenta y amable. Durante la consulta me hizo preguntas sobre mis hábitos y el plan es muy fácil de conseguir y económico.',
  },
  {
    name: 'BJRV',
    date: '12 de noviembre de 2026',
    visit: 'Primera visita',
    text: 'Excelente, buen trato, muy bien explicado y detallado el plan. 100% recomendable.',
  },
]

export const reasons = [
  'Control de peso',
  'Diabetes o resistencia a la insulina',
  'Colesterol o triglicéridos',
  'Salud digestiva',
  'Salud hormonal',
  'Nutrición infantil',
  'Alimentación vegetariana',
  'Otro motivo',
]

export const faqs = [
  {
    q: '¿A quién atiende?',
    a: 'A adultos y a niños a partir de 1 año. La consulta puede ser presencial en Zona Centro o en línea.',
  },
  {
    q: '¿Acepta aseguradoras?',
    a: 'La consulta es privada. El pago es en efectivo o por transferencia, directo con la nutrióloga.',
  },
  {
    q: '¿Cómo es la consulta en línea?',
    a: 'Se hace por WhatsApp, Zoom, Google Meet o llamada. El pago se realiza antes. Conviene entrar 10 minutos antes y revisar internet, cámara, micrófono y batería.',
  },
  {
    q: '¿El precio puede cambiar?',
    a: 'Los montos publicados inician en $400 MXN para pacientes sin aseguradora. Según el caso, el costo puede ser distinto: se confirma al agendar.',
  },
]
