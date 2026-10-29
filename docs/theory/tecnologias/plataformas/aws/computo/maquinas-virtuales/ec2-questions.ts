import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsEc2Bank: QuestionBank = {
  id: 'aws-ec2',
  revision: 1,
  contentId: 'aws-ec2',
  title: 'Amazon EC2',
  questions: [
    {
      id: 'aws-ec2-001',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Composición de una instancia',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué conjunto describe mejor una instancia EC2?',
      options: [
        {
          id: 'a',
          text: 'AMI, tipo de instancia, red, almacenamiento, identidad y configuración de arranque.',
          explanation: 'La instancia es una composición de decisiones, no solo CPU.'
        },
        {
          id: 'b',
          text: 'Solo una dirección IP pública.',
          explanation: 'La IP es una parte del acceso, no la instancia completa.'
        },
        {
          id: 'c',
          text: 'Solo un bucket S3 con una interfaz web.',
          explanation: 'S3 y EC2 cumplen funciones distintas.'
        },
        {
          id: 'd',
          text: 'Un Security Group sin sistema operativo.',
          explanation: 'El SG controla tráfico, no ejecuta la máquina.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La configuración de cómputo, red, datos y acceso determina el comportamiento de EC2.',
      source: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html'
    },
    {
      id: 'aws-ec2-002',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'AMI y tipos',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué papel cumple una AMI?',
      options: [
        {
          id: 'a',
          text: 'Sirve como plantilla de software y sistema para lanzar instancias.',
          explanation: 'La AMI define el punto de partida de la instancia.'
        },
        {
          id: 'b',
          text: 'Es el firewall de una subnet.',
          explanation: 'El control de red lo realizan SG y NACL.'
        },
        {
          id: 'c',
          text: 'Es una política de escalado.',
          explanation: 'El escalado se configura con ASG y políticas.'
        },
        {
          id: 'd',
          text: 'Es un registro DNS.',
          explanation: 'DNS es otra capa.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La AMI permite repetir una base de sistema y software.',
      source: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html'
    },
    {
      id: 'aws-ec2-003',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'AMI y tipos',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Una instancia tiene CPU baja, pero el disco está saturado. ¿Qué decisión sería más razonable?',
      options: [
        {
          id: 'a',
          text: 'Investigar volumen, IOPS y throughput antes de aumentar vCPU.',
          explanation: 'El cuello de botella puede estar en almacenamiento.'
        },
        {
          id: 'b',
          text: 'Elegir siempre la instancia más grande.',
          explanation: 'Más CPU no corrige necesariamente I/O.'
        },
        {
          id: 'c',
          text: 'Abrir todos los puertos.',
          explanation: 'La red no corrige el rendimiento de disco.'
        },
        {
          id: 'd',
          text: 'Cambiar el DNS.',
          explanation: 'DNS no corrige el almacenamiento local.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La métrica debe corresponder al recurso que limita la operación.',
      source: 'https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html'
    },
    {
      id: 'aws-ec2-004',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Acceso e identidad',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué mecanismo permite que una aplicación en EC2 use permisos AWS sin guardar claves de larga duración?',
      options: [
        {
          id: 'a',
          text: 'Un rol IAM asociado mediante un instance profile.',
          explanation: 'El rol entrega credenciales temporales al software autorizado.'
        },
        {
          id: 'b',
          text: 'Un puerto SSH público.',
          explanation: 'SSH es acceso administrativo, no una identidad IAM para la aplicación.'
        },
        {
          id: 'c',
          text: 'Una AMI pública.',
          explanation: 'Una imagen no concede permisos de API por sí sola.'
        },
        {
          id: 'd',
          text: 'Un registro Route 53.',
          explanation: 'DNS no entrega autorización IAM.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El instance profile expone las credenciales temporales del rol a la instancia.',
      source: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html'
    },
    {
      id: 'aws-ec2-005',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Acceso e identidad',
      level: 'intermedio',
      skill: 'análisis',
      prompt: '¿Por qué evitarías exponer SSH a Internet como primera opción de administración?',
      options: [
        {
          id: 'a',
          text: 'Porque aumenta la superficie de acceso y exige gestionar exposición, claves y restricciones.',
          explanation: 'Session Manager puede ofrecer una alternativa cuando el entorno está preparado.'
        },
        {
          id: 'b',
          text: 'Porque EC2 nunca admite administración remota.',
          explanation: 'EC2 admite varios mecanismos de administración.'
        },
        {
          id: 'c',
          text: 'Porque SSH modifica automáticamente el CIDR.',
          explanation: 'No es una propiedad de SSH.'
        },
        {
          id: 'd',
          text: 'Porque los Security Groups no afectan a SSH.',
          explanation: 'El SG puede controlar el puerto.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El acceso administrativo debe minimizar exposición y ser auditable.',
      source: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html'
    },
    {
      id: 'aws-ec2-006',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Ciclo de vida',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué diferencia conceptual existe entre detener y terminar una instancia?',
      options: [
        {
          id: 'a',
          text: 'Detener conserva la instancia para volver a iniciarla; terminar la elimina y puede eliminar volúmenes según su configuración.',
          explanation: 'Son acciones de ciclo de vida con efectos diferentes.'
        },
        {
          id: 'b',
          text: 'Son sinónimos exactos.',
          explanation: 'No tienen el mismo efecto.'
        },
        {
          id: 'c',
          text: 'Terminar solo reinicia el sistema operativo.',
          explanation: 'Eso se aproxima más a reboot.'
        },
        {
          id: 'd',
          text: 'Detener siempre elimina todos los datos.',
          explanation: 'Depende de los recursos y de su configuración.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Antes de terminar hay que revisar datos y volúmenes asociados.',
      source: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html'
    },
    {
      id: 'aws-ec2-007',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Almacenamiento',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué afirmación describe mejor un snapshot de EBS?',
      options: [
        {
          id: 'a',
          text: 'Es una copia puntual que debe poder restaurarse y comprobarse.',
          explanation: 'Un backup útil incluye recuperación verificada, no solo creación de la copia.'
        },
        {
          id: 'b',
          text: 'Es una réplica en memoria de la aplicación.',
          explanation: 'El snapshot pertenece al almacenamiento de bloques.'
        },
        {
          id: 'c',
          text: 'Sustituye siempre un diseño multi-AZ.',
          explanation: 'Copia y disponibilidad son decisiones distintas.'
        },
        {
          id: 'd',
          text: 'Solo contiene reglas de red.',
          explanation: 'Contiene estado del volumen.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La recuperación debe probarse con el objetivo de datos y tiempo correspondiente.',
      source: 'https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html'
    },
    {
      id: 'aws-ec2-008',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Inicialización',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué riesgo aparece si User Data se convierte en un script enorme y no versionado?',
      options: [
        {
          id: 'a',
          text: 'El arranque se vuelve difícil de probar, depurar y reproducir.',
          explanation: 'La configuración inicial debe mantenerse acotada o automatizarse con piezas versionadas.'
        },
        {
          id: 'b',
          text: 'La instancia obtiene más memoria automáticamente.',
          explanation: 'User Data no cambia el tipo de instancia.'
        },
        {
          id: 'c',
          text: 'La VPC se hace pública.',
          explanation: 'No modifica por sí solo la topología.'
        },
        {
          id: 'd',
          text: 'El rol IAM deja de existir.',
          explanation: 'Identidad y script son decisiones distintas.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La repetibilidad requiere imágenes, configuración y automatización revisables.',
      source: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html'
    },
    {
      id: 'aws-ec2-009',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Auto Scaling',
      level: 'intermedio',
      skill: 'concepto',
      prompt: '¿Qué mantiene conceptualmente un Auto Scaling Group?',
      options: [
        {
          id: 'a',
          text: 'Una capacidad deseada dentro de mínimos y máximos, reemplazando instancias no saludables según la configuración.',
          explanation: 'ASG gestiona capacidad y ciclo de las instancias del grupo.'
        },
        {
          id: 'b',
          text: 'Una única instancia que nunca se reemplaza.',
          explanation: 'El grupo puede añadir o reemplazar instancias.'
        },
        {
          id: 'c',
          text: 'Solo un registro DNS.',
          explanation: 'ASG opera sobre capacidad EC2.'
        },
        {
          id: 'd',
          text: 'Un backup de toda la VPC.',
          explanation: 'No es un mecanismo de backup.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El grupo combina capacidad, salud y políticas de ajuste.',
      source: 'https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html'
    },
    {
      id: 'aws-ec2-010',
      revision: 1,
      contentId: 'aws-ec2',
      topic: 'Decisión de servicio',
      level: 'avanzado',
      skill: 'análisis',
      prompt: '¿Qué razón justificaría elegir EC2 frente a una opción más gestionada?',
      options: [
        {
          id: 'a',
          text: 'Necesitar control del sistema operativo, software especializado o un patrón persistente que requiere esa flexibilidad.',
          explanation: 'EC2 es adecuada cuando el control compensa la operación adicional.'
        },
        {
          id: 'b',
          text: 'Querer evitar todo mantenimiento del sistema operativo.',
          explanation: 'En EC2 el equipo conserva responsabilidades del host.'
        },
        {
          id: 'c',
          text: 'Necesitar que ninguna instancia tenga red.',
          explanation: 'EC2 depende de configuración de red.'
        },
        {
          id: 'd',
          text: 'Querer usar únicamente eventos sin ejecución persistente.',
          explanation: 'Ese caso puede encajar mejor con funciones.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La elección debe comparar control, patrón de carga y esfuerzo operativo.',
      source: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html'
    }
  ],
  presets: [
    {
      id: 'modelo',
      title: '1 · Modelo de EC2',
      description: 'Reconoce AMI, tipos, red, almacenamiento e identidad.',
      questionIds: [
        'aws-ec2-001', 'aws-ec2-002', 'aws-ec2-003', 'aws-ec2-004'
      ]
    },
    {
      id: 'operacion',
      title: '2 · Operación segura',
      description: 'Aplica acceso, ciclo de vida, EBS e inicialización.',
      questionIds: [
        'aws-ec2-005', 'aws-ec2-006', 'aws-ec2-007', 'aws-ec2-008'
      ]
    },
    {
      id: 'capacidad',
      title: '3 · Capacidad y elección',
      description: 'Razonar sobre Auto Scaling y decisión de servicio.',
      questionIds: ['aws-ec2-009', 'aws-ec2-010']
    },
    {
      id: 'integrador',
      title: '4 · Repaso integrador',
      description: 'Relaciona composición, operación y control de capacidad.',
      questionIds: [
        'aws-ec2-003', 'aws-ec2-005', 'aws-ec2-007', 'aws-ec2-009'
      ]
    }
  ]
};
