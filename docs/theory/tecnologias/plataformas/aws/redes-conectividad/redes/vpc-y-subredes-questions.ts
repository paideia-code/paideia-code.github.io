import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsVpcBank: QuestionBank = {
  id: 'aws-vpc-subnets',
  revision: 1,
  contentId: 'aws-vpc-subnets',
  title: 'VPC y subredes',
  questions: [
    {
      id: 'aws-vpc-001',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'Modelo de red',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué relación describe correctamente una VPC y una subred?',
      options: [
        {
          id: 'a',
          text: 'La subred divide el rango de la VPC y pertenece a una AZ.',
          explanation: 'Una subred es un segmento del rango de la VPC asociado a una única AZ.'
        },
        {
          id: 'b',
          text: 'Una subred puede abarcar varias regiones.',
          explanation: 'La subred no cruza AZ ni regiones.'
        },
        {
          id: 'c',
          text: 'La VPC es solo una tabla de rutas.',
          explanation: 'La tabla de rutas es una pieza de la red, no la VPC completa.'
        },
        {
          id: 'd',
          text: 'Cada recurso crea automáticamente una VPC independiente.',
          explanation: 'Varios recursos pueden vivir en una misma VPC.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La VPC define el espacio de red y la subred lo divide dentro de una AZ.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html'
    },
    {
      id: 'aws-vpc-002',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'Modelo de red',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué aporta distribuir subredes de una misma capa en varias AZ?',
      options: [
        {
          id: 'a',
          text: 'Reduce el impacto de perder una AZ, si la aplicación y sus dependencias lo soportan.',
          explanation: 'La distribución aporta aislamiento zonal, pero no garantiza continuidad por sí sola.'
        },
        {
          id: 'b',
          text: 'Convierte automáticamente todas las subredes en públicas.',
          explanation: 'La exposición depende de rutas, direcciones y controles.'
        },
        {
          id: 'c',
          text: 'Elimina la necesidad de configurar rutas.',
          explanation: 'Cada subred sigue necesitando una tabla de rutas efectiva.'
        },
        {
          id: 'd',
          text: 'Evita cualquier fallo de datos.',
          explanation: 'La disponibilidad de datos requiere mecanismos propios.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Las AZ son límites de aislamiento; la arquitectura completa debe mantener capacidad y dependencias.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html'
    },
    {
      id: 'aws-vpc-003',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'CIDR y subredes',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Por qué revisar redes conectadas antes de elegir el CIDR de una VPC?',
      options: [
        {
          id: 'a',
          text: 'Para evitar solapamientos que dificulten el enrutamiento entre redes.',
          explanation: 'Los rangos solapados complican distinguir el destino del tráfico.'
        },
        {
          id: 'b',
          text: 'Para que la VPC tenga automáticamente una ruta a Internet.',
          explanation: 'El CIDR no crea gateways ni rutas públicas.'
        },
        {
          id: 'c',
          text: 'Para aumentar la velocidad de todas las instancias.',
          explanation: 'El rango no determina por sí solo el rendimiento.'
        },
        {
          id: 'd',
          text: 'Para reemplazar los Security Groups.',
          explanation: 'El CIDR y los controles de tráfico cumplen funciones distintas.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Una VPC debe poder comunicarse con redes futuras sin rangos ambiguos o solapados.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html'
    },
    {
      id: 'aws-vpc-004',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'Exposición pública',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué caracteriza principalmente a una subred pública?',
      options: [
        {
          id: 'a',
          text: 'Su tabla de rutas tiene una ruta hacia un Internet Gateway.',
          explanation: 'La ruta al Internet Gateway es la condición de enrutamiento que la hace pública.'
        },
        {
          id: 'b',
          text: 'Su nombre contiene la palabra pública.',
          explanation: 'El nombre no determina el comportamiento de red.'
        },
        {
          id: 'c',
          text: 'Todos sus recursos tienen una IP pública.',
          explanation: 'Una subred pública no obliga a exponer todos sus recursos.'
        },
        {
          id: 'd',
          text: 'No tiene controles de seguridad.',
          explanation: 'Los controles siguen siendo necesarios.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La clasificación depende del camino de salida definido por la tabla de rutas.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/route-table-options.html'
    },
    {
      id: 'aws-vpc-005',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'Exposición pública',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Una instancia tiene una ruta 0.0.0.0/0 hacia un Internet Gateway, pero no una dirección pública. ¿Qué conclusión es correcta?',
      options: [
        {
          id: 'a',
          text: 'La ruta existe, pero eso no demuestra que la instancia sea alcanzable desde Internet.',
          explanation: 'La dirección y los controles también participan en el acceso.'
        },
        {
          id: 'b',
          text: 'La instancia siempre acepta conexiones entrantes.',
          explanation: 'La ruta no autoriza conexiones ni crea una dirección pública.'
        },
        {
          id: 'c',
          text: 'La instancia está en una subred aislada.',
          explanation: 'La ruta hacia el IGW indica lo contrario sobre la subred.'
        },
        {
          id: 'd',
          text: 'La ruta solo sirve para tráfico de respuesta.',
          explanation: 'La ruta puede ser usada para destinos externos, según la configuración completa.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Ruta, direccionamiento y reglas deben alinearse; ningún elemento aislado prueba exposición completa.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html'
    },
    {
      id: 'aws-vpc-006',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'NAT y salida',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué problema resuelve normalmente un NAT Gateway para una subred privada?',
      options: [
        {
          id: 'a',
          text: 'Permite iniciar conexiones hacia Internet sin aceptar conexiones nuevas iniciadas desde Internet por ese camino.',
          explanation: 'El NAT proporciona salida traducida, no una entrada pública equivalente.'
        },
        {
          id: 'b',
          text: 'Publica automáticamente todos los servicios privados.',
          explanation: 'El objetivo del NAT es salida, no publicación de servicios.'
        },
        {
          id: 'c',
          text: 'Reemplaza las tablas de rutas.',
          explanation: 'La subred privada necesita una ruta hacia el NAT.'
        },
        {
          id: 'd',
          text: 'Conecta regiones sin configuración adicional.',
          explanation: 'NAT no es un mecanismo de conexión entre regiones.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El tráfico de salida sigue la ruta privada hacia el NAT y después hacia el gateway de Internet.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat.html'
    },
    {
      id: 'aws-vpc-007',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'NAT y salida',
      level: 'intermedio',
      skill: 'análisis',
      prompt: 'Una API privada no puede descargar una dependencia externa. ¿Qué cadena revisarías primero?',
      options: [
        {
          id: 'a',
          text: 'Ruta de la subred privada → NAT disponible en pública → Internet Gateway → controles y resolución.',
          explanation: 'El diagnóstico sigue el camino real y sus dependencias.'
        },
        {
          id: 'b',
          text: 'Solo el nombre de la VPC.',
          explanation: 'El nombre no aporta evidencia del flujo.'
        },
        {
          id: 'c',
          text: 'Solo la CPU de la instancia.',
          explanation: 'La CPU no demuestra conectividad.'
        },
        {
          id: 'd',
          text: 'La tabla de rutas pública sin revisar la privada.',
          explanation: 'La solicitud se origina en la tabla de rutas de la subred privada.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Hay que seguir la ruta desde el origen y comprobar cada dependencia del camino.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat.html'
    },
    {
      id: 'aws-vpc-008',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'Capas y aislamiento',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué separación es una práctica habitual para una aplicación web?',
      options: [
        {
          id: 'a',
          text: 'Entrada pública, aplicación privada y datos privados o aislados.',
          explanation: 'La separación limita exposición y expresa los flujos esperados.'
        },
        {
          id: 'b',
          text: 'Todos los componentes en una única subred pública.',
          explanation: 'Aumenta la exposición y mezcla responsabilidades.'
        },
        {
          id: 'c',
          text: 'Base de datos pública para facilitar el diagnóstico.',
          explanation: 'El diagnóstico no justifica exposición innecesaria.'
        },
        {
          id: 'd',
          text: 'NAT Gateway en cada subred privada sin ruta.',
          explanation: 'El NAT requiere un diseño de ruta y normalmente una ubicación pública.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Cada capa recibe solo el acceso que necesita para sus dependencias.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html'
    },
    {
      id: 'aws-vpc-009',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'Capas y aislamiento',
      level: 'intermedio',
      skill: 'análisis',
      prompt: 'Dos instancias de aplicación están en AZ distintas, pero dependen de una única base de datos zonal. ¿Qué se puede afirmar?',
      options: [
        {
          id: 'a',
          text: 'El cómputo tiene separación zonal, pero la operación aún tiene una dependencia común.',
          explanation: 'La disponibilidad se evalúa siguiendo toda la operación, incluidos los datos.'
        },
        {
          id: 'b',
          text: 'La aplicación tolera automáticamente cualquier fallo regional.',
          explanation: 'Dos AZ no prueban tolerancia regional ni de datos.'
        },
        {
          id: 'c',
          text: 'La base de datos es pública por estar en otra AZ.',
          explanation: 'La AZ no determina exposición pública.'
        },
        {
          id: 'd',
          text: 'No hay ningún beneficio en separar las instancias.',
          explanation: 'La separación puede reducir el impacto de perder una AZ de cómputo.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La redundancia debe cubrir también las dependencias críticas.',
      source: 'https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regional-services.html'
    },
    {
      id: 'aws-vpc-010',
      revision: 1,
      contentId: 'aws-vpc-subnets',
      topic: 'Diagnóstico de flujos',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué secuencia es más útil para diagnosticar que una aplicación no llega a una base de datos?',
      options: [
        {
          id: 'a',
          text: 'Resolver destino, revisar ruta, controles de origen y destino, puerto de escucha y respuesta.',
          explanation: 'La secuencia sigue el camino de red y evita atribuir el fallo a una sola capa.'
        },
        {
          id: 'b',
          text: 'Cambiar todas las reglas a permitir y dejarlo así.',
          explanation: 'Amplía el riesgo y no identifica la causa.'
        },
        {
          id: 'c',
          text: 'Recrear la VPC sin revisar evidencia.',
          explanation: 'Destruye contexto y no sustituye el diagnóstico.'
        },
        {
          id: 'd',
          text: 'Comprobar únicamente que ambos recursos tengan IP.',
          explanation: 'La dirección no demuestra ruta, permisos ni escucha.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La conectividad es una cadena de dependencias; el diagnóstico debe conservar esa estructura.',
      source: 'https://docs.aws.amazon.com/vpc/latest/reachability/what-is-reachability-analyzer.html'
    }
  ],
  presets: [
    {
      id: 'modelo-red',
      title: '1 · Modelo de VPC y subredes',
      description: 'Reconoce los límites y componentes principales de una red virtual.',
      questionIds: [
        'aws-vpc-001', 'aws-vpc-002', 'aws-vpc-003', 'aws-vpc-004'
      ]
    },
    {
      id: 'flujos-publicos-privados',
      title: '2 · Flujos públicos y privados',
      description: 'Aplica rutas, gateways y capas de exposición.',
      questionIds: [
        'aws-vpc-005', 'aws-vpc-006', 'aws-vpc-007', 'aws-vpc-008'
      ]
    },
    {
      id: 'decisiones-red',
      title: '3 · Decisiones y diagnóstico',
      description: 'Analiza dependencias zonales y diagnostica un flujo incompleto.',
      questionIds: ['aws-vpc-009', 'aws-vpc-010']
    },
    {
      id: 'integrador',
      title: '4 · Repaso integrador',
      description: 'Relaciona CIDR, rutas, NAT, aislamiento y diagnóstico.',
      questionIds: [
        'aws-vpc-003', 'aws-vpc-005', 'aws-vpc-007', 'aws-vpc-009'
      ]
    }
  ]
};
