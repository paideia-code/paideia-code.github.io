import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsIacBank: QuestionBank = {
  "id": "aws-iac",
  "revision": 2,
  "contentId": "aws-iac",
  "title": "Infraestructura como código",
  "questions": [
    {
      "id": "aws-iac-101",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CloudFormation y recursos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué es un stack de CloudFormation?",
      "options": [
        {
          "id": "a",
          "text": "Una unidad de recursos gestionados a partir de una template.",
          "explanation": "Permite aplicar su ciclo de vida como conjunto."
        },
        {
          "id": "b",
          "text": "Un archivo local de logs.",
          "explanation": "No representa recursos administrados."
        },
        {
          "id": "c",
          "text": "Una imagen Docker.",
          "explanation": "Es otro artefacto."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Permite aplicar su ciclo de vida como conjunto.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-iac-102",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CloudFormation y recursos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué distingue logical ID de physical ID?",
      "options": [
        {
          "id": "a",
          "text": "Solo el tamaño de la cadena de texto.",
          "explanation": "La distinción es de función."
        },
        {
          "id": "b",
          "text": "Son siempre el mismo valor.",
          "explanation": "No es obligatorio."
        },
        {
          "id": "c",
          "text": "Identidad en la definición frente al identificador del recurso real.",
          "explanation": "Ambas se relacionan en el estado del despliegue."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Ambas se relacionan en el estado del despliegue.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-iac-103",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CloudFormation y recursos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué intención expresa DeletionPolicy Retain?",
      "options": [
        {
          "id": "a",
          "text": "Impedir toda escritura de usuarios.",
          "explanation": "No es autorización de datos."
        },
        {
          "id": "b",
          "text": "Conservar el recurso al retirarlo según esa política.",
          "explanation": "Puede dejar gestión y coste posteriores."
        },
        {
          "id": "c",
          "text": "Hacer backup diario automáticamente.",
          "explanation": "No configura esa copia."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Puede dejar gestión y coste posteriores.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-iac-104",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CloudFormation y recursos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un cambio requiere reemplazo. ¿Qué protección debes revisar además de DeletionPolicy?",
      "options": [
        {
          "id": "a",
          "text": "UpdateReplacePolicy y migración de datos.",
          "explanation": "El reemplazo tiene un ciclo propio."
        },
        {
          "id": "b",
          "text": "Solo la descripción del stack.",
          "explanation": "No protege el dato."
        },
        {
          "id": "c",
          "text": "El color del recurso en el diagrama.",
          "explanation": "No modifica su comportamiento."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El reemplazo tiene un ciclo propio.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html"
    },
    {
      "id": "aws-iac-105",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "Cambios y deriva",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué permite revisar un change set?",
      "options": [
        {
          "id": "a",
          "text": "Todas las transacciones de usuarios futuras.",
          "explanation": "No predice negocio."
        },
        {
          "id": "b",
          "text": "Un backup exacto de toda la cuenta.",
          "explanation": "No es un backup."
        },
        {
          "id": "c",
          "text": "Altas, modificaciones y reemplazos propuestos antes de ejecutarlos.",
          "explanation": "Es una vista previa de cambio."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Es una vista previa de cambio.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html"
    },
    {
      "id": "aws-iac-106",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "Cambios y deriva",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Crear un change set garantiza que se ejecutará sin fallar?",
      "options": [
        {
          "id": "a",
          "text": "Sí, si todos los nombres están en inglés.",
          "explanation": "El idioma no garantiza el resultado."
        },
        {
          "id": "b",
          "text": "No; todavía pueden fallar permisos y condiciones durante la operación.",
          "explanation": "Vista previa y ejecución son distintas."
        },
        {
          "id": "c",
          "text": "Sí, siempre reserva toda capacidad por anticipado.",
          "explanation": "No debe asumirse."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Vista previa y ejecución son distintas.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html"
    },
    {
      "id": "aws-iac-107",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "Cambios y deriva",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se cambió un recurso por consola en una emergencia. ¿Cómo cerrarías el cambio?",
      "options": [
        {
          "id": "a",
          "text": "Investigar drift y reconciliar definición y estado real.",
          "explanation": "Evita perder el ajuste o sobrescribirlo después."
        },
        {
          "id": "b",
          "text": "Ignorarlo porque la consola tiene prioridad permanente.",
          "explanation": "La herramienta puede volver a modificarlo."
        },
        {
          "id": "c",
          "text": "Crear otro stack que controle la misma propiedad.",
          "explanation": "Multiplica propietarios y conflictos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Evita perder el ajuste o sobrescribirlo después.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html"
    },
    {
      "id": "aws-iac-108",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "Cambios y deriva",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué límite tiene drift detection?",
      "options": [
        {
          "id": "a",
          "text": "Garantiza que no existe ningún cambio fuera del código.",
          "explanation": "Es una conclusión excesiva."
        },
        {
          "id": "b",
          "text": "Solo funciona si se elimina antes el stack.",
          "explanation": "No requiere destruirlo."
        },
        {
          "id": "c",
          "text": "No cubre todas las propiedades ni recursos automáticamente.",
          "explanation": "La cobertura debe comprobarse."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La cobertura debe comprobarse.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html"
    },
    {
      "id": "aws-iac-109",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CDK y estado",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué produce cdk synth?",
      "options": [
        {
          "id": "a",
          "text": "Un snapshot de cada base.",
          "explanation": "No conserva automáticamente datos."
        },
        {
          "id": "b",
          "text": "Una definición CloudFormation sintetizada.",
          "explanation": "No ejecuta por sí sola todo el despliegue."
        },
        {
          "id": "c",
          "text": "Un cluster Kubernetes obligatorio.",
          "explanation": "No es el resultado general."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No ejecuta por sí sola todo el despliegue.",
      "source": "https://docs.aws.amazon.com/cdk/v2/guide/hello-world.html"
    },
    {
      "id": "aws-iac-110",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CDK y estado",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué revisar diff después de mover constructs?",
      "options": [
        {
          "id": "a",
          "text": "La identidad generada podría cambiar y causar reemplazos.",
          "explanation": "La estructura del código participa en la definición."
        },
        {
          "id": "b",
          "text": "Porque TypeScript altera siempre el contenido de S3.",
          "explanation": "No ocurre automáticamente."
        },
        {
          "id": "c",
          "text": "Para cambiar todas las claves KMS.",
          "explanation": "No se deriva de refactorizar."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La estructura del código participa en la definición.",
      "source": "https://docs.aws.amazon.com/cdk/v2/guide/hello-world.html"
    },
    {
      "id": "aws-iac-111",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CDK y estado",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué exige un state remoto de Terraform en un equipo?",
      "options": [
        {
          "id": "a",
          "text": "Subirlo públicamente para compartirlo.",
          "explanation": "Expone datos y control."
        },
        {
          "id": "b",
          "text": "Un mismo token raíz para cada persona.",
          "explanation": "Amplía permisos y reduce atribución."
        },
        {
          "id": "c",
          "text": "Protección, acceso y coordinación de escrituras.",
          "explanation": "El estado puede ser sensible."
        }
      ],
      "correctIds": ["c"],
      "explanation": "El estado puede ser sensible.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html"
    },
    {
      "id": "aws-iac-112",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "CDK y estado",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué implica administrar la misma propiedad con dos herramientas?",
      "options": [
        {
          "id": "a",
          "text": "Una transacción distribuida garantizada.",
          "explanation": "No coordina cambios automáticamente."
        },
        {
          "id": "b",
          "text": "Riesgo de sobrescrituras y propiedad ambigua.",
          "explanation": "Debe elegirse una responsabilidad clara."
        },
        {
          "id": "c",
          "text": "Un backup automático doble.",
          "explanation": "No crea backups."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Debe elegirse una responsabilidad clara.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html"
    },
    {
      "id": "aws-iac-113",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "Seguridad y recuperación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El rollback del stack terminó. ¿Se han revertido también todos los datos de usuarios?",
      "options": [
        {
          "id": "a",
          "text": "No; efectos y migraciones de datos requieren plan propio.",
          "explanation": "Infraestructura y negocio no son una sola transacción."
        },
        {
          "id": "b",
          "text": "Sí, CloudFormation deshace cualquier compra.",
          "explanation": "No tiene ese contrato."
        },
        {
          "id": "c",
          "text": "Sí, si el stack contiene IAM.",
          "explanation": "IAM no amplía el rollback a transacciones."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Infraestructura y negocio no son una sola transacción.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html"
    },
    {
      "id": "aws-iac-114",
      "revision": 2,
      "contentId": "aws-iac",
      "topic": "Seguridad y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué ocultar un parámetro no basta si se imprime en outputs?",
      "options": [
        {
          "id": "a",
          "text": "Porque el parámetro cambia de región.",
          "explanation": "No es el efecto."
        },
        {
          "id": "b",
          "text": "Porque ningún secreto puede usarse en AWS.",
          "explanation": "Puede usarse con controles adecuados."
        },
        {
          "id": "c",
          "text": "El valor sigue pudiendo exponerse por otra superficie.",
          "explanation": "Hay que controlar el flujo del secreto."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Hay que controlar el flujo del secreto.",
      "source": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · CloudFormation y recursos",
      "description": "Comprueba mecanismos y decisiones de cloudformation y recursos.",
      "questionIds": [
        "aws-iac-101",
        "aws-iac-102",
        "aws-iac-103",
        "aws-iac-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Cambios y deriva",
      "description": "Comprueba mecanismos y decisiones de cambios y deriva.",
      "questionIds": [
        "aws-iac-105",
        "aws-iac-106",
        "aws-iac-107",
        "aws-iac-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · CDK y estado",
      "description": "Comprueba mecanismos y decisiones de cdk y estado.",
      "questionIds": [
        "aws-iac-109",
        "aws-iac-110",
        "aws-iac-111",
        "aws-iac-112"
      ]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Seguridad y recuperación",
      "description": "Comprueba mecanismos y decisiones de seguridad y recuperación.",
      "questionIds": ["aws-iac-113",
        "aws-iac-114"]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-iac-103",
        "aws-iac-104",
        "aws-iac-107",
        "aws-iac-108",
        "aws-iac-111",
        "aws-iac-112",
        "aws-iac-113",
        "aws-iac-114"
      ]
    }
  ]
};
