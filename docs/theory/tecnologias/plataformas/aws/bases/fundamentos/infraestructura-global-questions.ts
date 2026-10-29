import type { Level, Question, QuestionBank } from '@site/src/lib/learning/types';
const contentId = 'aws-global-infrastructure';
const sources = {
  regions: 'https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regions.html',
  zones: 'https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/availability-zones.html',
  zonal: 'https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/zonal-services.html',
  regional: 'https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regional-services.html',
  global: 'https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html',
  selection: 'https://aws.amazon.com/blogs/architecture/what-to-consider-when-selecting-a-region-for-your-workloads/'
};
type Draft = {
  id: string;
  topic: string;
  level: Level;
  skill: Question['skill'];
  prompt: string;
  answer: string;
  wrong: [
    string,
    string
  ][];
  explanation: string;
  source: keyof typeof sources;
};
function question(draft: Draft): Question {
  return {
    id: draft.id,
    revision: 1,
    contentId,
    topic: draft.topic,
    level: draft.level,
    skill: draft.skill,
    prompt: draft.prompt,
    options: [
      {
        id: 'a',
        text: draft.answer,
        explanation: draft.explanation
      },
      ...draft.wrong.map(([text, explanation], index) => ({
        id: String.fromCharCode(98 + index),
        text,
        explanation
      }))
    ],
    correctIds: ['a'],
    explanation: draft.explanation,
    source: sources[draft.source]
  };
}
const questions: Question[] = [
  question({
    id: 'aws-infra-001',
    topic: 'Infraestructura y aislamiento',
    level: 'básico',
    skill: 'concepto',
    prompt: '¿Qué relación describe la organización de regiones, AZ y centros de datos?',
    answer: 'Una región contiene varias AZ y cada AZ puede contener uno o más centros de datos.',
    wrong: [
      ['Cada AZ contiene regiones que comparten un centro de datos.', 'Las AZ son ubicaciones dentro de una región; la jerarquía está invertida.'], ['Cada región y cada AZ identifican siempre un único edificio.', 'Ni región ni AZ son equivalentes obligatoriamente a un único edificio.'], ['Una AZ agrupa los centros de datos de todas las regiones.', 'Una AZ pertenece a una región concreta.']
    ],
    explanation: 'La región agrupa AZ físicamente separadas, y una AZ puede estar formada por varios centros de datos.',
    source: 'zones'
  }),
  question({
    id: 'aws-infra-002',
    topic: 'Infraestructura y aislamiento',
    level: 'básico',
    skill: 'concepto',
    prompt: 'Un sistema utiliza dos AZ de una misma región. ¿Cómo se describe esa distribución?',
    answer: 'Varias AZ dentro de una sola región.',
    wrong: [
      ['Dos regiones, porque cada AZ constituye una región independiente.', 'Las AZ son ubicaciones separadas dentro de la región.'], ['Una única ubicación física, porque comparte el código de región.', 'La pertenencia a una región no elimina la separación entre sus AZ.'], ['Una distribución global que ya incluye todas las regiones.', 'Utilizar varias AZ no despliega componentes en otras regiones.']
    ],
    explanation: 'La separación entre AZ y la separación entre regiones corresponden a niveles distintos.',
    source: 'regions'
  }),
  question({
    id: 'aws-infra-003',
    topic: 'Infraestructura y aislamiento',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'Dos AZ están físicamente separadas y conectadas por redes de baja latencia. ¿Qué propósito combina ese diseño?',
    answer: 'Reducir fallos de infraestructura compartidos y permitir comunicación entre componentes distribuidos.',
    wrong: [
      ['Convertirlas en una única ubicación sin aislamiento.', 'La conectividad no implica compartir la misma infraestructura física.'], ['Evitar que cualquier recurso de una AZ se comunique con otra.', 'Las AZ tienen conectividad; la separación no implica aislamiento total de red.'], ['Replicar automáticamente todos los recursos del cliente.', 'La conectividad y el aislamiento no especifican cómo se replica cada recurso.']
    ],
    explanation: 'Separación física y conectividad cumplen funciones complementarias; la arquitectura debe aprovechar ambas.',
    source: 'zones'
  }),
  question({
    id: 'aws-infra-004',
    topic: 'Infraestructura y aislamiento',
    level: 'intermedio',
    skill: 'análisis',
    prompt: 'Se duplican los servidores de una aplicación, pero todos quedan en la misma AZ. ¿Qué riesgo de ubicación permanece?',
    answer: 'Un incidente que afecte esa AZ podría afectar simultáneamente a todos esos servidores.',
    wrong: [
      ['El número de servidores crea por sí solo varias AZ.', 'Crear más recursos no cambia su ubicación zonal.'], ['Cada servidor pasa a estar en una región diferente.', 'La distribución descrita sigue concentrada en una AZ.'], ['La conectividad entre AZ traslada automáticamente algunos servidores.', 'La red entre zonas no determina un traslado automático de recursos.']
    ],
    explanation: 'La cantidad de recursos y la distribución de sus dominios de fallo son propiedades distintas.',
    source: 'zonal'
  }),
  question({
    id: 'aws-infra-005',
    topic: 'Infraestructura y aislamiento',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Un cambio defectuoso de la aplicación se publica simultáneamente en dos AZ y afecta a ambas. ¿Qué demuestra el caso?',
    answer: 'La separación física no elimina una causa de fallo compartida introducida por el software.',
    wrong: [
      ['Las dos AZ necesariamente están en el mismo centro de datos.', 'Un defecto distribuido puede afectar ubicaciones físicamente separadas.'], ['La separación entre AZ carece de utilidad frente a fallos de infraestructura.', 'El caso analiza un cambio de software compartido, no todos los tipos de fallo.'], ['El fallo de una región es la única explicación posible.', 'El enunciado identifica el cambio defectuoso como causa compartida.']
    ],
    explanation: 'Hay que distinguir los incidentes que limita la infraestructura de los que puede introducir la aplicación.',
    source: 'zonal'
  }),
  question({
    id: 'aws-infra-006',
    topic: 'Infraestructura y aislamiento',
    level: 'intermedio',
    skill: 'análisis',
    prompt: '¿Qué información ayuda a identificar un dominio de fallo compartido entre componentes?',
    answer: 'Su ubicación y las dependencias que podrían verse afectadas por una misma causa.',
    wrong: [
      ['Solo si utilizan servicios con nombres comerciales distintos.', 'Servicios diferentes pueden mantener una dependencia o ubicación compartida.'], ['Solo si pertenecen a la misma región.', 'El dato regional no describe toda la separación entre AZ ni las dependencias de aplicación.'], ['Solo si sus interfaces de administración son globales.', 'El alcance de esas interfaces no describe por sí solo las causas de fallo de los componentes.']
    ],
    explanation: 'Un dominio de fallo se analiza por componentes que pueden quedar afectados por el mismo incidente.',
    source: 'zones'
  }),
  question({
    id: 'aws-infra-007',
    topic: 'Alcance y distribución',
    level: 'básico',
    skill: 'concepto',
    prompt: '¿Qué expresa el alcance zonal de un recurso?',
    answer: 'Que está vinculado a una AZ concreta.',
    wrong: [
      ['Que tiene copias operativas en todas las AZ de la región.', 'El alcance zonal no describe una réplica en cada zona.'], ['Que solo puede ser administrado desde dentro de su centro de datos.', 'La ubicación del recurso no determina desde dónde se administra.'], ['Que se define de forma independiente en todas las regiones.', 'Eso no corresponde al alcance zonal.']
    ],
    explanation: 'El alcance ayuda a ubicar el recurso; su accesibilidad y recuperación requieren análisis adicional.',
    source: 'zonal'
  }),
  question({
    id: 'aws-infra-008',
    topic: 'Alcance y distribución',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'La API de administración de un servicio tiene un endpoint regional. ¿Qué información falta para conocer la distribución de un recurso concreto?',
    answer: 'Dónde se ejecuta o almacena sus datos y qué configuración determina esa distribución.',
    wrong: [
      ['Ninguna: la dirección regional demuestra una copia en cada AZ.', 'Una interfaz regional puede administrar recursos zonales.'], ['Solo cuántas ubicaciones de clientes pueden acceder al endpoint.', 'La accesibilidad de una interfaz no indica dónde se ejecutan sus recursos.'], ['Solo si los clientes están distribuidos entre AZ.', 'La ubicación de los clientes no determina la distribución de los recursos administrados.']
    ],
    explanation: 'La entrada de administración y la distribución física del recurso son propiedades diferentes.',
    source: 'zonal'
  }),
  question({
    id: 'aws-infra-009',
    topic: 'Alcance y distribución',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Un servicio se describe como global y su documentación sitúa ciertas funciones de administración en una región. ¿Qué interpretación es adecuada?',
    answer: 'El alcance global puede coexistir con dependencias regionales de determinadas funciones.',
    wrong: [
      ['La documentación es necesariamente contradictoria.', 'Global no significa que cada función sea independiente de cualquier región.'], ['Todos sus recursos son zonales porque existe una función regional.', 'La ubicación de una función no redefine por sí sola el alcance de todo el servicio.'], ['El servicio mantiene obligatoriamente una configuración independiente por región.', 'Eso no se deduce del alcance global ni de una dependencia regional.']
    ],
    explanation: 'Hay que examinar por separado el alcance del servicio y la distribución de sus funciones.',
    source: 'global'
  }),
  question({
    id: 'aws-infra-010',
    topic: 'Alcance y distribución',
    level: 'intermedio',
    skill: 'análisis',
    prompt: 'Una aplicación en AZ B accede a un almacén que existe solo en AZ A. ¿Qué demuestra esa comunicación?',
    answer: 'Que el almacén es accesible desde AZ B, sin demostrar que exista otra copia allí.',
    wrong: [
      ['Que el almacén ya está replicado en AZ B.', 'Acceder por red no equivale a mantener una réplica.'], ['Que el almacén ha dejado de depender de AZ A.', 'El enunciado mantiene la ubicación del almacén únicamente en AZ A.'], ['Que AZ A y AZ B pertenecen necesariamente a regiones diferentes.', 'Dos AZ pueden comunicarse dentro de la misma región.']
    ],
    explanation: 'Accesibilidad y distribución responden a preguntas distintas.',
    source: 'zones'
  }),
  question({
    id: 'aws-infra-011',
    topic: 'Alcance y distribución',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'Debes evaluar un recurso descrito como regional. ¿Qué revisión evita atribuirle una recuperación no demostrada?',
    answer: 'Consultar qué se distribuye, cómo se configura y qué sucede ante un fallo.',
    wrong: [
      ['Dar por hecho que regional significa recuperación instantánea de cualquier operación.', 'El alcance no proporciona esa garantía.'], ['Comprobar únicamente el código de región del nombre del recurso.', 'Ese código no documenta su distribución ni su recuperación.'], ['Suponer que cualquier acceso desde otra AZ prueba la continuidad.', 'Una comunicación correcta no demuestra comportamiento ante fallos.']
    ],
    explanation: 'Las características de distribución y recuperación deben verificarse en la arquitectura y configuración del servicio.',
    source: 'regional'
  }),
  question({
    id: 'aws-infra-012',
    topic: 'Alcance y distribución',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Un recurso regional contiene los datos de una aplicación. Se quiere disponer de ellos en otra región. ¿Qué debe comprobar el equipo?',
    answer: 'Qué mecanismo de copia o replicación utilizará y cómo se integrará en la aplicación.',
    wrong: [
      ['Solo que AWS tenga otra región, porque eso ya crea una copia utilizable.', 'La existencia de otra región no replica los recursos del cliente.'], ['Solo que ambas regiones compartan proveedor.', 'Compartir proveedor no define la distribución de esos datos.'], ['Solo que el recurso original tenga una dirección regional.', 'La dirección original no configura la presencia de datos en otra región.']
    ],
    explanation: 'La distribución entre regiones requiere mecanismos explícitos y decisiones de arquitectura.',
    source: 'regions'
  }),
  question({
    id: 'aws-infra-013',
    topic: 'Control y operación',
    level: 'básico',
    skill: 'concepto',
    prompt: '¿Qué diferencia expresa la separación entre plano de control y plano de datos?',
    answer: 'Administrar recursos y ejecutar el trabajo habitual del servicio son funciones distintas.',
    wrong: [
      ['El plano de control siempre está en otra cuenta.', 'La distinción es funcional; no impone esa ubicación entre cuentas.'], ['El plano de datos se dedica únicamente a crear recursos.', 'La creación corresponde a la administración, no al trabajo habitual descrito.'], ['Ambos términos identifican dos AZ elegidas por el cliente.', 'Los planos no son nombres de zonas geográficas.']
    ],
    explanation: 'La administración crea o modifica recursos; la operación ejecuta su función habitual.',
    source: 'global'
  }),
  question({
    id: 'aws-infra-014',
    topic: 'Control y operación',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'Un equipo cambia la configuración de un recurso mediante la API del servicio. ¿Qué función está utilizando?',
    answer: 'Una función de administración del plano de control.',
    wrong: [
      ['Una réplica física de los datos entre AZ.', 'Modificar configuración no describe por sí solo un mecanismo de replicación.'], ['Una función del plano de datos por el solo hecho de utilizar una API.', 'También hay APIs de administración; usar una API no determina el plano.'], ['Una operación global por el solo hecho de ser remota.', 'El acceso remoto no determina el alcance global.']
    ],
    explanation: 'La función realizada es administrar la configuración, aunque se invoque de forma remota.',
    source: 'zonal'
  }),
  question({
    id: 'aws-infra-015',
    topic: 'Control y operación',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'Una operación utiliza un recurso ya configurado para procesar su trabajo habitual. ¿Qué información describe el enunciado?',
    answer: 'Una función de operación, correspondiente al plano de datos.',
    wrong: [
      ['La creación de otra AZ en el plano de control.', 'No se describe la creación de infraestructura o recursos.'], ['Una modificación de configuración por estar usando el recurso.', 'Utilizar un recurso no equivale a modificar su configuración.'], ['La independencia total de cualquier función de administración.', 'Que una operación pertenezca a un plano no demuestra todas sus dependencias.']
    ],
    explanation: 'La clasificación describe la función que se está ejecutando, sin atribuir garantías adicionales.',
    source: 'global'
  }),
  question({
    id: 'aws-infra-016',
    topic: 'Control y operación',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'No se puede modificar la configuración de un servicio. Solo con ese dato, ¿qué puede concluirse sobre el trabajo habitual de sus recursos?',
    answer: 'Hay que comprobarlo por separado; el fallo de administración no demuestra por sí solo el estado de todas las operaciones.',
    wrong: [
      ['Toda operación sigue funcionando necesariamente.', 'La separación de funciones no permite prometer continuidad sin más información.'], ['Todo recurso dejó necesariamente de funcionar.', 'El dato se refiere a administración y no demuestra ese fallo completo.'], ['Todos los recursos cambiaron de región.', 'Una dificultad de administración no describe una migración.']
    ],
    explanation: 'Las funciones y distribuciones pueden ser distintas; las conclusiones necesitan evidencia sobre cada una.',
    source: 'global'
  }),
  question({
    id: 'aws-infra-017',
    topic: 'Control y operación',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'La documentación indica una interfaz de administración regional y recursos de ejecución vinculados a una AZ. ¿Qué lectura respeta ambas afirmaciones?',
    answer: 'El servicio puede ofrecer una entrada regional para administrar ejecución zonal.',
    wrong: [
      ['La interfaz regional obliga a ejecutar cada recurso en todas las AZ.', 'Confunde la distribución de la interfaz con la de los recursos.'], ['El recurso zonal obliga a que toda interfaz solo sea accesible desde su AZ.', 'El alcance del recurso no exige esa restricción de acceso.'], ['Las dos afirmaciones describen necesariamente servicios diferentes.', 'Un mismo servicio puede combinar esas características.']
    ],
    explanation: 'La organización del plano de control y la ubicación del recurso pueden describirse con alcances diferentes.',
    source: 'zonal'
  }),
  question({
    id: 'aws-infra-018',
    topic: 'Selección de región',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'Una región ofrece buena latencia, pero no la característica que requiere el sistema. ¿Cómo debe tratarse en la selección actual?',
    answer: 'No cumple ese requisito y no puede elegirse sin resolverlo o revisar el diseño.',
    wrong: [
      ['La buena latencia compensa automáticamente la característica ausente.', 'Mejorar un criterio no satisface un requisito funcional diferente.'], ['La característica estará disponible porque el mismo proveedor la ofrece en otra región.', 'Las características pueden variar por región.'], ['La característica deja de ser necesaria si el precio es menor.', 'Un menor precio no modifica por sí solo los requisitos.']
    ],
    explanation: 'Primero deben identificarse las alternativas que cumplen los requisitos necesarios.',
    source: 'selection'
  }),
  question({
    id: 'aws-infra-019',
    topic: 'Selección de región',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Dos regiones cumplen los requisitos de datos y características. Una tiene menor coste estimado; la otra, menor latencia medida. ¿Qué falta para decidir?',
    answer: 'Los objetivos y prioridades del sistema para evaluar ese intercambio.',
    wrong: [
      ['Nada: el menor coste decide siempre cualquier despliegue.', 'El coste es un criterio, pero puede haber objetivos de rendimiento relevantes.'], ['Nada: la menor latencia siempre vuelve irrelevante el coste.', 'La prioridad de latencia depende de las necesidades del sistema.'], ['Cuál tiene más AZ para convertir ese dato en el criterio decisivo.', 'El número de zonas no decide por sí solo la prioridad entre coste y latencia de este sistema.']
    ],
    explanation: 'Entre alternativas viables, las prioridades de negocio y del sistema orientan la comparación.',
    source: 'selection'
  }),
  question({
    id: 'aws-infra-020',
    topic: 'Selección de región',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'El sistema tiene una restricción explícita sobre dónde almacenar sus datos. ¿Qué orden de evaluación es coherente?',
    answer: 'Filtrar las regiones que cumplen esa restricción y comparar las demás necesidades entre las candidatas.',
    wrong: [
      ['Elegir primero el menor precio y omitir la restricción.', 'El precio no permite ignorar un requisito explícito.'], ['Considerar que el nombre global del proveedor garantiza cualquier ubicación requerida.', 'Hay que comprobar la ubicación concreta de los recursos y datos.'], ['Elegir una región y suponer que los datos se moverán solos si fuera necesario.', 'La ubicación y los mecanismos de distribución requieren decisiones explícitas.']
    ],
    explanation: 'Una restricción necesaria delimita las alternativas sobre las que se comparan otros criterios.',
    source: 'selection'
  }),
  question({
    id: 'aws-infra-021',
    topic: 'Selección de región',
    level: 'intermedio',
    skill: 'análisis',
    prompt: 'Un equipo selecciona una región solo por su distancia en un mapa. ¿Qué revisión mejora el fundamento de la decisión?',
    answer: 'Medir latencia y comprobar servicios, requisitos de ubicación y coste de la solución.',
    wrong: [
      ['Usar únicamente el número de AZ como prueba de menor latencia.', 'Ese número no mide la comunicación de los usuarios o dependencias.'], ['Dar por hecho que la distancia elimina la necesidad de verificar características.', 'La cercanía no garantiza que estén disponibles las capacidades necesarias.'], ['Comprobar solo que ambas regiones tengan un servicio con el mismo nombre.', 'También importan sus características, versiones y los demás requisitos.']
    ],
    explanation: 'La distancia orienta; la selección requiere comprobar requisitos y comportamiento real.',
    source: 'selection'
  }),
  question({
    id: 'aws-infra-022',
    topic: 'Dependencias y recuperación',
    level: 'intermedio',
    skill: 'análisis',
    prompt: 'Una API tiene instancias en AZ A y AZ B. Ambas necesitan un almacén que solo existe en AZ A y queda inaccesible. ¿Qué puede ocurrir?',
    answer: 'La instancia de AZ B puede seguir ejecutándose sin poder completar las operaciones que necesitan el almacén.',
    wrong: [
      ['La instancia de AZ B puede completar esas operaciones solo por seguir encendida.', 'Estar ejecutándose no resuelve una dependencia inaccesible.'], ['La distribución de la API demuestra que el almacén ya tiene una réplica en AZ B.', 'La ubicación de una capa no determina la distribución de otra.'], ['El caso demuestra necesariamente el fallo completo de toda la región.', 'El incidente descrito afecta una dependencia concreta de AZ A.']
    ],
    explanation: 'Hay que seguir las dependencias necesarias para completar la operación.',
    source: 'regional'
  }),
  question({
    id: 'aws-infra-023',
    topic: 'Dependencias y recuperación',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Dos diseños distribuyen la aplicación entre AZ. A usa un almacén solo en AZ A; B usa un servicio documentado con copias entre AZ. ¿Qué conclusión está justificada?',
    answer: 'B distribuye también los datos, pero hay que verificar su recuperación y las demás dependencias.',
    wrong: [
      ['Ambos ofrecen el mismo aislamiento porque la aplicación usa dos AZ.', 'La distribución de los datos es distinta y debe considerarse.'], ['A es equivalente si el almacén tiene una dirección de acceso regional.', 'La dirección no demuestra una distribución equivalente de los datos.'], ['B ya garantiza continuidad frente a una interrupción de toda la región.', 'Copias entre AZ no demuestran una distribución ni recuperación entre regiones.']
    ],
    explanation: 'Distribución, recuperación y continuidad de una operación deben analizarse por separado. El servicio del caso es hipotético.',
    source: 'regional'
  }),
  question({
    id: 'aws-infra-024',
    topic: 'Dependencias y recuperación',
    level: 'intermedio',
    skill: 'análisis',
    prompt: 'Los componentes de dos AZ dependen de un único recurso ubicado en una de ellas. ¿Qué conviene registrar en el análisis?',
    answer: 'La dependencia compartida que puede afectar a ambas partes de la operación.',
    wrong: [
      ['Solo el número de AZ, porque ya resume toda la arquitectura.', 'El número no describe las dependencias entre capas.'], ['Solo los componentes que están en la AZ del usuario.', 'La operación puede depender de recursos en otra ubicación.'], ['Una recuperación automática de la dependencia, aunque no esté documentada.', 'No se debe atribuir un mecanismo que no se ha comprobado.']
    ],
    explanation: 'Distribuir componentes no elimina una dependencia compartida situada en un único dominio de fallo.',
    source: 'regional'
  }),
  question({
    id: 'aws-infra-025',
    topic: 'Dependencias y recuperación',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Un diseño ha documentado copias en varias AZ de una región. ¿Qué afirmación requiere evidencia adicional?',
    answer: 'Que podrá continuar sus operaciones durante una interrupción de toda esa región.',
    wrong: [
      ['Que utiliza varias AZ según la documentación del caso.', 'Esa información está dada explícitamente.'], ['Que esas AZ pertenecen a una misma región.', 'El enunciado define esa relación.'], ['Que hay que revisar las dependencias para evaluar continuidad.', 'Es una necesidad del análisis, no una garantía de continuidad atribuida al diseño.']
    ],
    explanation: 'La separación entre regiones añade otro nivel de distribución y debe diseñarse y comprobarse.',
    source: 'regions'
  }),
  question({
    id: 'aws-infra-026',
    topic: 'Dependencias y recuperación',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Una operación funciona hoy desde dos AZ. ¿Qué información sigue faltando para evaluar un fallo de ubicación?',
    answer: 'La ubicación de sus dependencias y el comportamiento previsto si una deja de responder.',
    wrong: [
      ['Ninguna: una respuesta correcta hoy demuestra recuperación ante cualquier fallo.', 'Una observación de funcionamiento normal no demuestra ese comportamiento.'], ['Solo el número total de AZ que ofrece la región.', 'Ese número no indica dónde están las dependencias utilizadas ni cómo se recuperan.'], ['Solo si todos los recursos se administran mediante una API regional.', 'La interfaz de administración no documenta la continuidad de la operación completa.']
    ],
    explanation: 'El análisis de un fallo necesita información sobre el escenario de fallo, además del funcionamiento normal.',
    source: 'regional'
  }),
  question({
    id: 'aws-infra-027',
    topic: 'Dependencias y recuperación',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'La documentación de un recurso indica copias en varias ubicaciones, pero no se ha revisado cómo se utilizan si una falla. ¿Qué propiedad queda sin evaluar?',
    answer: 'El mecanismo de continuidad o recuperación que permite utilizar las copias.',
    wrong: [
      ['La existencia de las copias, que el enunciado ya da por documentada.', 'La distribución está indicada; la pregunta distingue cómo se aprovecha.'], ['La accesibilidad del endpoint desde varias AZ como garantía suficiente.', 'Poder acceder desde varias ubicaciones no explica cómo se recupera el recurso.'], ['La obligación de que todas las ubicaciones pertenezcan a una sola AZ.', 'No se puede deducir esa restricción ni resuelve la recuperación.']
    ],
    explanation: 'Disponer de copias y poder continuar una operación son propiedades relacionadas, pero diferentes.',
    source: 'regional'
  }),
  question({
    id: 'aws-infra-028',
    topic: 'Dependencias y recuperación',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Un almacén queda inaccesible. La consulta de datos falla, pero una operación de estado que no lo necesita sigue respondiendo. ¿Qué explica la diferencia?',
    answer: 'Las dos operaciones tienen dependencias distintas, aunque las procese la misma aplicación.',
    wrong: [
      ['La respuesta de estado demuestra que la consulta de datos también funciona.', 'El caso indica que una operación falla y otra no; sus requisitos son distintos.'], ['El proceso debe estar completamente detenido si cualquier consulta falla.', 'Un fallo de dependencia no equivale necesariamente a detener todo el proceso.'], ['La respuesta de estado demuestra una réplica del almacén en otra región.', 'Esa operación no utiliza el almacén y no prueba su distribución.']
    ],
    explanation: 'La unidad de análisis útil es la operación completa y los componentes que necesita.',
    source: 'regional'
  })
];
const byTopic = (topic: string) => questions.filter(item => item.topic === topic).map(item => item.id);
export const awsInfrastructureBank: QuestionBank = {
  id: contentId,
  revision: 1,
  contentId,
  title: 'Infraestructura global: regiones y zonas de disponibilidad',
  questions,
  presets: [
    {
      id: 'infraestructura',
      title: '1 · Infraestructura y aislamiento',
      description: 'Relaciona regiones, AZ, conectividad y dominios de fallo.',
      questionIds: byTopic('Infraestructura y aislamiento')
    },
    {
      id: 'alcance',
      title: '2 · Alcance y distribución',
      description: 'Distingue ubicación, accesibilidad y distribución física.',
      questionIds: byTopic('Alcance y distribución')
    },
    {
      id: 'planos',
      title: '3 · Control y operación',
      description: 'Analiza administración, ejecución y límites de las conclusiones.',
      questionIds: byTopic('Control y operación')
    },
    {
      id: 'region',
      title: '4 · Selección de región',
      description: 'Compara requisitos, latencia, capacidades y coste.',
      questionIds: byTopic('Selección de región')
    },
    {
      id: 'dependencias',
      title: '5 · Dependencias y recuperación',
      description: 'Sigue operaciones completas y comprueba qué permite afirmar cada caso.',
      questionIds: byTopic('Dependencias y recuperación')
    },
    {
      id: 'integrador',
      title: '6 · Repaso integrador',
      description: 'Reutiliza ocho preguntas de los bloques anteriores para conectar los conceptos.',
      questionIds: [
        3, 8, 12, 16, 19, 23, 26, 28
      ].map(number => `aws-infra-${String(number).padStart(3, '0')}`)
    }
  ]
};
