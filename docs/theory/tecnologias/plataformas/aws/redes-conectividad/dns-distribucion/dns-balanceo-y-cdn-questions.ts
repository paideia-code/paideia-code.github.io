import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsDnsBank: QuestionBank = {
  id: 'aws-dns-load-balancing-cdn',
  revision: 1,
  contentId: 'aws-dns-load-balancing-cdn',
  title: 'DNS, balanceo y CDN',
  questions: [
    {
      id: 'aws-dns-001',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Capas de publicación',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué diferencia expresa mejor DNS, balanceo y CDN?',
      options: [
        {
          id: 'a',
          text: 'DNS resuelve nombres, el balanceador distribuye conexiones y la CDN puede responder desde caché.',
          explanation: 'Son capas relacionadas, pero resuelven problemas distintos.'
        },
        {
          id: 'b',
          text: 'Los tres son nombres diferentes para el mismo firewall.',
          explanation: 'No cumplen la misma función.'
        },
        {
          id: 'c',
          text: 'DNS siempre ejecuta la aplicación y CDN almacena bases de datos.',
          explanation: 'DNS no ejecuta aplicaciones y una CDN no sustituye una base de datos.'
        },
        {
          id: 'd',
          text: 'El balanceador solo resuelve nombres y DNS solo cifra.',
          explanation: 'Cada componente tiene responsabilidades diferentes.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La separación de capas permite diagnosticar y diseñar cada comportamiento.',
      source: 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html'
    },
    {
      id: 'aws-dns-002',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Route 53',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué influye en cuánto tiempo un resolver conserva una respuesta DNS?',
      options: [
        {
          id: 'a',
          text: 'El TTL del registro y la caché del resolver.',
          explanation: 'El TTL orienta cuánto tiempo puede reutilizarse la respuesta.'
        },
        {
          id: 'b',
          text: 'El tamaño de la instancia EC2.',
          explanation: 'La capacidad de cómputo no define el TTL.'
        },
        {
          id: 'c',
          text: 'El número de Security Groups.',
          explanation: 'No es una propiedad de las reglas de red.'
        },
        {
          id: 'd',
          text: 'La cantidad de objetos de S3.',
          explanation: 'No determina la caché DNS.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Un cambio de destino puede tardar en observarse debido a las cachés DNS.',
      source: 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html'
    },
    {
      id: 'aws-dns-003',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Route 53',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Cuándo resulta útil una política weighted de Route 53?',
      options: [
        {
          id: 'a',
          text: 'Para repartir respuestas según pesos, por ejemplo durante una migración gradual.',
          explanation: 'La política weighted permite controlar proporciones de respuesta.'
        },
        {
          id: 'b',
          text: 'Para cachear imágenes en edge.',
          explanation: 'Eso corresponde a una CDN.'
        },
        {
          id: 'c',
          text: 'Para abrir puertos del balanceador.',
          explanation: 'Los puertos se configuran en listeners y controles de red.'
        },
        {
          id: 'd',
          text: 'Para convertir una VPC en pública.',
          explanation: 'DNS no cambia el enrutamiento de una VPC.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Weighted es una política DNS, no un mecanismo de caché ni de firewall.',
      source: 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html'
    },
    {
      id: 'aws-dns-004',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Load Balancing',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué función cumple un health check de un balanceador?',
      options: [
        {
          id: 'a',
          text: 'Ayuda a retirar del reparto los destinos que no cumplen la comprobación definida.',
          explanation: 'El balanceador usa la salud configurada para seleccionar destinos.'
        },
        {
          id: 'b',
          text: 'Garantiza que toda la lógica de negocio funciona.',
          explanation: 'Un endpoint de salud puede ser más limitado que la operación completa.'
        },
        {
          id: 'c',
          text: 'Crea una ruta entre VPCs.',
          explanation: 'No es una función de routing.'
        },
        {
          id: 'd',
          text: 'Cifra automáticamente todos los datos de la aplicación.',
          explanation: 'TLS y cifrado requieren configuración propia.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El health check debe representar una condición útil para enviar tráfico.',
      source: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html'
    },
    {
      id: 'aws-dns-005',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Load Balancing',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué balanceador encaja mejor con routing HTTP por host o path?',
      options: [
        {
          id: 'a',
          text: 'Application Load Balancer.',
          explanation: 'ALB ofrece listeners y reglas para tráfico HTTP/HTTPS.'
        },
        {
          id: 'b',
          text: 'Network Load Balancer únicamente.',
          explanation: 'NLB se orienta a conexiones de red y no ofrece el mismo modelo HTTP.'
        },
        {
          id: 'c',
          text: 'NAT Gateway.',
          explanation: 'NAT ofrece salida traducida, no routing de aplicaciones.'
        },
        {
          id: 'd',
          text: 'Route 53 Resolver.',
          explanation: 'Resolver gestiona consultas DNS.'
        }
      ],
      correctIds: ['a'],
      explanation: 'ALB permite reglas basadas en host, path y otros atributos HTTP.',
      source: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html'
    },
    {
      id: 'aws-dns-006',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'CloudFront',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué ocurre normalmente en un cache hit de CloudFront?',
      options: [
        {
          id: 'a',
          text: 'La respuesta se entrega desde la ubicación edge sin consultar el origen para esa solicitud.',
          explanation: 'El objetivo de la caché es evitar el viaje al origen cuando el objeto es válido.'
        },
        {
          id: 'b',
          text: 'La solicitud siempre llega al ALB.',
          explanation: 'Eso describe un miss o una configuración sin caché efectiva.'
        },
        {
          id: 'c',
          text: 'Se crea una nueva VPC.',
          explanation: 'La caché no crea redes.'
        },
        {
          id: 'd',
          text: 'Se ignoran todas las políticas de acceso.',
          explanation: 'Las políticas siguen formando parte del diseño.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Un hit evita consultar el origen mientras el objeto y su clave de caché sean válidos.',
      source: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html'
    },
    {
      id: 'aws-dns-007',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'CloudFront',
      level: 'intermedio',
      skill: 'análisis',
      prompt: '¿Qué riesgo aparece al cachear una respuesta personalizada por usuario con una clave que ignora la identidad?',
      options: [
        {
          id: 'a',
          text: 'Un usuario puede recibir una respuesta generada para otro.',
          explanation: 'La clave debe distinguir las variantes que no pueden compartirse.'
        },
        {
          id: 'b',
          text: 'El TTL se vuelve automáticamente cero.',
          explanation: 'La clave no determina ese comportamiento.'
        },
        {
          id: 'c',
          text: 'El origen queda siempre cifrado.',
          explanation: 'El cifrado depende de TLS y configuración.'
        },
        {
          id: 'd',
          text: 'Route 53 deja de resolver el dominio.',
          explanation: 'DNS y clave de caché son capas distintas.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Una clave incompleta puede mezclar respuestas que deben permanecer separadas.',
      source: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cache-key-understand-cache-policy.html'
    },
    {
      id: 'aws-dns-008',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Composición',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué composición es razonable para un frontend estático y una API dinámica?',
      options: [
        {
          id: 'a',
          text: 'Route 53 → CloudFront → S3 para estáticos y CloudFront → ALB para la API.',
          explanation: 'Cada comportamiento puede usar el origen y caché adecuados.'
        },
        {
          id: 'b',
          text: 'Route 53 → NAT Gateway → S3.',
          explanation: 'NAT no es un punto de publicación ni balanceo.'
        },
        {
          id: 'c',
          text: 'CloudFront → NACL → Route 53.',
          explanation: 'El orden no representa las funciones de esos servicios.'
        },
        {
          id: 'd',
          text: 'ALB → Route 53 → EC2 sin listeners.',
          explanation: 'El balanceador requiere configuración de listeners y destinos.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La composición separa contenido cacheable y tráfico dinámico.',
      source: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html'
    },
    {
      id: 'aws-dns-009',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Diagnóstico',
      level: 'intermedio',
      skill: 'análisis',
      prompt: 'El dominio resuelve, pero el balanceador devuelve error. ¿Qué capa revisarías después?',
      options: [
        {
          id: 'a',
          text: 'Listener, reglas, health checks, Security Groups y destinos.',
          explanation: 'La resolución ya respondió; ahora se revisa el punto de entrada y su origen.'
        },
        {
          id: 'b',
          text: 'Solo el TTL de DNS.',
          explanation: 'El dominio ya resolvió; el problema puede estar después.'
        },
        {
          id: 'c',
          text: 'Solo la caché del navegador.',
          explanation: 'No explica por sí sola un error del balanceador.'
        },
        {
          id: 'd',
          text: 'El CIDR de otra región sin relación.',
          explanation: 'La revisión debe seguir el flujo real.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El diagnóstico avanza de DNS al punto de entrada y luego hacia los destinos.',
      source: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/elb-troubleshooting.html'
    },
    {
      id: 'aws-dns-010',
      revision: 1,
      contentId: 'aws-dns-load-balancing-cdn',
      topic: 'Diagnóstico',
      level: 'avanzado',
      skill: 'análisis',
      prompt: 'CloudFront entrega una versión antigua después de desplegar un archivo nuevo. ¿Qué revisarías?',
      options: [
        {
          id: 'a',
          text: 'TTL, clave de caché, invalidación, nombre versionado y que el origen tenga la versión nueva.',
          explanation: 'La respuesta antigua puede estar en caché o seguir presente en el origen.'
        },
        {
          id: 'b',
          text: 'Solo las reglas de NACL.',
          explanation: 'Una respuesta antigua no suele resolverse únicamente en NACL.'
        },
        {
          id: 'c',
          text: 'Cambiar el CIDR de la VPC.',
          explanation: 'El CIDR no controla la frescura de la caché.'
        },
        {
          id: 'd',
          text: 'Eliminar Route 53.',
          explanation: 'DNS no sustituye el diagnóstico de caché.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La frescura depende de la caché, la clave, el origen y la estrategia de invalidación.',
      source: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html'
    }
  ],
  presets: [
    {
      id: 'capas',
      title: '1 · Capas de publicación',
      description: 'Distingue DNS, balanceo y CDN.',
      questionIds: [
        'aws-dns-001', 'aws-dns-002', 'aws-dns-003', 'aws-dns-004'
      ]
    },
    {
      id: 'origenes',
      title: '2 · Orígenes y caché',
      description: 'Compara ALB, CloudFront y sus decisiones.',
      questionIds: [
        'aws-dns-005', 'aws-dns-006', 'aws-dns-007', 'aws-dns-008'
      ]
    },
    {
      id: 'diagnostico',
      title: '3 · Diagnóstico',
      description: 'Analiza fallos de entrada, origen y caché.',
      questionIds: ['aws-dns-009', 'aws-dns-010']
    },
    {
      id: 'integrador',
      title: '4 · Repaso integrador',
      description: 'Relaciona resolución, distribución y entrega.',
      questionIds: [
        'aws-dns-002', 'aws-dns-004', 'aws-dns-007', 'aws-dns-009'
      ]
    }
  ]
};
