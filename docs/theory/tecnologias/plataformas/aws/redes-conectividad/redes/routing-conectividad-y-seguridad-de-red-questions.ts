import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsRoutingBank: QuestionBank = {
  id: 'aws-routing-network-security',
  revision: 1,
  contentId: 'aws-routing-network-security',
  title: 'Routing, conectividad y seguridad de red',
  questions: [
    {
      id: 'aws-routing-001',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Tablas de rutas',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué determina una entrada de una tabla de rutas?',
      options: [
        {
          id: 'a',
          text: 'El destino del tráfico y el objetivo o siguiente salto.',
          explanation: 'Una ruta relaciona un destino con el camino que debe usar el tráfico.'
        },
        {
          id: 'b',
          text: 'La identidad que puede iniciar una solicitud.',
          explanation: 'Eso corresponde a controles de acceso, no a una ruta.'
        },
        {
          id: 'c',
          text: 'El proceso que escucha en el destino.',
          explanation: 'La tabla no crea procesos.'
        },
        {
          id: 'd',
          text: 'El precio de la transferencia.',
          explanation: 'La ruta puede afectar costes, pero no define una tarifa.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Las tablas de rutas deciden el camino; no autorizan por sí solas la comunicación.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/RouteTables.html'
    },
    {
      id: 'aws-routing-002',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Tablas de rutas',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué representa normalmente 0.0.0.0/0 en una tabla IPv4?',
      options: [
        {
          id: 'a',
          text: 'Un destino por defecto para direcciones que no coinciden con una ruta más específica.',
          explanation: 'Es el rango IPv4 por defecto, no un permiso universal.'
        },
        {
          id: 'b',
          text: 'Solo el tráfico interno de la VPC.',
          explanation: 'La comunicación interna se representa con la ruta local.'
        },
        {
          id: 'c',
          text: 'Un puerto TCP abierto.',
          explanation: 'Es un rango de direcciones, no un puerto.'
        },
        {
          id: 'd',
          text: 'Todas las direcciones IPv6.',
          explanation: 'IPv6 usa `::/0`.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La ruta por defecto se utiliza como último recurso de enrutamiento.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/route-table-options.html'
    },
    {
      id: 'aws-routing-003',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Security Groups',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Cuál es una característica de un Security Group?',
      options: [
        {
          id: 'a',
          text: 'Es stateful y se asocia a interfaces de red.',
          explanation: 'El SG conserva el estado de la conexión y controla interfaces.'
        },
        {
          id: 'b',
          text: 'Es stateless y se asocia únicamente a una región.',
          explanation: 'Ese no es el modelo del SG.'
        },
        {
          id: 'c',
          text: 'Solo puede bloquear y no permitir tráfico.',
          explanation: 'Sus reglas expresan permisos.'
        },
        {
          id: 'd',
          text: 'Sustituye las tablas de rutas.',
          explanation: 'Control y routing son capas distintas.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El SG es un firewall stateful asociado a interfaces de red.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html'
    },
    {
      id: 'aws-routing-004',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Security Groups',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Una aplicación debe aceptar tráfico solo desde un balanceador. ¿Qué origen expresa mejor el SG de la aplicación?',
      options: [
        {
          id: 'a',
          text: 'El Security Group del balanceador.',
          explanation: 'La referencia expresa la dependencia sin depender de IPs cambiantes.'
        },
        {
          id: 'b',
          text: '0.0.0.0/0 para el puerto de aplicación.',
          explanation: 'Eso expone el puerto a cualquier IPv4.'
        },
        {
          id: 'c',
          text: 'La IP pública del cliente final.',
          explanation: 'El cliente no es el origen directo de ese salto.'
        },
        {
          id: 'd',
          text: 'La tabla de rutas de la subred.',
          explanation: 'La tabla decide el camino, no el origen autorizado.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Los SG pueden referenciar la identidad de red del grupo origen.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html'
    },
    {
      id: 'aws-routing-005',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Network ACLs',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué diferencia esencial distingue una Network ACL de un Security Group?',
      options: [
        {
          id: 'a',
          text: 'La NACL se aplica a la subred y es stateless; el SG se aplica a interfaces y es stateful.',
          explanation: 'Son controles complementarios con ámbitos y estado diferentes.'
        },
        {
          id: 'b',
          text: 'La NACL reemplaza las rutas y el SG reemplaza DNS.',
          explanation: 'Ninguno cumple esas funciones.'
        },
        {
          id: 'c',
          text: 'La NACL solo se aplica a bases de datos.',
          explanation: 'Su ámbito es la subred.'
        },
        {
          id: 'd',
          text: 'El SG exige reglas de retorno explícitas.',
          explanation: 'El SG es stateful; la necesidad de retorno explícito caracteriza a una NACL stateless.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La diferencia de ámbito y estado cambia cómo se diseñan y diagnostican las reglas.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html'
    },
    {
      id: 'aws-routing-006',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Conectividad privada',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Una organización conecta muchas VPC y redes externas con una topología central. ¿Qué opción está diseñada para ese patrón?',
      options: [
        {
          id: 'a',
          text: 'Transit Gateway.',
          explanation: 'Transit Gateway centraliza conexiones entre múltiples redes.'
        },
        {
          id: 'b',
          text: 'Una única regla de Security Group.',
          explanation: 'Una regla no crea conectividad entre redes.'
        },
        {
          id: 'c',
          text: 'Un NAT Gateway como concentrador de VPC.',
          explanation: 'NAT ofrece traducción de salida, no esa topología.'
        },
        {
          id: 'd',
          text: 'Una NACL compartida entre regiones.',
          explanation: 'Las NACL no son un concentrador de redes.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Transit Gateway proporciona un punto de conexión central para varias redes.',
      source: 'https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html'
    },
    {
      id: 'aws-routing-007',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Conectividad privada',
      level: 'intermedio',
      skill: 'análisis',
      prompt: 'Una VPC tiene ruta hacia otra VPC mediante peering, pero la conexión falla. ¿Qué revisarías además de la ruta local?',
      options: [
        {
          id: 'a',
          text: 'Rutas de ambos lados, CIDR no solapados, SG, NACL y el proceso destino.',
          explanation: 'La conexión depende de ambos extremos y de los controles posteriores.'
        },
        {
          id: 'b',
          text: 'Solo el color asignado a la VPC.',
          explanation: 'La apariencia no aporta evidencia de conectividad.'
        },
        {
          id: 'c',
          text: 'Solo la cuota de instancias.',
          explanation: 'No explica un flujo rechazado.'
        },
        {
          id: 'd',
          text: 'Eliminar todos los controles.',
          explanation: 'Aumentaría la exposición sin identificar la causa.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El flujo entre VPC exige rutas bidireccionales y controles compatibles en ambos extremos.',
      source: 'https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html'
    },
    {
      id: 'aws-routing-008',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Diagnóstico',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Cuál es un orden razonable para diagnosticar que una aplicación no alcanza una base de datos?',
      options: [
        {
          id: 'a',
          text: 'Resolver destino, revisar rutas, gateways, SG/NACL, puerto de escucha y respuesta.',
          explanation: 'El orden sigue las capas del flujo.'
        },
        {
          id: 'b',
          text: 'Cambiar todas las reglas a permitir y reiniciar.',
          explanation: 'No identifica la capa defectuosa y aumenta el riesgo.'
        },
        {
          id: 'c',
          text: 'Revisar solo CPU de la aplicación.',
          explanation: 'CPU no demuestra conectividad.'
        },
        {
          id: 'd',
          text: 'Crear otra VPC sin recoger evidencia.',
          explanation: 'Destruye contexto y no es diagnóstico.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La conectividad se verifica de extremo a extremo, capa por capa.',
      source: 'https://docs.aws.amazon.com/vpc/latest/reachability/what-is-reachability-analyzer.html'
    },
    {
      id: 'aws-routing-009',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Diagnóstico',
      level: 'avanzado',
      skill: 'análisis',
      prompt: 'El SG permite TCP 8080, pero una conexión sigue fallando. ¿Qué conclusión es más prudente?',
      options: [
        {
          id: 'a',
          text: 'El SG no basta: todavía hay que comprobar ruta, NACL, destino y proceso que escucha.',
          explanation: 'Permitir un SG no demuestra que el flujo completo funcione.'
        },
        {
          id: 'b',
          text: 'La red funciona porque el puerto está permitido.',
          explanation: 'El permiso es solo una condición del flujo.'
        },
        {
          id: 'c',
          text: 'La NACL es siempre la causa.',
          explanation: 'Hay varias capas posibles.'
        },
        {
          id: 'd',
          text: 'Hay que abrir todos los puertos.',
          explanation: 'Eso no es un diagnóstico seguro.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El razonamiento debe conservar las capas que todavía no se han verificado.',
      source: 'https://docs.aws.amazon.com/vpc/latest/reachability/what-is-reachability-analyzer.html'
    },
    {
      id: 'aws-routing-010',
      revision: 1,
      contentId: 'aws-routing-network-security',
      topic: 'Decisiones de seguridad',
      level: 'avanzado',
      skill: 'análisis',
      prompt: '¿Qué diseño expresa mejor el mínimo acceso para una arquitectura de tres capas?',
      options: [
        {
          id: 'a',
          text: 'Entrada desde clientes al balanceador; aplicación desde el balanceador; datos desde la aplicación.',
          explanation: 'Cada salto permite solo la dependencia que necesita.'
        },
        {
          id: 'b',
          text: 'Clientes directamente a la base de datos y a la aplicación.',
          explanation: 'Elimina aislamiento entre capas.'
        },
        {
          id: 'c',
          text: 'Todos los grupos permiten todos los puertos internos.',
          explanation: 'Amplía innecesariamente la superficie de ataque.'
        },
        {
          id: 'd',
          text: 'NACL abierta y SG inexistentes.',
          explanation: 'Retira controles sin justificar el flujo.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La segmentación conserva el flujo requerido y reduce accesos laterales.',
      source: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html'
    }
  ],
  presets: [
    {
      id: 'rutas',
      title: '1 · Rutas y controles',
      description: 'Distingue tablas de rutas, Security Groups y Network ACLs.',
      questionIds: [
        'aws-routing-001', 'aws-routing-002', 'aws-routing-003', 'aws-routing-005'
      ]
    },
    {
      id: 'conectividad',
      title: '2 · Conectividad privada',
      description: 'Compara mecanismos de conexión y sus verificaciones.',
      questionIds: ['aws-routing-004', 'aws-routing-006', 'aws-routing-007']
    },
    {
      id: 'diagnostico',
      title: '3 · Diagnóstico y mínimo acceso',
      description: 'Analiza fallos de flujo y decisiones de seguridad.',
      questionIds: ['aws-routing-008', 'aws-routing-009', 'aws-routing-010']
    },
    {
      id: 'integrador',
      title: '4 · Repaso integrador',
      description: 'Relaciona routing, controles y conectividad entre redes.',
      questionIds: [
        'aws-routing-002', 'aws-routing-005', 'aws-routing-007', 'aws-routing-009'
      ]
    }
  ]
};
