class HomePage {
  private elements: {
    MENU: string;
    LOGO_HOME: string;
  };

  constructor() {
    this.elements = {
      MENU: "div.shop-menu > ul > li > a",
      LOGO_HOME: "div.logo > a"
    };
  }

  get Menu() : string{
    return this.elements.MENU;
  }

  get LogoHome():string{
    return this.elements.LOGO_HOME;
  }

}

export default new HomePage();
