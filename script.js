const bursatilTemas = [
  {
    title: "Sociedades de inversión",
    desc: "Las sociedades de inversión son entidades financieras que reúnen recursos aportados por diversos inversionistas con el objetivo de invertirlos en una variedad de instrumentos financieros, como acciones, bonos o activos derivados, según una política de inversión definida. Funcionan como vehículos colectivos que permiten a pequeños y grandes inversionistas diversificar su portafolio, reducir riesgos y acceder a oportunidades que de forma individual serían difíciles de alcanzar.",
  },
  {
    title: "Sociedades de inversión de renta variable",
    desc: "Estas sociedades se especializan en invertir principalmente en acciones u otros instrumentos financieros cuya rentabilidad está ligada a la fluctuación del mercado bursátil. Su objetivo es generar rendimientos a través de la apreciación de capital y dividendos. Debido a la naturaleza variable de estos activos, suelen implicar un mayor riesgo, pero también ofrecen un potencial de retorno más elevado en comparación con inversiones de renta fija.",
  },
  {
    title: "Sociedades de inversión en instrumentos de deuda",
    desc: "Estas sociedades se enfocan en invertir en instrumentos de deuda como bonos, pagarés y otros títulos que generan un rendimiento fijo o predecible a lo largo del tiempo. Son una opción preferida por inversionistas que buscan estabilidad y un flujo constante de ingresos, ya que estos instrumentos suelen tener menor volatilidad y un perfil de riesgo más conservador que las inversiones en renta variable.",
  },
  {
    title: "Sociedades de inversión de capitales",
    desc: "Este tipo de sociedades invierte directamente en empresas privadas, proporcionando capital para su crecimiento y desarrollo a cambio de una participación accionaria. Su labor es fundamental para fomentar la innovación, expansión y creación de empleo en el sector privado, al tiempo que ofrece a los inversionistas la posibilidad de obtener rendimientos mediante la valorización y éxito de estas compañías.",
  },
  {
    title: "Sociedades de inversión de objeto limitado",
    desc: "Son sociedades con políticas de inversión más restrictivas o especializadas, dirigidas a un segmento particular del mercado o a ciertos tipos de activos. Suelen tener reglas claras sobre en qué instrumentos pueden invertir y en qué proporciones, lo que las hace atractivas para inversionistas con objetivos específicos o que buscan exposiciones controladas y especializadas.",
  },
  {
    title: "Prestación de servicios a las sociedades de inversión",
    desc: "Se trata de empresas que brindan soporte integral a las sociedades de inversión, cubriendo áreas operativas, administrativas y tecnológicas. Estos servicios son esenciales para garantizar la eficiencia, cumplimiento regulatorio y la correcta gestión de las inversiones, facilitando la operación diaria y el control adecuado de los fondos y sus activos.",
  },
  {
    title: "Sociedades operadoras de sociedades de inversión",
    desc: "Estas sociedades son responsables de administrar y gestionar el portafolio de inversiones de los fondos, tomando decisiones estratégicas sobre la compra y venta de activos. Su función es clave para optimizar los rendimientos y mitigar riesgos, operando conforme a la política de inversión establecida y las condiciones del mercado.",
  },
  {
    title: "Distribuidoras de acciones de sociedades de inversión",
    desc: "Actúan como intermediarios que facilitan la compra y venta de acciones o participaciones en sociedades de inversión, permitiendo que los inversionistas accedan a estos fondos. Su labor es vital para garantizar la liquidez y la correcta distribución de los instrumentos financieros en el mercado.",
  },
  {
    title: "Empresas de servicios a los intermediarios bursátiles",
    desc: "Proveen soluciones tecnológicas, administrativas y regulatorias a los intermediarios que operan en el mercado bursátil. Estas empresas aseguran que las operaciones se realicen de manera eficiente, segura y conforme a las normativas vigentes, facilitando la infraestructura necesaria para el buen funcionamiento del mercado.",
  },
  {
    title: "Bolsas de valores",
    desc: "Son mercados organizados y regulados donde se compran y venden valores financieros como acciones, bonos y otros instrumentos. Facilitan la negociación transparente y eficiente, proporcionando liquidez a los inversionistas y permitiendo a las empresas obtener financiamiento a través de la emisión de títulos.",
  },
  {
    title: "Instituciones para el depósito de valores",
    desc: "Estas instituciones actúan como custodios de valores financieros, encargándose de su resguardo y administración. Además, facilitan la compensación y liquidación de las operaciones bursátiles, garantizando que las transferencias de propiedad se realicen correctamente y en tiempo, lo que es fundamental para la seguridad y confianza en el mercado.",
  },
  {
    title: "Sociedades que administran sistemas para facilitar las operaciones con valores",
    desc: "Son entidades que desarrollan y operan plataformas tecnológicas que permiten la realización eficiente y segura de transacciones en el mercado de valores. Estas sociedades gestionan sistemas de negociación, registro y liquidación, apoyando la infraestructura digital necesaria para el mercado bursátil moderno.",
  },
  {
    title: "Instituciones calificadoras de valores",
    desc: "Estas instituciones evalúan el riesgo crediticio de emisores y emisiones de deuda, asignando calificaciones que indican la capacidad y disposición de pago. Su análisis es fundamental para inversionistas y mercados, ya que les permite tomar decisiones informadas sobre la calidad y seguridad de los instrumentos financieros",
  },
  {
    title: "Proveedores de precios",
    desc: "Son entidades encargadas de determinar y publicar precios justos y actualizados de instrumentos financieros, los cuales son usados para valuación, referencia y toma de decisiones. Su función es crucial para mantener la transparencia y eficiencia en el mercado, asegurando que los valores reflejen condiciones reales de oferta y demanda.",
  },
  {
    title: "Contrapartes centrales de valores",
    desc: "Estas contrapartes actúan como compradores y vendedores en todas las operaciones realizadas en el mercado, reduciendo el riesgo de contraparte. Al intermediar en las transacciones, aseguran que se cumplan los contratos y que los participantes estén protegidos ante incumplimientos, mejorando la estabilidad del sistema financiero.",
  },
  {
    title: "Casas de bolsa",
    desc: "Son intermediarios financieros autorizados para operar en los mercados de valores. Proveen servicios de compra y venta de instrumentos financieros para sus clientes, asesoría y administración de portafolios, desempeñando un papel clave en la conexión entre inversionistas y emisores.",
  },
  {
    title:
      "Oficinas de representación de casas de bolsa del exterior en México",
    desc: "Estas oficinas representan a intermediarios financieros extranjeros que operan en México, facilitando la interacción con el mercado local. Su presencia permite que inversionistas internacionales accedan y participen en la bolsa mexicana bajo los marcos regulatorios nacionales.",
  },
  {
    title: "Subsidiarias financieras en el exterior de casas de bolsa",
    desc: "Son entidades establecidas fuera del país por casas de bolsa mexicanas para extender sus operaciones en mercados internacionales. Funcionan bajo regulaciones locales del país donde están instaladas y buscan ampliar la oferta y servicios financieros hacia clientes globales.",
  },
  {
    title: "Asesores en inversiones",
    desc: "Profesionales que brindan recomendaciones personalizadas a inversionistas, ayudándolos a diseñar estrategias adecuadas según sus objetivos, perfil de riesgo y condiciones del mercado. Su asesoría es fundamental para tomar decisiones informadas y optimizar los resultados financieros.",
  },
  {
    title: "Sociedades emisoras de valores",
    desc: "Son empresas que colocan valores en el mercado para obtener financiamiento, ya sea a través de acciones, bonos u otros instrumentos. Facilitan la movilización de recursos para proyectos, expansión y operaciones, permitiendo a los inversionistas participar en el crecimiento empresarial.",
  },
  {
    title: "Sociedades anónimas bursátiles (SAB)",
    desc: "Estas sociedades son empresas que cotizan en bolsa y están sujetas a estrictos requisitos de transparencia, gobierno corporativo y regulación. Su cotización pública les permite acceder a capital del mercado, a la vez que ofrecen a los inversionistas seguridad y confianza en la gestión empresarial." },
  {
    title: "Sociedades anónimas promotoras de inversión Bursátil (SAPIB)",
    desc: "Estas sociedades promueven el acceso gradual de empresas medianas al mercado bursátil, facilitando su financiamiento y desarrollo. Funcionan como un puente entre las compañías en crecimiento y los mercados de valores, con marcos regulatorios flexibles para apoyar su expansión.",
  },
  {
    title: "Organismos Autorregulados",
    desc: "Son entidades formadas por los propios participantes del mercado para supervisar, regular y establecer reglas internas que garanticen la integridad y buen funcionamiento del sistema financiero. Actúan complementando la regulación oficial y fomentan prácticas responsables y transparentes.",
  },
];

const derivadosTemas = [
  {
    title: "Bolsas de contratos de derivados",
    desc: "Son mercados organizados donde se negocian contratos que derivan su valor de un activo subyacente, como futuros, opciones y swaps. Facilitan la cobertura de riesgos y la especulación, permitiendo a los participantes gestionar la volatilidad y optimizar sus posiciones financieras.",
  },
  {
    title: "Cámara de compensación",
    desc: "Entidad que actúa como intermediaria central entre compradores y vendedores de derivados, garantizando el cumplimiento de las obligaciones contractuales y reduciendo el riesgo crediticio. Su función es vital para mantener la confianza y estabilidad en el mercado de derivados.",
  },
  {
    title: "Socios Liquidadores",
    desc: "Son participantes que asumen la responsabilidad financiera en la cámara de compensación, garantizando la liquidez y cumplimiento de las operaciones. Su función es clave para la estabilidad del sistema, ya que actúan como respaldo ante posibles incumplimientos de otros participantes.",
  },
  {
    title: "Formadores de mercado",
    desc: "Agentes que ofrecen liquidez constante en el mercado de derivados al cotizar precios de compra y venta de manera continua. Su actividad es esencial para mantener la eficiencia, reducir spreads y facilitar la entrada y salida de posiciones para otros participantes.",
  },
  {
    title: "Operadores del mercado de contratos de derivados",
    desc: "Participantes que compran y venden derivados con fines de cobertura o especulación. Estos operadores aportan dinamismo y volumen al mercado, ayudando a establecer precios justos y a distribuir riesgos entre distintos agentes.",
  },
  {
    title: "Empresas que prestan servicios",
    desc: "Empresas especializadas que brindan soporte técnico, operativo y administrativo al mercado de derivados, incluyendo sistemas de negociación, gestión de riesgos y cumplimiento regulatorio. Su labor es fundamental para el correcto funcionamiento y desarrollo del mercado.",
  },
];

// Combinar todos los temas en una sola lista de datos
const data = [
  ...bursatilTemas.map((item, i) => ({
    ...item,
    img: `imagenes/bursatil${i + 1}.png`,
    sector: "Sector Bursátil",
  })),
  ...derivadosTemas.map((item, i) => ({
    ...item,
    img: `imagenes/derivados${i + 1}.png`,
    sector: "Sector de Derivados",
  })),
];

// Llenar las tarjetas por sector
const bursatilContainer = document.getElementById("bursatil-container");
const derivadosContainer = document.getElementById("derivados-container");

data.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-index", index);
  card.innerHTML = `<h3>${item.title}</h3>`;

  if (item.sector === "Sector Bursátil") {
    bursatilContainer.appendChild(card);
  } else {
    derivadosContainer.appendChild(card);
  }
});

// Modal y carrusel
let currentIndex = 0;

const modal = document.getElementById("myModal");
const title = document.getElementById("topicTitle");
const sector = document.getElementById("topicSector");
const desc = document.getElementById("topicDesc");
const image = document.getElementById("topicImage");

function showTopic(index) {
  const item = data[index];
  title.innerText = item.title;
  sector.innerText = item.sector;
  desc.innerText = item.desc;
  image.src = item.img;
  currentIndex = index;
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const index = parseInt(card.getAttribute("data-index"));
    showTopic(index);
    modal.style.display = "block";
  });
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

document.querySelector(".prev").onclick = () => {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  showTopic(currentIndex);
};

document.querySelector(".next").onclick = () => {
  currentIndex = (currentIndex + 1) % data.length;
  showTopic(currentIndex);
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
