import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsCodeArtifactBank: QuestionBank = {
  "id": "aws-codeartifact",
  "revision": 2,
  "contentId": "aws-codeartifact",
  "title": "AWS CodeArtifact",
  "questions": [
    {
      "id": "aws-codeartifact-101",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Paquetes y resolución",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué artefacto corresponde a CodeArtifact en este recorrido?",
      "options": [
        {
          "id": "a",
          "text": "Una librería versionada consumida por un gestor de paquetes.",
          "explanation": "Es distinto de una imagen de contenedor."
        },
        {
          "id": "b",
          "text": "Una task ECS en ejecución.",
          "explanation": "Eso es un workload."
        },
        {
          "id": "c",
          "text": "El conjunto de pods del cluster.",
          "explanation": "Esos recursos se administran en Kubernetes."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Es distinto de una imagen de contenedor.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html"
    },
    {
      "id": "aws-codeartifact-102",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Paquetes y resolución",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué distingue un upstream de una external connection?",
      "options": [
        {
          "id": "a",
          "text": "Ambos crean una VPC nueva.",
          "explanation": "No es su responsabilidad."
        },
        {
          "id": "b",
          "text": "External connection significa publicar automáticamente todos los paquetes privados.",
          "explanation": "No implica esa exposición."
        },
        {
          "id": "c",
          "text": "Upstream referencia otro repositorio CodeArtifact; la conexión externa referencia un repositorio público compatible.",
          "explanation": "Permiten fuentes distintas de resolución."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Permiten fuentes distintas de resolución.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html"
    },
    {
      "id": "aws-codeartifact-103",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Paquetes y resolución",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un nombre privado empieza a resolverse desde una fuente pública. ¿Qué riesgo revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Un fallo del certificado del ALB de producción.",
          "explanation": "No explica resolución de paquetes."
        },
        {
          "id": "b",
          "text": "Dependency confusion y controles de origen.",
          "explanation": "La procedencia es parte de la cadena de suministro."
        },
        {
          "id": "c",
          "text": "Solo el tamaño del archivo JAR.",
          "explanation": "No identifica la fuente elegida."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La procedencia es parte de la cadena de suministro.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/package-origin-controls.html"
    },
    {
      "id": "aws-codeartifact-104",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Paquetes y resolución",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué mejora la reproducibilidad del consumo?",
      "options": [
        {
          "id": "a",
          "text": "Fijar versiones y lockfile o mecanismo equivalente.",
          "explanation": "Evita resolver otro contenido en builds posteriores."
        },
        {
          "id": "b",
          "text": "Seleccionar siempre la versión más reciente disponible.",
          "explanation": "Puede cambiar entre builds."
        },
        {
          "id": "c",
          "text": "Borrar toda configuración del gestor.",
          "explanation": "No garantiza resolver las mismas dependencias."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Evita resolver otro contenido en builds posteriores.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html"
    },
    {
      "id": "aws-codeartifact-105",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Tokens y permisos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué usa el gestor para autenticarse ante CodeArtifact?",
      "options": [
        {
          "id": "a",
          "text": "La clave privada TLS de la aplicación.",
          "explanation": "No es la credencial del repositorio."
        },
        {
          "id": "b",
          "text": "El ID público del paquete como contraseña.",
          "explanation": "Identidad de paquete no autoriza acceso."
        },
        {
          "id": "c",
          "text": "Un token obtenido mediante identidad AWS autorizada.",
          "explanation": "Se configura según gestor y endpoint."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Se configura según gestor y endpoint.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html"
    },
    {
      "id": "aws-codeartifact-106",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Tokens y permisos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un build solo lee paquetes. ¿Qué permiso no debería recibir por comodidad?",
      "options": [
        {
          "id": "a",
          "text": "Obtención autorizada del endpoint.",
          "explanation": "Puede ser necesaria para configurar acceso."
        },
        {
          "id": "b",
          "text": "Administración y publicación de todos los repositorios.",
          "explanation": "No corresponde a su responsabilidad."
        },
        {
          "id": "c",
          "text": "Lectura del repositorio necesario.",
          "explanation": "Sí pertenece al flujo."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No corresponde a su responsabilidad.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/auth-and-access-control-permissions-reference.html"
    },
    {
      "id": "aws-codeartifact-107",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Tokens y permisos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Por qué revisar duración del token además de la sesión del rol?",
      "options": [
        {
          "id": "a",
          "text": "La vigencia del token puede configurarse de forma diferente.",
          "explanation": "Debe acotarse al proceso autorizado."
        },
        {
          "id": "b",
          "text": "Porque todo token dura exactamente un minuto.",
          "explanation": "No es la regla."
        },
        {
          "id": "c",
          "text": "Porque vencer el rol borra los paquetes.",
          "explanation": "No es el efecto."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Debe acotarse al proceso autorizado.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html"
    },
    {
      "id": "aws-codeartifact-108",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Tokens y permisos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "No puede obtenerse el token pese a poder leer un repositorio. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Solo publicar una nueva versión.",
          "explanation": "No concede los permisos faltantes."
        },
        {
          "id": "b",
          "text": "Abrir un Security Group a Internet para todo puerto.",
          "explanation": "No resuelve autorización IAM."
        },
        {
          "id": "c",
          "text": "GetAuthorizationToken y GetServiceBearerToken además de lectura.",
          "explanation": "Obtener credencial y consumir son operaciones distintas."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Obtener credencial y consumir son operaciones distintas.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/auth-and-access-control-permissions-reference.html"
    },
    {
      "id": "aws-codeartifact-109",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Build y mantenimiento",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El build final contiene el archivo de configuración del gestor con token. ¿Qué corrección corresponde?",
      "options": [
        {
          "id": "a",
          "text": "Hacer público el repositorio para que no se note.",
          "explanation": "Amplía acceso sin resolver filtración."
        },
        {
          "id": "b",
          "text": "Separar credenciales temporales del artefacto y revisar su exposición.",
          "explanation": "La credencial no debe distribuirse al runtime."
        },
        {
          "id": "c",
          "text": "Cambiar solo el nombre del archivo.",
          "explanation": "No retira el secreto."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La credencial no debe distribuirse al runtime.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html"
    },
    {
      "id": "aws-codeartifact-110",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Build y mantenimiento",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué probar un build en un entorno limpio?",
      "options": [
        {
          "id": "a",
          "text": "La caché local puede ocultar una dependencia que ya no se resuelve.",
          "explanation": "Permite verificar el canal de distribución real."
        },
        {
          "id": "b",
          "text": "Porque siempre mejora la velocidad.",
          "explanation": "Puede tardar más."
        },
        {
          "id": "c",
          "text": "Porque cambia automáticamente versiones publicadas.",
          "explanation": "No modifica por sí solo el repositorio."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Permite verificar el canal de distribución real.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html"
    },
    {
      "id": "aws-codeartifact-111",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Build y mantenimiento",
      "level": "básico",
      "skill": "concepto",
      "prompt": "Antes de retirar una versión vulnerable, ¿qué debes identificar?",
      "options": [
        {
          "id": "a",
          "text": "Solo el nombre del publicador original.",
          "explanation": "Es información insuficiente."
        },
        {
          "id": "b",
          "text": "La última IP de cada usuario del producto.",
          "explanation": "No identifica dependencias de build."
        },
        {
          "id": "c",
          "text": "Consumidores, lockfiles y una versión de sustitución.",
          "explanation": "La retirada tiene impacto sobre futuros builds."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La retirada tiene impacto sobre futuros builds.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html"
    },
    {
      "id": "aws-codeartifact-112",
      "revision": 2,
      "contentId": "aws-codeartifact",
      "topic": "Build y mantenimiento",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una dependencia funciona localmente y falla solo en CI. ¿Qué evidencia compararías?",
      "options": [
        {
          "id": "a",
          "text": "Únicamente la política de la base de datos.",
          "explanation": "No controla CodeArtifact."
        },
        {
          "id": "b",
          "text": "Rol, token, endpoint, namespace, versión y caché del runner.",
          "explanation": "El entorno de consumo puede diferir."
        },
        {
          "id": "c",
          "text": "Solo el digest de una imagen no relacionada.",
          "explanation": "No localiza resolución del paquete."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El entorno de consumo puede diferir.",
      "source": "https://docs.aws.amazon.com/codeartifact/latest/ug/auth-and-access-control-permissions-reference.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Paquetes y resolución",
      "description": "Comprueba mecanismos y decisiones de paquetes y resolución.",
      "questionIds": [
        "aws-codeartifact-101",
        "aws-codeartifact-102",
        "aws-codeartifact-103",
        "aws-codeartifact-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Tokens y permisos",
      "description": "Comprueba mecanismos y decisiones de tokens y permisos.",
      "questionIds": [
        "aws-codeartifact-105",
        "aws-codeartifact-106",
        "aws-codeartifact-107",
        "aws-codeartifact-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Build y mantenimiento",
      "description": "Comprueba mecanismos y decisiones de build y mantenimiento.",
      "questionIds": [
        "aws-codeartifact-109",
        "aws-codeartifact-110",
        "aws-codeartifact-111",
        "aws-codeartifact-112"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "4 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-codeartifact-103",
        "aws-codeartifact-104",
        "aws-codeartifact-107",
        "aws-codeartifact-108",
        "aws-codeartifact-111",
        "aws-codeartifact-112"
      ]
    }
  ]
};
