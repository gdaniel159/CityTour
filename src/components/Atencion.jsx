import "../styles/Atencion.css";
export function AtencionComponent() {
    return (
        <>
            <body class="u-body u-xl-mode">
                <section class="u-clearfix u-palette-4-dark-1 u-section-1">
                    <div class="u-clearfix u-sheet u-sheet-1">

                        {/* CONTACTO */}
                        <div class="u-align-left u-container-style u-group u-white u-group-1">
                            <div class="u-container-layout u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                                <h2 class="u-custom-font u-font-oswald u-text u-text-1">CONTACTATE CON NOSOTROS</h2>
                                <div class="u-align-left u-form u-form-1">
                                    <div class="u-form-group">
                                        <label for="name-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                                        <input type="text" placeholder="Ingresa tu nombre" id="name-5a14" name="name"
                                            class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                                            required />
                                    </div>
                                    <div class="u-form-group">
                                        <label for="email-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                                        <input type="email" placeholder="Ingresa tu email" id="email-5a14" name="email"
                                            class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                                            required />
                                    </div>
                                    <div class="u-form-group">
                                        <label for="message-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Message</label>
                                        <textarea placeholder="Mandanos un mensaje!" rows="4" cols="50" id="message-5a14" name="message"
                                            class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input-rectangle"
                                            required></textarea>
                                    </div>
                                </div>
                                <div class="u-align-left u-form-group u-form-submit">
                                    <a href="src\components\Atencion.jsx" class="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-btn-1">ENVIAR</a>
                                </div>
                            </div>
                        </div>

                        {/* ATENCION */}
                        <div class="u-list-1">
                            <div class="u-repeater u-repeater-1">
                                {/* 1 */}
                                <div class="u-container-style u-palette-5-dark-3 u-repeater-item u-list-item-1">
                                    <div class="u-container-layout u-container-layout-2"><span
                                        class="u-file-icon u-icon u-text-palette-4-dark-1 u-icon-1"><img src="src\Image\call.png"
                                            alt="" /></span>
                                        <h5 class="u-text u-text-2">LLAMANOS</h5>
                                        <p class="u-text u-text-3"> (01) 574 8000</p>
                                    </div>
                                </div>

                                {/* 2 */}
                                <div class="u-container-style u-palette-5-dark-3 u-repeater-item u-list-item-2">
                                    <div class="u-container-layout u-container-layout-3"><span
                                        class="u-file-icon u-icon u-text-palette-4-dark-1 u-icon-2"><img src="src\Image\ml.png"
                                            alt="" /></span>
                                        <h5 class="u-text u-text-4">NUESTRO EMAIL</h5>
                                        <p class="u-text u-text-5"> Example@gmail.com</p>
                                        
                                    </div>
                                </div>

                                {/* 3 */}
                                <div class="u-container-style u-palette-5-dark-3 u-repeater-item u-list-item-3">
                                    <div class="u-container-layout u-container-layout-4"><span
                                        class="u-file-icon u-icon u-text-palette-4-dark-1 u-icon-3"><img src="src\Image\ml.png"
                                            alt="" /></span>
                                        <h5 class="u-text u-text-6">UN ASESOR TE AYUDARA</h5>
                                        <p class="u-text u-text-7"> Atenderemos todos los días de 08:00 a.m. a 05:00 p.m.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </body>

        </>
    )
}
import "../styles/A.min.css"
