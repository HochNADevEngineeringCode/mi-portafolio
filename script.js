function abrirProyecto(tipo) {
    const modal = document.getElementById("modalProyecto");
    const contenedor = document.getElementById("infoProyecto");
    let contenido = "";

    if (tipo === 'mecanizado') {
        contenido = `
            <h2>Mecanizado de Precisión en Piezas Particulares/En Serie</h2>
            <p class="descripcion-proyecto">He realizado proyectos de mecanizados particulares de piezas para motores eléctricos/a combustión en tornos manuales y he realizado creaciones de diferentes códigos G en torno CNC para mecanizados de piezas en serie hace ya unos años.</p>
            <div class="galeria-interna">
                <img src="./img/mecanizado.gif">
                <img src="./img/cnc.jpg">
            </div>`;
    } 
    else if (tipo === 'electricidad') {
        contenido = `
            <h2>Instalaciones Eléctricas</h2>
            <p class="descripcion-proyecto">He realizado el diseño y armado de diversos tableros eléctricos industriales como domiciliarios, llevo más de 5 años en esta área y me gusta mucho, como también siempre se encuentran dificultades nuevas o misiones nuevas donde se aprende mucho más.</p>
            <div class="galeria-interna">
                <img src="./img/tablero.jpg">
                <img src="./img/tablero2.jpg">
                <img src="./img/tablero-domiciliario1.jpg">
            </div>`;
    }
    else if (tipo === 'diseno') {
        contenido = `
            <h2>Diseños 3D / 2D</h2>
            <p class="descripcion-proyecto">He realizado muchos diseños 2D y 3D de piezas particulares o a escala-personales; tales las he diseñado para impresión en máquinas 3D como para la prueba de diversos tipos de resistencias o fugas en programas como SolidWorks, también he realizado planos en 2D para edificios o proyectos privados metalúrgicos.</p>
            <div class="galeria-interna">
                <img src="./img/soli.jpg"> <img src="./img/soli2.jpg">
                <img src="./img/autocad.jpg"> <img src="./img/autocad2.jpg">
                <img src="./img/skep.jpg">
            </div>`;
    }
    else if (tipo === 'frontend') {
        contenido = `
            <h2>Galería de Código y Proyectos</h2>
            <p class="descripcion-proyecto">He realizado proyectos de apps y creación de páginas web para pequeños negocios privados y me gusta mucho desarrollar el Frontend y me estoy capacitando para dominar bien el sistema Full-Stack.  Aquí presento algunos ejemplos de algoritmos y estructuras que he desarrollado, desde herramientas técnicas industriales hasta interfaces web y aplicaciones funcionales secillas:</p>
            
            <h3 class="subtitulo-codigo">1. Cálculo Industrial (Python)</h3>
            <p class="desc-breve">Algoritmo para validar la caída de tensión en instalaciones eléctricas.</p>
            <div class="code-window">
                <div class="code-header">
                    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                    <span class="file-name">calculador_tension.py</span>
                </div>
                <pre class="code-content"><code><span class="keyword">def</span> <span class="function">verificar_cable</span>(d, i):
    caida = (<span class="number">2</span> * d * i * <span class="number">0.0172</span>) / <span class="number">4</span>
    <span class="keyword">return</span> <span class="string">f"Caída: {caida:.2f}V"</span></code></pre>
            </div>

            <h3 class="subtitulo-codigo">2. Estructura de Página Web (HTML)</h3>
            <p class="desc-breve">Maquetación básica para un sitio de servicios técnicos.</p>
            <div class="code-window">
                <div class="code-header">
                    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                    <span class="file-name">index.html</span>
                </div>
                <pre class="code-content"><code><span class="keyword">&lt;section</span> <span class="function">id=</span><span class="string">"servicios"</span><span class="keyword">&gt;</span>
    <span class="keyword">&lt;h2&gt;</span>Nuestros Servicios<span class="keyword">&lt;/h2&gt;</span>
    <span class="keyword">&lt;div</span> <span class="function">class=</span><span class="string">"card"</span><span class="keyword">&gt;</span>Electricidad<span class="keyword">&lt;/div&gt;</span>
<span class="keyword">&lt;/section&gt;</span></code></pre>
            </div>

            <h3 class="subtitulo-codigo">3. Diseño Visual (CSS)</h3>
            <p class="desc-breve">Personalización de botones con efectos modernos.</p>
            <div class="code-window">
                <div class="code-header">
                    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                    <span class="file-name">style.css</span>
                </div>
                <pre class="code-content"><code><span class="keyword">.btn-industrial</span> {
    <span class="function">background:</span> <span class="string">#ff9800</span>;
    <span class="function">border-radius:</span> <span class="number">5px</span>;
    <span class="function">transition:</span> <span class="number">0.3s</span>;
}</code></pre>
            </div>

            <h3 class="subtitulo-codigo">4. Tracker de Entrenamiento (Python)</h3>
            <p class="desc-breve">App sencilla para contar repeticiones y series.</p>
            <div class="code-window">
                <div class="code-header">
                    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                    <span class="file-name">gym_app.py</span>
                </div>
                <pre class="code-content"><code><span class="keyword">class</span> <span class="function">Entrenamiento</span>:
    <span class="keyword">def</span> <span class="function">__init__</span>(self, ej):
        self.ejercicios = []
    <span class="keyword">def</span> <span class="function">agregar</span>(self, nombre):
        self.ejercicios.append(nombre)</code></pre>
            </div>

            <h3 class="subtitulo-codigo">5. Robot de Precios (Scraper Python)</h3>
            <p class="desc-breve">Buscador automático de precios de materiales eléctricos.</p>
            <div class="code-window">
                <div class="code-header">
                    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                    <span class="file-name">scraper.py</span>
                </div>
                <pre class="code-content"><code><span class="keyword">import</span> requests
<span class="keyword">from</span> bs4 <span class="keyword">import</span> BeautifulSoup
<span class="comment"># Buscando precios actualizados...</span>
<span class="function">print</span>(<span class="string">"Conectando con base de datos..."</span>)</code></pre>
            </div>
        `;
    }

    contenedor.innerHTML = contenido;
    modal.style.display = "block";
}

function cerrarProyecto() {
    document.getElementById("modalProyecto").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalProyecto");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}