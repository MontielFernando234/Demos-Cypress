declare namespace Cypress {
  interface Chainable {
    /**
     * Selección de menú
     * @param menu 
     */
    navigateTo(menu: string): Chainable<void>;

    /**
     * Cargar username
     * @param username 
     */
    ingressName(username: string): Chainable<void>;

    /**
     * Cargar mail en formulario de nuevo usuario
     * @param mail 
     */
    ingressEmail(mail: string): Chainable<void>;
    
    /**
     * Cargar mail (Login)
     * @param mail 
     */
    ingressLoginEmail(mail: string): Chainable<void>;
    
    /**
     * Cargar password (Login)
     * @param pwd 
     */
    ingressLoginPassword(pwd: string): Chainable<void>;
    
    /**
     * Ingresar a signup
     */
    submitSignUp(): Chainable<void>;
    
    /**
     * Iniciar sesión
     */
    submitLogin(): Chainable<void>;
    
    /**
     * Validar título
     * @param title 
     */
    validTitleSignup(title: string): Chainable<void>;
    
    /**
     * validar campos precargados en formulario de nuevo usuario
     * @param username 
     * @param email 
     */
    preloadedInputs(username: string, email: string): Chainable<void>;

    /**
     * Seleccionar sexo
     * @param title 
     */
    selectTitle(title: "male" | "female"): Chainable<void>;
    
    /**
     * Cargar password en formulario de nuevo usuario
     * @param password 
     */
    typePassword(password: string): Chainable<void>;
    
    /**
     * Cargar fecha de cumpleaños en formulario de nuevo usuario
     * @param birthday 
     */
    selectDateBirthday(birthday: string): Chainable<void>; 
    
    /**
     * Seleccionar checkbox
     * @param chknl : Nombre del checkbox newsletter
     * @param chkopt : Nombre del checkbox de recepción de ofertas opcionales
     */
    optionalCheck(chknl: string, chkopt: string): Chainable<void>;
    
    /**
     * Carga de nombre de usuario
     * @param fn : nombre
     * @param ln : apellido
     */
    fillName(fn: string, ln: string): Chainable<void>;
    
    /**
     * Carga de nombre de compañía
     * @param company 
     */
    fillCompany(company: string): Chainable<void>;
    
    /**
     * Carga de dirección
     * @param add1 : dirección 1
     * @param add2 : dirección 2
     */
    fillAddress(add1: string, add2: string): Chainable<void>;
    
    /**
     * Carga de datos de ubicación
     * @param st : estado
     * @param c : ciudad
     * @param zc : código postal
     */
    fillLocation(st: string, c: string, zc: string): Chainable<void>;
    
    /**
     * Carga de número de teléfono
     * @param pn 
     */
    fillPhoneNumber(pn: string): Chainable<void>;
    
    /**
     * Envío de formulario de nuevo usuario
     * @param nameButton 
     */
    sendRegister(nameButton: string): Chainable<void>;
    
    /**
     * Validación de registro exitoso
     * @param msg : mensaje a validar
     */
    validTitleRegisterSuccessfully(msg: string): Chainable<void>;
    
    /**
     * Validación de login
     * @param txt : Texto del menú del usuario logueado
     * @param username : nombre de usuario
     */
    validLogin(txt?: string | null, username?: string | null): Chainable<void>;
    
    /**
     * Confirmación de cuenta creada
     */
    confirmAccountCreated(): Chainable<void>;
    
    /**
     * Validación de eliminación exitosa
     * @param msg 
     */
    validTitleDeleteSuccessfully(msg: string): Chainable<void>;
    
    /**
     * Agregar producto al carrito
     * @param buttonName nombre de botón
     * @param cart instancia de carrito de compras
     * @param itemListProduct número de producto en la lista
     * @param quantity cantidad del producto a agregar
     */
    addProduct(buttonName: string, cart:any, itemListProduct: number, quantity : number): Chainable<void>;
    
    /**
     * Continuar comprando
     * @param buttonName 
     */
    continueShopping(buttonName : string): Chainable<void>;

    /**
     * Ir al carrito de compras desde el modal de confirmación de producto agregado al carrito
     * @param linkName 
     */
    viewCartFromModalProductAdded(linkName : string) : Chainable<void>;

    /**
     * Validar productos en el carrito
     * @param products 
     */
    validateProductsInCart(products: Object): Chainable<void>;

    /**
     * Validar cantidad y precio total
     * @param products 
     */
    validateQuantityAndTotalPrice(products: Object): Chainable<void>;
  }

}
