import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsCicdBank: QuestionBank = {
  "id": "aws-cicd",
  "revision": 2,
  "contentId": "aws-cicd",
  "title": "CI/CD en AWS",
  "questions": [
    {
      "id": "aws-cicd-101",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Flujo y servicios",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué responsabilidad central tiene CodePipeline?",
      "options": [
        {
          "id": "a",
          "text": "Coordinar stages, acciones y artefactos de entrega.",
          "explanation": "La construcción puede delegarse a otra acción."
        },
        {
          "id": "b",
          "text": "Compilar siempre todo lenguaje por sí mismo.",
          "explanation": "Es el papel del entorno de build."
        },
        {
          "id": "c",
          "text": "Guardar exclusivamente imágenes Docker.",
          "explanation": "ECR atiende ese tipo de artefacto."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La construcción puede delegarse a otra acción.",
      "source": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-102",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Flujo y servicios",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué resuelve CodeBuild?",
      "options": [
        {
          "id": "a",
          "text": "Modificar automáticamente las reglas de negocio.",
          "explanation": "No diseña la aplicación."
        },
        {
          "id": "b",
          "text": "Ser el DNS de producción.",
          "explanation": "No es un servicio DNS."
        },
        {
          "id": "c",
          "text": "Ejecutar comandos de construcción y producir artefactos.",
          "explanation": "Evita administrar servidores propios de build."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Evita administrar servidores propios de build.",
      "source": "https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-103",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Flujo y servicios",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué describe un buildspec?",
      "options": [
        {
          "id": "a",
          "text": "Los usuarios del user pool.",
          "explanation": "Es otra configuración."
        },
        {
          "id": "b",
          "text": "Comandos, fases y artefactos del build.",
          "explanation": "Se interpreta en el entorno CodeBuild."
        },
        {
          "id": "c",
          "text": "El contrato HTTP público de la API.",
          "explanation": "No es su propósito."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Se interpreta en el entorno CodeBuild.",
      "source": "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html"
    },
    {
      "id": "aws-cicd-104",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Flujo y servicios",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué describe AppSpec en CodeDeploy?",
      "options": [
        {
          "id": "a",
          "text": "Revisión, recursos o hooks de despliegue según la plataforma.",
          "explanation": "Es distinto de la especificación de build."
        },
        {
          "id": "b",
          "text": "Cómo compilar cada archivo fuente.",
          "explanation": "Eso corresponde al build."
        },
        {
          "id": "c",
          "text": "Los rangos CIDR globales.",
          "explanation": "No es una tabla de redes."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Es distinto de la especificación de build.",
      "source": "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html"
    },
    {
      "id": "aws-cicd-105",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Artefactos y permisos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué permite promover el mismo digest a staging y producción?",
      "options": [
        {
          "id": "a",
          "text": "Garantizar que todos los datos sean idénticos.",
          "explanation": "El digest no controla los datos."
        },
        {
          "id": "b",
          "text": "Evitar cualquier configuración de IAM.",
          "explanation": "Los permisos siguen siendo necesarios."
        },
        {
          "id": "c",
          "text": "Identificar el mismo contenido construido y validado.",
          "explanation": "La configuración de entorno puede diferir."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La configuración de entorno puede diferir.",
      "source": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-106",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Artefactos y permisos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué problema tiene recompilar desde una rama móvil en cada ambiente?",
      "options": [
        {
          "id": "a",
          "text": "Que el stage ya no admite HTTPS.",
          "explanation": "No se deriva del build."
        },
        {
          "id": "b",
          "text": "Puede producir artefactos distintos a partir de otra revisión o dependencias.",
          "explanation": "Rompe la identidad del objeto promovido."
        },
        {
          "id": "c",
          "text": "Que todas las imágenes desaparecen de ECR.",
          "explanation": "No es una consecuencia necesaria."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Rompe la identidad del objeto promovido.",
      "source": "https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-107",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Artefactos y permisos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué rol necesita publicar imágenes sin administrar la base de producción?",
      "options": [
        {
          "id": "a",
          "text": "Un rol de build acotado a sus artefactos y acciones.",
          "explanation": "Separa responsabilidades de build y deploy."
        },
        {
          "id": "b",
          "text": "Administrador compartido para simplificar.",
          "explanation": "Excede su necesidad."
        },
        {
          "id": "c",
          "text": "Usuario raíz de la aplicación.",
          "explanation": "No es una identidad apropiada."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Separa responsabilidades de build y deploy.",
      "source": "https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-108",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Artefactos y permisos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué hay que restringir al federar un CI externo por OIDC?",
      "options": [
        {
          "id": "a",
          "text": "Solo el nombre de la imagen.",
          "explanation": "No autoriza asumir el rol."
        },
        {
          "id": "b",
          "text": "El p95 de CPU del build.",
          "explanation": "No limita confianza."
        },
        {
          "id": "c",
          "text": "Trust policy: proveedor, audiencia y sujeto de repositorio o entorno.",
          "explanation": "Eliminar una key no basta si la confianza es abierta."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Eliminar una key no basta si la confianza es abierta.",
      "source": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-109",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Despliegue y reversión",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Por qué CodeDeploy requiere especificación según EC2, Lambda o ECS?",
      "options": [
        {
          "id": "a",
          "text": "Porque ninguna soporta versiones.",
          "explanation": "Sí existen revisiones y versiones."
        },
        {
          "id": "b",
          "text": "Cada plataforma despliega recursos y tráfico diferentes.",
          "explanation": "No comparten el mismo ciclo exacto."
        },
        {
          "id": "c",
          "text": "Porque todas ejecutan el mismo agente del sistema operativo.",
          "explanation": "No es así."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No comparten el mismo ciclo exacto.",
      "source": "https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-110",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Despliegue y reversión",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué busca un canary?",
      "options": [
        {
          "id": "a",
          "text": "Exponer una fracción y decidir con evidencia antes de ampliar.",
          "explanation": "Limita el impacto inicial."
        },
        {
          "id": "b",
          "text": "Enviar siempre todo el tráfico de inmediato.",
          "explanation": "No es un canary."
        },
        {
          "id": "c",
          "text": "Eliminar la versión anterior antes de verificar.",
          "explanation": "Reduce opciones de recuperación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Limita el impacto inicial.",
      "source": "https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-111",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Despliegue y reversión",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una migración destructiva impide volver a la versión previa. ¿Qué faltó?",
      "options": [
        {
          "id": "a",
          "text": "Otro tag latest.",
          "explanation": "No restaura el esquema."
        },
        {
          "id": "b",
          "text": "Una ventana de DNS más corta.",
          "explanation": "No corrige incompatibilidad de datos."
        },
        {
          "id": "c",
          "text": "Compatibilidad de datos y una estrategia de migración/reversión.",
          "explanation": "Guardar una imagen anterior no basta."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Guardar una imagen anterior no basta.",
      "source": "https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-112",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Despliegue y reversión",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debe mostrar una aprobación de producción útil?",
      "options": [
        {
          "id": "a",
          "text": "El token completo del rol.",
          "explanation": "No debe exponer credenciales."
        },
        {
          "id": "b",
          "text": "Artefacto, revisión, destino y resultados de validación.",
          "explanation": "La aprobación debe evaluar un cambio concreto."
        },
        {
          "id": "c",
          "text": "Solo un botón sin versión.",
          "explanation": "No permite revisar qué se publica."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La aprobación debe evaluar un cambio concreto.",
      "source": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-113",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Evidencia de entrega",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una acción termina en verde, pero la compra falla. ¿Qué conclusión es válida?",
      "options": [
        {
          "id": "a",
          "text": "El criterio técnico no cubría toda la operación representativa.",
          "explanation": "Hace falta verificación funcional y observación."
        },
        {
          "id": "b",
          "text": "La compra debe haber funcionado porque el pipeline lo dice.",
          "explanation": "Contradice la evidencia del servicio."
        },
        {
          "id": "c",
          "text": "Hay que ocultar el error al cliente.",
          "explanation": "No corrige la entrega."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Hace falta verificación funcional y observación.",
      "source": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    },
    {
      "id": "aws-cicd-114",
      "revision": 2,
      "contentId": "aws-cicd",
      "topic": "Evidencia de entrega",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué relación permite investigar una regresión?",
      "options": [
        {
          "id": "a",
          "text": "Solo la fecha del portátil.",
          "explanation": "No identifica versión completa."
        },
        {
          "id": "b",
          "text": "Solo el nombre de la cuenta.",
          "explanation": "No rastrea el cambio concreto."
        },
        {
          "id": "c",
          "text": "Commit, dependencias, digest, configuración, despliegue y métricas.",
          "explanation": "Une intención, artefacto y comportamiento."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Une intención, artefacto y comportamiento.",
      "source": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Flujo y servicios",
      "description": "Comprueba mecanismos y decisiones de flujo y servicios.",
      "questionIds": [
        "aws-cicd-101",
        "aws-cicd-102",
        "aws-cicd-103",
        "aws-cicd-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Artefactos y permisos",
      "description": "Comprueba mecanismos y decisiones de artefactos y permisos.",
      "questionIds": [
        "aws-cicd-105",
        "aws-cicd-106",
        "aws-cicd-107",
        "aws-cicd-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Despliegue y reversión",
      "description": "Comprueba mecanismos y decisiones de despliegue y reversión.",
      "questionIds": [
        "aws-cicd-109",
        "aws-cicd-110",
        "aws-cicd-111",
        "aws-cicd-112"
      ]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Evidencia de entrega",
      "description": "Comprueba mecanismos y decisiones de evidencia de entrega.",
      "questionIds": ["aws-cicd-113",
        "aws-cicd-114"]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-cicd-103",
        "aws-cicd-104",
        "aws-cicd-107",
        "aws-cicd-108",
        "aws-cicd-111",
        "aws-cicd-112",
        "aws-cicd-113",
        "aws-cicd-114"
      ]
    }
  ]
};
