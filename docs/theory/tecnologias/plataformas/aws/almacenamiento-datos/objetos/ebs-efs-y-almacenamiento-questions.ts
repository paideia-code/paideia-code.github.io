import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsStorageBank: QuestionBank = {
  "id": "aws-block-file-storage",
  "revision": 2,
  "contentId": "aws-block-file-storage",
  "title": "EBS, EFS y selección de almacenamiento",
  "questions": [
    {
      "id": "aws-block-file-storage-101",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Modelo y ubicación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "Un sistema necesita un dispositivo de bloques para el disco de EC2. ¿Qué evalúas?",
      "options": [
        {
          "id": "a",
          "text": "EBS.",
          "explanation": "Se presenta como almacenamiento de bloques."
        },
        {
          "id": "b",
          "text": "S3 como disco POSIX directo.",
          "explanation": "Su interfaz base es de objetos."
        },
        {
          "id": "c",
          "text": "Un topic SNS.",
          "explanation": "Distribuye mensajes, no bloques."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Se presenta como almacenamiento de bloques.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html"
    },
    {
      "id": "aws-block-file-storage-102",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Modelo y ubicación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Puede adjuntarse directamente un volumen EBS de AZ a a una instancia en AZ b?",
      "options": [
        {
          "id": "a",
          "text": "Sí, siempre que el SG permita NFS.",
          "explanation": "NFS no cambia el alcance zonal de EBS."
        },
        {
          "id": "b",
          "text": "Sí, cambiando el nombre del volumen.",
          "explanation": "El nombre no cambia ubicación."
        },
        {
          "id": "c",
          "text": "No; volumen e instancia deben estar en la misma AZ.",
          "explanation": "Puede recuperarse otro volumen desde snapshot."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Puede recuperarse otro volumen desde snapshot.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html"
    },
    {
      "id": "aws-block-file-storage-103",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Modelo y ubicación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Varias tareas Linux requieren un directorio compartido. ¿Qué evalúas primero?",
      "options": [
        {
          "id": "a",
          "text": "Un archivo local independiente por tarea.",
          "explanation": "No ofrece contenido compartido."
        },
        {
          "id": "b",
          "text": "EFS con montaje y controles adecuados.",
          "explanation": "Ofrece acceso a archivos compartidos."
        },
        {
          "id": "c",
          "text": "Un EBS común escrito sin coordinación.",
          "explanation": "Puede corromper datos y tiene restricciones."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Ofrece acceso a archivos compartidos.",
      "source": "https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html"
    },
    {
      "id": "aws-block-file-storage-104",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Modelo y ubicación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué debe comprobarse al elegir EFS One Zone frente a Regional?",
      "options": [
        {
          "id": "a",
          "text": "El dominio de fallo y objetivos de disponibilidad.",
          "explanation": "No toda modalidad EFS replica entre AZ."
        },
        {
          "id": "b",
          "text": "Solo que ambos usen nombres DNS.",
          "explanation": "El nombre no demuestra redundancia."
        },
        {
          "id": "c",
          "text": "Que One Zone sea automáticamente multirregión.",
          "explanation": "No describe su alcance."
        }
      ],
      "correctIds": ["a"],
      "explanation": "No toda modalidad EFS replica entre AZ.",
      "source": "https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html"
    },
    {
      "id": "aws-block-file-storage-105",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Rendimiento y concurrencia",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué mide throughput de almacenamiento?",
      "options": [
        {
          "id": "a",
          "text": "Número de operaciones sin considerar tamaño.",
          "explanation": "Eso corresponde a IOPS."
        },
        {
          "id": "b",
          "text": "Número de usuarios IAM.",
          "explanation": "No es una medida de disco."
        },
        {
          "id": "c",
          "text": "Cantidad de datos transferidos por unidad de tiempo.",
          "explanation": "Es diferente de contar operaciones."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Es diferente de contar operaciones.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html"
    },
    {
      "id": "aws-block-file-storage-106",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Rendimiento y concurrencia",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "CPU libre y alta espera de I/O sugieren revisar qué?",
      "options": [
        {
          "id": "a",
          "text": "Solo TTL de DNS.",
          "explanation": "No explica espera de disco."
        },
        {
          "id": "b",
          "text": "Latencia, cola, IOPS, throughput y límites de instancia/volumen.",
          "explanation": "El cuello puede estar en almacenamiento."
        },
        {
          "id": "c",
          "text": "Solo aumentar vCPU.",
          "explanation": "Puede no modificar I/O disponible."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El cuello puede estar en almacenamiento.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html"
    },
    {
      "id": "aws-block-file-storage-107",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Rendimiento y concurrencia",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Por qué Multi-Attach no convierte cualquier filesystem en compartido seguro?",
      "options": [
        {
          "id": "a",
          "text": "El software debe coordinar acceso concurrente de bloques.",
          "explanation": "El soporte de adjunto no aporta coherencia por sí solo."
        },
        {
          "id": "b",
          "text": "Porque cifra siempre con una clave distinta por proceso.",
          "explanation": "No es la razón del riesgo descrito."
        },
        {
          "id": "c",
          "text": "Porque cambia automáticamente archivos a objetos.",
          "explanation": "No cambia la interfaz de almacenamiento."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El soporte de adjunto no aporta coherencia por sí solo.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes-multi.html"
    },
    {
      "id": "aws-block-file-storage-108",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Rendimiento y concurrencia",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un montaje EFS falla aunque existe el filesystem. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Solo el tamaño del archivo.",
          "explanation": "No determina el montaje."
        },
        {
          "id": "b",
          "text": "El execution role de cualquier Lambda sin relación.",
          "explanation": "Debe seguirse la identidad y red del cliente real."
        },
        {
          "id": "c",
          "text": "DNS, mount target, red, SG y permisos del cliente.",
          "explanation": "Existir no acredita accesibilidad ni autorización."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Existir no acredita accesibilidad ni autorización.",
      "source": "https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html"
    },
    {
      "id": "aws-block-file-storage-109",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Recuperación y elección",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué evidencia falta si solo sabemos que existe un snapshot?",
      "options": [
        {
          "id": "a",
          "text": "Que el balanceador tenga HTTPS.",
          "explanation": "No verifica el contenido restaurado."
        },
        {
          "id": "b",
          "text": "Que puede restaurarse y ser utilizado por la aplicación.",
          "explanation": "La copia necesita un procedimiento verificable."
        },
        {
          "id": "c",
          "text": "Que tenga un nombre largo.",
          "explanation": "El nombre no prueba recuperación."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La copia necesita un procedimiento verificable.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html"
    },
    {
      "id": "aws-block-file-storage-110",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Recuperación y elección",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debes considerar para consistencia de un snapshot de una base autogestionada?",
      "options": [
        {
          "id": "a",
          "text": "Escrituras pendientes y procedimiento de la aplicación.",
          "explanation": "La memoria puede contener datos no persistidos."
        },
        {
          "id": "b",
          "text": "Solo el timestamp del archivo de backup.",
          "explanation": "No demuestra coherencia del motor."
        },
        {
          "id": "c",
          "text": "El número de subredes públicas.",
          "explanation": "No valida consistencia de datos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La memoria puede contener datos no persistidos.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html"
    },
    {
      "id": "aws-block-file-storage-111",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Recuperación y elección",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una instancia va a terminarse. ¿Qué decisión protege un volumen necesario?",
      "options": [
        {
          "id": "a",
          "text": "Asumir que todo EBS siempre se conserva.",
          "explanation": "La configuración puede eliminarlo."
        },
        {
          "id": "b",
          "text": "Asignar otra IP pública.",
          "explanation": "No cambia la política del volumen."
        },
        {
          "id": "c",
          "text": "Revisar DeleteOnTermination, copias y política de conservación.",
          "explanation": "El ciclo del volumen debe comprobarse explícitamente."
        }
      ],
      "correctIds": ["c"],
      "explanation": "El ciclo del volumen debe comprobarse explícitamente.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html"
    },
    {
      "id": "aws-block-file-storage-112",
      "revision": 2,
      "contentId": "aws-block-file-storage",
      "topic": "Recuperación y elección",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una aplicación solo descarga documentos por clave HTTP. ¿Qué interfaz encaja primero?",
      "options": [
        {
          "id": "a",
          "text": "EBS Multi-Attach a cada cliente.",
          "explanation": "No encaja con clientes por API de objetos."
        },
        {
          "id": "b",
          "text": "Objetos S3.",
          "explanation": "No requiere montar un filesystem."
        },
        {
          "id": "c",
          "text": "EFS obligatorio aunque nadie monte directorios.",
          "explanation": "Añade una interfaz innecesaria."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No requiere montar un filesystem.",
      "source": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Modelo y ubicación",
      "description": "Comprueba los mecanismos y las decisiones de modelo y ubicación.",
      "questionIds": [
        "aws-block-file-storage-101",
        "aws-block-file-storage-102",
        "aws-block-file-storage-103",
        "aws-block-file-storage-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Rendimiento y concurrencia",
      "description": "Comprueba los mecanismos y las decisiones de rendimiento y concurrencia.",
      "questionIds": [
        "aws-block-file-storage-105",
        "aws-block-file-storage-106",
        "aws-block-file-storage-107",
        "aws-block-file-storage-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Recuperación y elección",
      "description": "Comprueba los mecanismos y las decisiones de recuperación y elección.",
      "questionIds": [
        "aws-block-file-storage-109",
        "aws-block-file-storage-110",
        "aws-block-file-storage-111",
        "aws-block-file-storage-112"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "4 · Repaso integrador",
      "description": "Relaciona los subtemas mediante preguntas reutilizadas de los bloques anteriores.",
      "questionIds": [
        "aws-block-file-storage-103",
        "aws-block-file-storage-104",
        "aws-block-file-storage-107",
        "aws-block-file-storage-108",
        "aws-block-file-storage-111",
        "aws-block-file-storage-112"
      ]
    }
  ]
};
